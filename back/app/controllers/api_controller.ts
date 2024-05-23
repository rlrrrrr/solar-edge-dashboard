import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import logger from '@adonisjs/core/services/logger';
import { log } from 'console';

const timeUnits = ["QUARTER_OF_AN_HOUR", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"];

type CacheKeyStr = string;
class CacheKey {
  private startDate: string;
  private endDate: string;
  private timeUnit: string;
  constructor(startDate: string, endDate: string, timeUnit: string) {
    this.startDate = startDate;
    this.timeUnit = timeUnit;

    let currentDay = new Date().toISOString().split('T')[0];
    let endDay = new Date(endDate).toISOString().split('T')[0];

    if (endDay >= currentDay) { // yes, we can compare date strings like that
      logger.debug("End date is today or in the future, meaning we want live data. Setting cache key to reset at the next 15 minutes marker");

      // update time to the next 15 minutes. e.g. 11:31:00 -> 11:45:00
      let flooredTime = new Date();
      let flooredMinutes = Math.floor(flooredTime.getMinutes() / 15) * 15;
      flooredTime.setMinutes(flooredMinutes);
      flooredTime.setSeconds(0);
      flooredTime.setMilliseconds(0);

      this.endDate = flooredTime.toISOString();
    } else {
      this.endDate = endDate;
    }
  }

  toString(): CacheKeyStr {
    return JSON.stringify(this);
  }
}


// retrieve info from env, and crash if not available
let apiKey = env.get('SOLAREDGE_APIKEY');
if (!apiKey) throw new Error("Missing SolarEdge API key in env");

let siteId = env.get('SOLAREDGE_SITEID');
if (!siteId) throw new Error("Missing SolarEdge Site ID in env");

let endpoint = env.get('SOLAREDGE_ENDPOINT');
if (!endpoint) throw new Error("Missing SolarEdge Endpoint in env");
else if (!endpoint?.startsWith('http://')) endpoint = 'https://' + endpoint;

var cache: Map<CacheKeyStr, JSON> = new Map();

export default class ApiController {
  async electricity({ request, response }: HttpContext) {
    function ensureParam(key: string) {
      let val = request.all()[key];
      if (val) return val;
      else response.abort({ message: "Missing parameter: "+key });
    }

    // caclulate cache key
    let timeUnit = ensureParam('timeUnit');
    let startDate = ensureParam('startDate');
    let endDate = ensureParam('endDate');
    if (!timeUnits.includes(timeUnit)) response.abort({ message: "Invalid time unit: "+timeUnit})
    let key = new CacheKey(startDate, endDate, timeUnit);
    console.log(key.toString());

    // check if we have cached this request in the cache
    let value = cache.get(key.toString());
    if (value !== undefined) {
      response.header('X-Cache', 'true');
      response.send(value);
      return;
    }

    logger.info(`Sending SolarEdge request with start date ${startDate}, end date ${endDate}, time unit ${timeUnit}`);
    logger.info(`(Wanted key is ${key.toString()})`);
    // make request to SolarEdge API
    let resp = await fetch(endpoint + `/site/${siteId}/energy?`+new URLSearchParams({
      api_key: apiKey!,
      startDate: startDate,
      endDate: endDate,
      timeUnit: timeUnit,
    }));

    if (!resp.ok) {
      response.status(500).send(`Request to SolarEdge failed: ${resp.statusText} (Status code ${resp.status})`);
      return;
    }

    let json = await resp.json();
    // set cache key
    cache.set(key.toString(), json);

    response.header('X-Cache', 'false');
    response.send(json);
  }
}

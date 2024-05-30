import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import logger from '@adonisjs/core/services/logger';
import { Duration } from 'luxon';
import { CacheKey, CacheKeyStr, CachedValue } from '#utils/utils';

const timeUnits = ["QUARTER_OF_AN_HOUR", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"];

// retrieve info from env, and crash if not available
let latitude = env.get('LATITUDE');
if (!latitude) throw new Error("Missing latitude in env");

let longitude = env.get('LONGITUDE');
if (!longitude) throw new Error("Missing longitude in env");

let apiKey = env.get('SOLAREDGE_APIKEY');
if (!apiKey) throw new Error("Missing SolarEdge API key in env");

let siteId = env.get('SOLAREDGE_SITEID');
if (!siteId) throw new Error("Missing SolarEdge Site ID in env");

let endpoint = env.get('SOLAREDGE_ENDPOINT');
if (!endpoint) throw new Error("Missing SolarEdge Endpoint in env");
else if (!endpoint?.startsWith('http://')) endpoint = 'https://' + endpoint;

var cache: Map<CacheKeyStr, JSON> = new Map();

let weatherbitApiKey = env.get('WEATHERBIT_APIKEY');
if (!weatherbitApiKey) throw new Error("Missing Weatherbit API key in env");

let weatherbitEndpoint = env.get('WEATHERBIT_ENDPOINT');
if (!weatherbitEndpoint) throw new Error("Missing Weatherbit endpoint in env");
else if (!weatherbitEndpoint?.startsWith('http://')) weatherbitEndpoint = 'https://' + weatherbitEndpoint;

let co2Cache: CachedValue<JSON> = new CachedValue<JSON>(Duration.fromObject({ hours: 1 }));

function ensureParam(request: any, response: any, key: string) {
  let val = request.all()[key];
  if (val) return val;
  else response.abort({ message: "Missing parameter: " + key });
}

export default class ApiController {
  async electricity({ request, response }: HttpContext) {
    // caclulate cache key
    let timeUnit = ensureParam(request, response, 'timeUnit');
    let startDate = ensureParam(request, response, 'startDate');
    let endDate = ensureParam(request, response, 'endDate');
    if (!timeUnits.includes(timeUnit)) response.abort({ message: "Invalid time unit: " + timeUnit })
    let key = new CacheKey(startDate, endDate, timeUnit);

    // check if we have cached this request in the cache
    let value = cache.get(key.toString());
    if (value !== undefined) {
      response.header('X-Cache', 'true');
      response.send(value);
      return;
    }

    logger.info(`Sending SolarEdge request with start date ${startDate}, end date ${endDate}, time unit ${timeUnit}`);
    logger.debug(`(Wanted key is ${key.toString()})`);
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

    let json = await resp.json() as JSON;
    // set cache key
    cache.set(key.toString(), json);

    response.header('X-Cache', 'false');
    response.send(json);
  }

  async co2Production({ response }: HttpContext) {
    let value = co2Cache.get();
    if (value === null) {
      response.header('X-Cache', 'false');

      logger.info(`Sending SolarEdge request for CO2`);
      let resp = await fetch(endpoint + `/site/${siteId}/envBenefits?`+new URLSearchParams({
        api_key: apiKey!,
      }));

      if (!resp.ok) {
        response.status(500).send(`Request to SolarEdge failed: ${resp.statusText} (Status code ${resp.status})`);
        return;
      }

      value = await resp.json() as JSON;
      co2Cache.set(value);

    } else {
      response.header('X-Cache', 'true');
    }

    response.send(value);
  }

  async daily_solar_radiation({ request, response }: HttpContext) {

    let startDate = ensureParam(request, response, 'startDate');
    let endDate = ensureParam(request, response, 'endDate');

    logger.info(`Sending Weatherbit request with start date ${startDate}, end date ${endDate}`);
  }
}

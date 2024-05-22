import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

const timeUnits = ["QUARTER_OF_AN_HOUR", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"];

type CacheKeyStr = string;
class CacheKey {
  public startDate: string;
  public endDate: string;
  public timeUnit: string;
  constructor(startDate: string, endDate: string, timeUnit: string) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.timeUnit = timeUnit;
  }

  toString(): CacheKeyStr {
    return JSON.stringify(this);
  }
}

var cache: Map<CacheKeyStr, JSON> = new Map();

export default class ApiController {
  async electricity({ request, response }: HttpContext) {
    function ensureParam(key: string) {
      let val = request.all()[key];
      if (val) return val;
      else response.abort({ message: "Missing parameter: "+key });
    }

    // check if we have cached this request in the cache
    let timeUnit = ensureParam('timeUnit');
    if (!timeUnits.includes(timeUnit)) response.abort({ message: "Invalid time unit: "+timeUnit})
    let key = new CacheKey(ensureParam('startDate'), ensureParam("endDate"), timeUnit);
    let value = cache.get(key.toString());
    if (value !== undefined) {
      response.header('X-Cache', 'true');
      response.send(value);
      return;
    }

    // retrieve info from env
    let apiKey = env.get('SOLAREDGE_APIKEY');
    let endpoint = env.get('SOLAREDGE_ENDPOINT');
    if (!endpoint?.startsWith('http://')) {
      endpoint = 'https://' + endpoint;
    }

    // make request to SolarEdge API
    let resp = await fetch(endpoint + '/site/4082483/energy?'+new URLSearchParams({
      api_key: apiKey!,
      startDate: key.startDate,
      endDate: key.endDate,
      timeUnit: key.timeUnit,
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

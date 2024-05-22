import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

// add time of the day if not present
function addTimeOfTheDay(s: string): string {
  if (s.split(' ').length !== 2) { // assume time of the day is not included
    return s + ' 00:00:00';
  } else {
      return s;
  }
}

const timeUnits = ["QUARTER_OF_AN_HOUR", "HOUR", "DAY", "WEEK", "MONTH", "YEAR"];

class CacheKey {
  public startDate: string;
  public endDate: string;
  public timeUnit: string;
  constructor(startDate: string, endDate: string, timeUnit: string) {
    this.startDate = addTimeOfTheDay(startDate);
    this.endDate = addTimeOfTheDay(endDate);
    this.timeUnit = timeUnit;
  }
}

var cache: Map<CacheKey, JSON> = new Map();

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
    let value = cache.get(key);
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

    response.header('X-Cache', 'false');
    response.send(await resp.json());
  }
}

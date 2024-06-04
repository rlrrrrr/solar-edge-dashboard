import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import logger from '@adonisjs/core/services/logger';
import { Duration } from 'luxon';
import { CacheKey, CachedValue, TimeSerieCache } from '#utils/utils';
import { start } from 'repl';

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


let weatherbitApiKey = env.get('WEATHERBIT_APIKEY');
if (!weatherbitApiKey) throw new Error("Missing Weatherbit API key in env");

let weatherbitEndpoint = env.get('WEATHERBIT_ENDPOINT');
if (!weatherbitEndpoint) throw new Error("Missing Weatherbit endpoint in env");
else if (!weatherbitEndpoint?.startsWith('http://')) weatherbitEndpoint = 'https://' + weatherbitEndpoint;

let co2Cache: CachedValue<JSON> = new CachedValue<JSON>(Duration.fromObject({ hours: 1 }));
var electricityCache = new TimeSerieCache<JSON>();
var energyDetailsCache = new TimeSerieCache<JSON>();

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
    console.log(endDate);
    console.log(key.toString());

    // check if we have cached this request in the cache
    let value = electricityCache.get(key.toString());
    if (value !== null) {
      response.header('X-Cache', 'true');
      response.send(value);
      return;
    }

    logger.info(`Sending SolarEdge request with start date ${startDate}, end date ${endDate}, time unit ${timeUnit}`);
    logger.debug(`(Wanted key is ${key.toString()})`);
    // make request to SolarEdge API
    let url = endpoint + `/site/${siteId}/energy?`+new URLSearchParams({
      api_key: apiKey!,
      startDate: startDate,
      endDate: endDate,
      timeUnit: timeUnit,
    });
    console.log(url);
    let resp = await fetch(url);

    if (!resp.ok) {
      response.status(500).send(`Request to SolarEdge failed: ${resp.statusText} (Status code ${resp.status})`);
      return;
    }

    let json = await resp.json() as JSON;
    // set cache key
    electricityCache.set(key.toString(), json);

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

  async energyDetails({ request, response }: HttpContext) {
    // caclulate cache key
    let meters = ensureParam(request, response, 'meters');
    let timeUnit = ensureParam(request, response, 'timeUnit');
    let startDate = ensureParam(request, response, 'startDate');
    let endDate = ensureParam(request, response, 'endDate');
    if (!timeUnits.includes(timeUnit)) response.abort({ message: "Invalid time unit: " + timeUnit })
    let key = new CacheKey(startDate, endDate, timeUnit, meters);
  
    let value = energyDetailsCache.get(key.toString());
    if (value === null) {
      response.header('X-Cache', 'false');

      logger.info(`Sending SolarEdge request for energy details`);
      let resp = await fetch(endpoint + `/site/${siteId}/energyDetails?`+new URLSearchParams({
        api_key: apiKey!,
        startTime: startDate+" 00:00:00",
        endTime: endDate+" 23:59:59",
        timeUnit: timeUnit,
        meters: meters,
      }));

      if (!resp.ok) {
        response.status(500).send(`Request to SolarEdge failed: ${resp.statusText} (Status code ${resp.status})`);
        return;
      }

      value = await resp.json() as JSON;
      console.log(value);
      energyDetailsCache.set(key.toString(), value);

    } else {
      response.header('X-Cache', 'true');
    }

    response.send(value);
  }

  async daily_solar_radiation({ request, response }: HttpContext) {

    let startDate = ensureParam(request, response, 'startDate');
    let endDate = ensureParam(request, response, 'endDate');

    logger.info(`Sending Weatherbit request with start date ${startDate}, end date ${endDate}`);
    // make request to Weatherbit API
    let resp = await fetch(weatherbitEndpoint + `/history/subhourly?` + new URLSearchParams({
      key: weatherbitApiKey!,
      lat: latitude!,
      lon: longitude!,
      lang: 'fr',
      start_date: startDate,
      end_date: endDate,
    }));

    if (!resp.ok) {
      response.status(500).send(`Request to Weatherbit failed: ${resp.statusText} (Status code ${resp.status})`);
      return;
    }

    let json = await resp.json() as JSON;
    response.send(json);
  }

  async hourly_prediction_solar_radiation({ request, response }: HttpContext) {

    logger.info(`Sending Weatherbit request for 24h forecasts`);
    // make request to Weatherbit API
    let resp = await fetch(weatherbitEndpoint + `/forecast/hourly?` + new URLSearchParams({
      key: weatherbitApiKey!,
      lat: latitude!,
      lon: longitude!,
      lang: 'fr',
      hours: '24',  // One day
    }));

    if (!resp.ok) {
      response.status(500).send(`Request to Weatherbit failed: ${resp.statusText} (Status code ${resp.status})`);
      return;
    }

    let json = await resp.json() as JSON;
    response.send(json);

  }
}

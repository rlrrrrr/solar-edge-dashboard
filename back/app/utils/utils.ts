import logger from "@adonisjs/core/services/logger";
import { Duration } from "luxon";

export class CachedValue<T> {
  private ttl: Duration;
  private lastSet: Date | null = null;
  private value: T | null = null;

  constructor(ttl: Duration) {
    this.ttl = ttl;
  }

  set(value: T) {
    this.lastSet = new Date();
    this.value = value;
  }

  get(): T | null {
    if (this.lastSet && this.lastSet.getTime() + this.ttl.as("milliseconds") < Date.now()) {
      return null;
    }
    return this.value;
  }
}


export type CacheKeyStr = string;
export class CacheKey {
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
    return this.startDate + "|" + this.endDate + "|" + this.timeUnit;
  }
}

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

export class TimeSerieCache<T> {
  private cache: Map<CacheKeyStr, T> = new Map();
  
  get(key: CacheKeyStr): T | null {
    return this.cache.get(key) || null;
  }

  set(key: CacheKeyStr, value: T) {
    this.cache.set(key, value);
  }
}

export type CacheKeyStr = string;
export class CacheKey {
  private members: string[] = [];
  constructor(startDate: string, endDateStr: string, ...others: string[]) {
    this.members.push(startDate);
    this.members.push(endDateStr);

    // handle case where the end day is today or later (if so, the data will change)
    let endDay = new Date(endDateStr);
    endDay.setHours(23, 59, 59, 999);
    if (endDay >= new Date()) {
      logger.debug("End date is today or in the future, meaning we want live data. Setting cache key to reset at the next 15 minutes marker");

      let currentDate = new Date();
      // update time to the next 15 minutes. e.g. 11:31:00 -> 11:45:00
      let flooredMinutes = Math.floor(currentDate.getMinutes() / 15) * 15;
      currentDate.setMinutes(flooredMinutes);
      currentDate.setSeconds(0);
      currentDate.setMilliseconds(0);

      this.members.push(currentDate.toISOString());
    }

    this.members.concat(others);
  }

  toString(): CacheKeyStr {
    let s = "";
    for (let other of this.members) {
      s += "|" + other;
    }
    return s;
  }
}

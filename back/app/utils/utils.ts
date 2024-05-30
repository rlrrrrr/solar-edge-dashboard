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

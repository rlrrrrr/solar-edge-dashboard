import {randomUUID} from "node:crypto";


export default class UuidGenerator {
  generate() {
    return randomUUID()
  }
}

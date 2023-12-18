import { Collection } from "@discordjs/collection"
import { cacheManager } from "./cacheManager"
import { Client } from "../client"

export class DataManager<Key = any, Value = any> {
  public client: Client
  private _cache: cacheManager<Key, Value>

  constructor(client: Client, Iterable?: Iterable<readonly [Key, Value]>) {
    Object.defineProperty(this, "client", { value: client })
    if (!Iterable) this._cache = new cacheManager(Iterable)
  }

  get cache() {
    if (!this._cache) this._cache = new cacheManager<Key, Value>()
    return this._cache
  }

  set(key: Key, value: Value) {
    this.cache.add(key, value)
    return this
  }

  resolveId(id: Key) {
    return this.cache.get(id)
  }

  setCache(Iterable?: Iterable<readonly [Key, Value]>) {
    const collection = new Collection<Key, Value>(Iterable)
    const fusion = this.cache.concat(collection)
    Object.defineProperty(this, "_cache", { value: fusion })
    return this
  }
}

import { Client, cacheManager } from "..";

export class DataManager<T = any , Key = any, Value = any>{
    public client: Client;
    private _cache: cacheManager<Key, Value>;

    constructor(client: Client){
        Object.defineProperty(this, "client", { value: client })
    };

    get cache(){
        if(!this._cache) this._cache = new cacheManager<Key, Value>();
        return this._cache;
    };

    resolveId(id: Key){
        const value = this.cache.get(id);
        if(value) return value;
        return undefined;
    };

};
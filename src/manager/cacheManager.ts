import { Collection } from "@discordjs/collection"

export class cacheManager<Key, Value> extends Collection<Key, Value> {

    constructor(iterable?: Iterable<readonly [Key, Value]> | null | undefined){
        super(iterable);
    };

    add(key: Key, item: Value){
        if(this.has(key)) this.delete(key);
        return this.set(key, item);
    };
};
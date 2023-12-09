import { Client } from "../client";

export class ModelsBase<T extends any> {
    public data: T;
    public client: Client;
    constructor(_d: T, _c: Client){
        Object.defineProperty(this, "data", { value: _d });
        Object.defineProperty(this, "client", { value: _c});
    };

    public get toJson(){
    return this.data;
    };
};
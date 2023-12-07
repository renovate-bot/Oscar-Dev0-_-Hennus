import { GatewayDispatchPayload } from "@discordjs/core";

export class ModelsBase<T extends GatewayDispatchPayload["d"]> {
    public data: T;
    constructor(_d: T){
        Object.defineProperty(this, "data", { value: _d });
    };

    public get toJson(){
    return this.data;
    };
};
import { ActionBase } from "./base";
import { GatewayMessageCreateDispatch } from "@discordjs/core";

export class MessageCreate extends ActionBase<GatewayMessageCreateDispatch> {
    constructor(data: GatewayMessageCreateDispatch) {
        super(data.d, data.t);
    };
    
};
import { Client, Message } from "../..";
import { ActionBase } from "./base";
import { GatewayMessageCreateDispatch } from "@discordjs/core";

export class MessageCreate extends ActionBase<GatewayMessageCreateDispatch> {
    constructor(data: GatewayMessageCreateDispatch, client: Client) {
        super(data, client);
    };

    public get toData(){
        const msg = new Message(this.client, this.data);
        
        return super.toJSON(this.type, msg);
    };
    
};
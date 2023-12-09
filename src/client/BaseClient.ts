
import { Client } from "@discordjs/core";
import { REST } from "@discordjs/rest";
import { WebSocketManager } from "@discordjs/ws";
import { AsyncEventEmitter } from '@vladfrangu/async_event_emitter';
import { HennusClientOptions, EventsHandler } from "..";

export class HennusClientBase extends AsyncEventEmitter<EventsHandler>  {

    private core: Client;
    private ws: WebSocketManager;
    private rest: REST;


    constructor(clientOptions: HennusClientOptions) {
        super();
        const rest = new REST(clientOptions.restOption).setToken(clientOptions.token);
        const gateway = new WebSocketManager({ intents: clientOptions.intents, token: clientOptions.token, rest, ...clientOptions.wsOption })
        this.core = new Client({ rest, gateway });
        this.ws = gateway;
        this.rest = rest;
    };

    get api() {
        return this.core.api;
    };

    get destroy() {
        return this.ws.destroy({ "code": 0, reason: "Apagando la Npm de Hennus" });
    };

    async action(){
    };
};
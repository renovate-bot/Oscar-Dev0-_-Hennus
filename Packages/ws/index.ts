import { Client } from "../core";

export class HennusWs {
    private client: Client;
    constructor(client: Client){
        this.client = client;
    };

    public gateway(){
    };
};
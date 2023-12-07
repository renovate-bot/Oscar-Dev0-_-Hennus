import { HennusClientOptions } from "../types";
import { HennusClientBase } from "./base";

export class Client extends HennusClientBase {
    constructor(options: HennusClientOptions){
        super(options);
    };


    async start(){
        try {
        //@ts-ignore
        await this.ws.connect();
        } catch (error) {
            throw error;
        };
    };
};
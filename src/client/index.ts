import { HennusClientOptions } from "../types/ITF-Options";
import { HennusClientBase } from "./BaseClient";



export class Client extends HennusClientBase {

    constructor(clientOptions: HennusClientOptions){
        super(clientOptions);
    };


    async login(){
        try {
            //@ts-ignore
            await this.ws.connect();
            return true;
        } catch (error) {
            throw error;
        };
    };

};
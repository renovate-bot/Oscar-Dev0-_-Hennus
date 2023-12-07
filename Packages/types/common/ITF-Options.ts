import { ConstructorOptions } from "eventemitter2";
import { _Omit } from "../assets";
import { WebSocketManagerOptions } from "@discordjs/ws"
import { RESTOptions } from "@discordjs/rest"
import { GatewayIntentBits } from "@discordjs/core";


export interface HennusSocketOptions extends _Omit<WebSocketManagerOptions, "token" | "rest" | "intents"> {
    events?: _Omit<ConstructorOptions, "wildcard"  | "delimiter" | "ignoreErrors" | "verboseMemoryLeak" >;
};

export interface HennusClientOptions {
    token: string;
    intents: GatewayIntentBits;
    restOption?: RESTOptions;
    wsOption?: HennusSocketOptions;
}
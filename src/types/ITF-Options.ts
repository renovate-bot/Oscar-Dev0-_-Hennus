import { _Omit } from "./Util";
import { WebSocketManagerOptions } from "@discordjs/ws";
import { RESTOptions } from "@discordjs/rest";
import { GatewayIntentBits } from "@discordjs/core";

export interface HennusClientOptions {
  token: string;
  intents: GatewayIntentBits;
  restOption?: RESTOptions;
  wsOption?: _Omit<WebSocketManagerOptions, "token" | "rest" | "intents">;
}

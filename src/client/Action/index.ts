import { Client, ListEvents } from "../..";
import { GatewayDispatchEvents, GatewayDispatchPayload } from "@discordjs/core";
import { MessageCreate } from "./messageCreate";
import { ActionBase } from "./base";
import { ChannelEvents } from "./ChannelEvents";

export class ActionEvents {
  constructor(client: Client, data: GatewayDispatchPayload) {
    const json = this.payload(client, data);

    //@ts-ignore
    client.emit(json.name, ...json.args);
  }

  payload(client: Client, data: GatewayDispatchPayload) {
    let json: {
      name: keyof ListEvents;
      args: any[];
    };
    if (data.t == GatewayDispatchEvents.MessageCreate) {
      json = new MessageCreate(data, client).toData;
    } else if (
      data.t == GatewayDispatchEvents.ChannelCreate ||
      data.t == GatewayDispatchEvents.ChannelDelete ||
      data.t == GatewayDispatchEvents.ChannelUpdate
    ) json = new ChannelEvents(data, client).toData;
    else {
      const action = new ActionBase(data, client);

      //@ts-ignore
      json = action.toJSON(action.type, action.data);
    }
    return json;
  }
}

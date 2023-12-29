import { Client, ListEvents } from "../..";
import { GatewayDispatchEvents, GatewayDispatchPayload } from "@discordjs/core";
import { MessageCreate } from "./messageCreate";
import { ActionBase } from "./base";
import { ChannelEvents } from "./ChannelEvents";
import { Ready } from "./Ready";
import { MessageDelete } from "./MessageDelete";

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

    // Message
    if (data.t == GatewayDispatchEvents.MessageCreate) {
      json = new MessageCreate(data, client).toData;
    } else if (data.t == GatewayDispatchEvents.MessageDelete) {
      json = new MessageDelete(data, client).toData;
    } // Channel
    else if (
      data.t == GatewayDispatchEvents.ChannelCreate ||
      data.t == GatewayDispatchEvents.ChannelDelete ||
      data.t == GatewayDispatchEvents.ChannelUpdate
    )
      json = new ChannelEvents(data, client).toData;
    // Ready
    else if (data.t == GatewayDispatchEvents.Ready) {
      json = new Ready(data, client).toData;
    } // Resto de Eventos sin un type especifico
    else {
      const action = new ActionBase(data, client);

      //@ts-ignore
      json = action.toJSON(action.type, { data: action.data, shardId: client.user.shard.id, api: client.api });
    }
    return json;
  }
}

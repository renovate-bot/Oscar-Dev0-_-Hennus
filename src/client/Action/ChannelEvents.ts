import { ChannelResolved } from "../..";
import { ActionBase } from "./base";
import { GatewayChannelCreateDispatch } from "@discordjs/core";

export class ChannelEvents extends ActionBase<GatewayChannelCreateDispatch> {
  public get toData() {
    const channel = ChannelResolved(this.client, this.data);

    if (this.type == "ChannelCreate" || this.type == "ChannelUpdate") {
      this.client.channels.set(channel.id, channel);
    } else this.client.channels.cache.delete(channel.id);

    return super.toJSON(this.type, channel);
  }
}

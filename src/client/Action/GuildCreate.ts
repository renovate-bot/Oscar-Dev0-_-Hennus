import { ChannelResolved } from "../..";
import { Guild } from "../../Models";
import { ActionBase } from "./base";
import { GatewayGuildCreateDispatch } from "@discordjs/core";

export class ChannelEvents extends ActionBase<GatewayGuildCreateDispatch> {
  public get toData() {
    const guild = new Guild(this.client, this.data);
    const channels = this.data.channels
      .concat(this.data.threads)
      .map((x) => ChannelResolved(this.client, x));

    this.client.channels.setCache(channels.map((x) => [x.id, x]));

    this.client.guilds.set(guild.id, guild);

    return super.toJSON(this.type, guild);
  }
}

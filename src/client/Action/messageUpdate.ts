import { Message } from "../..";
import { ActionBase } from "./base";
import { GatewayMessageUpdateDispatch } from "@discordjs/core";

export class MessageUpdate extends ActionBase<GatewayMessageUpdateDispatch> {
  public get toData() {
          
    const channel = this.client.channels.cache.get(this.data.channel_id);
    const guild = this.client.guilds.cache.get(this.data.guild_id ?? "");
    //const guild = 0;
    let msg: Message | undefined;
    if (channel && channel.isTextBased()) {
      msg = channel.messages.resolveId(this.data.id);

            //@ts-ignore
  channel.messages.cache.set(this.data.id, msg._patch(this.data));
      this.client.channels.set(channel.id, channel);
      if (guild) {
        guild.channels.set(channel.id, channel);
        this.client.guilds.set(guild.id, guild);
      }
    }

    return super.toJSON(this.type, msg);
  }
}

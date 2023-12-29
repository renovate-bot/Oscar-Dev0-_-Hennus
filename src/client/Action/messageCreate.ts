import { Message } from "../..";
import { ActionBase } from "./base";
import { GatewayMessageCreateDispatch } from "@discordjs/core";

export class MessageCreate extends ActionBase<GatewayMessageCreateDispatch> {
  public get toData() {
    const msg = new Message(this.client, this.data);

    const guild = this.client.guilds.cache.get(this.data.guild_id ?? "");
    const channel = msg.channel;
    if (channel && channel.isTextBased()) {
      channel.messages.set(msg.id, msg);
      this.client.channels.set(channel.id, channel);
      if (guild) {
        guild.channels.set(channel.id, channel);

        this.client.guilds.set(guild.id, guild);
      }
    }

    return super.toJSON(this.type, msg);
  }
}

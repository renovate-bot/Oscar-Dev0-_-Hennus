import { Message } from "../..";
import { ActionBase } from "./base";
import { GatewayMessageDeleteDispatch } from "@discordjs/core";

export class MessageDelete extends ActionBase<GatewayMessageDeleteDispatch> {
  public get toData() {
    const channel = this.client.channels.cache.get(this.data.channel_id);
    const guild = this.client.guilds.cache.get(this.data.guild_id ?? "");
    //const guild = 0;
    let msg: Message | undefined;
    if (channel && channel.isTextBased()) {
      msg = channel.messages.resolveId(this.data.id);
      channel.messages.cache.delete(this.data.id);
      this.client.channels.set(channel.id, channel);
      if (guild) {
        guild.channels.set(channel.id, channel);
        this.client.guilds.set(guild.id, guild);
      }
    }

    return super.toJSON(
      this.type,
      {
        data: this.data,
        shardId: this.client.user.shard.id,
        api: this.client.api,
      },
      msg,
    );
  }
}

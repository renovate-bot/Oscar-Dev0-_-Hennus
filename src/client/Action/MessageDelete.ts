import { Message } from "../.."
import { ActionBase } from "./base"
import { GatewayMessageDeleteDispatch } from "@discordjs/core"

export class MessageDelete extends ActionBase<GatewayMessageDeleteDispatch> {
  public get toData() {
    const channel = this.client.channels.cache.get(this.data.channel_id)
    //const guild = 0;
    let msg: Message | undefined
    if (channel && channel.isTextBased()) { 
      msg = channel.messages.resolveId(this.data.id); 
      channel.messages.cache.delete(this.data.id); 
      this.client.channels.set(channel.id, channel);
    };


    return super.toJSON(this.type, msg)
  }
}

import { Message } from "../.."
import { ActionBase } from "./base"
import { GatewayMessageCreateDispatch } from "@discordjs/core"

export class MessageCreate extends ActionBase<GatewayMessageCreateDispatch> {
  public get toData() {
    const msg = new Message(this.client, this.data)

    const channel = msg.channel
    if (channel && channel.isTextBased()) {
      channel.messages.set(msg.id, msg)
      this.client.channels.set(channel.id, channel)
    }

    return super.toJSON(this.type, msg)
  }
}

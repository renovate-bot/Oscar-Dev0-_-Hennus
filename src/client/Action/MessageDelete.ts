import { Client, Message } from "../.."
import { ActionBase } from "./base"
import { GatewayMessageDeleteDispatch } from "@discordjs/core"

export class MessageCreate extends ActionBase<GatewayMessageDeleteDispatch> {
  constructor(data: GatewayMessageDeleteDispatch, client: Client) {
    super(data, client)
  }

  public get toData() {
    const channel = this.client.channels.cache.get(this.data.channel_id)
    //const guild = 0;
    let msg: Message | undefined
    if (channel?.isTextBased()) msg = channel.messages.resolveId(this.data.id)

    return super.toJSON(this.type, msg)
  }
}

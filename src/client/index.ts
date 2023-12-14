import { GatewayDispatchPayload } from "@discordjs/core"
import { ChannelsManager } from "../manager"
import { HennusClientOptions } from "../types/ITF-Options"
import { HennusClientBase } from "./BaseClient"
import { WebSocketShardEvents } from "@discordjs/ws"
import { ActionEvents } from "./Action"

export class Client extends HennusClientBase {
  //Collections
  public channels = new ChannelsManager(this)

  constructor(clientOptions: HennusClientOptions) {
    super(clientOptions)
  }

  async login() {
    try {
      //@ts-ignore
      await this.ws.connect()
      //@ts-ignore
      this.ws.on(
        WebSocketShardEvents.Dispatch,
        ({ data }) => this.action(data),
      )
      return true
    } catch (error) {
      throw error
    }
  }

  action(data: GatewayDispatchPayload) {
    return new ActionEvents(this, data)
  }
}

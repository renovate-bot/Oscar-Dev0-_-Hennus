import { GatewayDispatchPayload } from "@discordjs/core"
import { ChannelsManager } from "../manager"
import { HennusClientBase } from "./BaseClient"
import { WebSocketShardEvents } from "@discordjs/ws"
import { ActionEvents } from "./Action"
import { GuildsManager } from "../manager"

export class Client extends HennusClientBase {
  //Collections
  public channels = new ChannelsManager(this);
  public guilds = new GuildsManager(this);

  async login() {
    try {
      //@ts-ignore
      this.ws.on(
        WebSocketShardEvents.Dispatch,
        ({ data }) => this.action(data),
      )
      //@ts-ignore
      await this.ws.connect()
      return true
    } catch (error) {
      throw error
    }
  }

  action(data: GatewayDispatchPayload) {
    return new ActionEvents(this, data)
  }
}

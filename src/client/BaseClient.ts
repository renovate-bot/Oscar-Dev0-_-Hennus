import { Client } from "@discordjs/core"
import { REST } from "@discordjs/rest"
import { WebSocketManager } from "@discordjs/ws"
import { AsyncEventEmitter } from "@vladfrangu/async_event_emitter"
import { HennusClientOptions, ListEvents } from "../types"
import { ClientUser } from "../Models"

export class HennusClientBase extends AsyncEventEmitter<ListEvents> {
  private core: Client
  private ws: WebSocketManager
  private rest: REST
  public user: ClientUser

  constructor(clientOptions: HennusClientOptions) {
    super()
    const rest = new REST(clientOptions.restOption).setToken(
      clientOptions.token,
    )
    const gateway = new WebSocketManager({
      intents: clientOptions.intents,
      token: clientOptions.token,
      rest,
      ...clientOptions.wsOption,
    })
    this.core = new Client({ rest, gateway })
    this.ws = gateway
    this.rest = rest
  }

  get api() {
    return this.core.api
  }

  get destroy() {
    return this.ws.destroy({ "code": 0, reason: "Apagando la Npm de Hennus" })
  }

  private _patch(data: any) {
    if ("user" in data) {
      Object.defineProperty(this, "user", { value: data.user })
    }
  }
}

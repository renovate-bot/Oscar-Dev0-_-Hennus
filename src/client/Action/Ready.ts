import { ClientUser } from "../.."
import { ActionBase } from "./base"
import {  GatewayReadyDispatch } from "@discordjs/core"

export class Ready extends ActionBase<GatewayReadyDispatch> {
  public get toData() {
    const user = new ClientUser(this.client, this.data);
    
    //@ts-ignore
    this.client._patch({ user });

    return super.toJSON(this.type, user)
  }
}

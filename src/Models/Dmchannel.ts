import { APIDMChannel, APIGroupDMChannel } from "@discordjs/core"
import { BaseChannel } from "./baseChannel"
import { Client } from "../client"

export class DMChannel<
  T extends APIGroupDMChannel | APIDMChannel = APIDMChannel,
> extends BaseChannel<T> {

  get recipients() {
    return this.data.recipients
  }

  get name() {
    return this.data.name
  }

  get LastMesssageId() {
    return this.data.last_message_id
  }

  get LastPinTimestamp() {
    return this.data.last_pin_timestamp
  }
}

export class GroupDMChannel extends DMChannel<APIGroupDMChannel> {


  get ownerId() {
    return this.data.owner_id
  }

  get icon() {
    return this.data.icon
  }

  get manager() {
    return this.data.managed
  }

  get applicationId() {
    return this.data.application_id
  }
}

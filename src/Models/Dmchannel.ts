import { APIDMChannel, APIGroupDMChannel } from "@discordjs/core";
import { BaseChannel, Client } from "..";

export class DMChannel<
  T extends APIGroupDMChannel | APIDMChannel = APIDMChannel,
> extends BaseChannel<T> {
  constructor(client: Client, data: T) {
    super(client, data);
  }

  get recipients() {
    return this.data.recipients;
  }

  get name() {
    return this.data.name;
  }

  get LastMesssageId() {
    return this.data.last_message_id;
  }

  get LastPinTimestamp() {
    return this.data.last_pin_timestamp;
  }
}

export class GroupDMChannel extends DMChannel<APIGroupDMChannel> {
  constructor(client: Client, data: APIGroupDMChannel) {
    super(client, data);
  }

  get ownerId() {
    return this.data.owner_id;
  }

  get icon() {
    return this.data.icon;
  }

  get manager() {
    return this.data.managed;
  }

  get applicationId() {
    return this.data.application_id;
  }
}

import {
  APINewsChannel,
  APITextChannel,
  RESTPostAPIChannelMessageJSONBody,
} from "@discordjs/core";
import {
  BaseGuildChannel,
  Client,
  Message,
  MessageChannelCreate,
  MessagesManager,
} from "..";

export class GuildTextChannel
  extends BaseGuildChannel<APITextChannel | APINewsChannel> {
  private _messages: MessagesManager;
  constructor(client: Client, data: APITextChannel | APINewsChannel) {
    super(client, data);
  }

  get messages() {
    if (!this._messages) {
      this._messages = new MessagesManager(this.client);
      this._messages.fetchAll(this.id);
    }
    return this._messages;
  }
}

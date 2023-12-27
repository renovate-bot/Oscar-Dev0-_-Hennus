import { APINewsChannel, APITextChannel } from "@discordjs/core";
import { BaseGuildChannel } from "./baseChannel";
import { MessagesManager } from "../manager";

export class GuildTextChannel extends BaseGuildChannel<
  APITextChannel | APINewsChannel
> {
  private _messages: MessagesManager;

  get messages() {
    if (!this._messages) {
      this._messages = new MessagesManager(this.client);
      this._messages.fetchAll(this.id);
    }
    return this._messages;
  }
}

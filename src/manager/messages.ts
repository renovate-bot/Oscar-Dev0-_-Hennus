import { RESTGetAPIChannelMessagesQuery } from "@discordjs/core";
import { Client, DataManager, Message } from "..";
import { Collection } from "@discordjs/collection";

export class MessagesManager extends DataManager<string, Message> {
  constructor(client: Client, map?: Message[]) {
    const _map: Iterable<readonly [string, Message]> | undefined = map?.map((
      x,
    ) => [x.id, x]);
    super(client, _map);
  }

  async fetch(channelId: string, MessageId: string, force?: boolean) {
    const existing = this.cache.get(MessageId);
    if (existing && !force) return existing;
    const data = await this.client.api.channels.getMessage(
      channelId,
      MessageId,
    );
    if (data) {
      const msg = new Message(this.client, data);
      this.set(msg.id, msg);
      return msg;
    } else return undefined;
  }

  async fetchAll(channelId: string, options?: RESTGetAPIChannelMessagesQuery) {
    const messages =
      (await this.client.api.channels.getMessages(channelId, options))?.map((
        x,
      ) => new Message(this.client, x));
    if (Array.isArray(messages)) this.setCache(messages.map((x) => [x.id, x]));
    return messages;
  }
}

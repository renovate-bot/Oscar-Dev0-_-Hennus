import {
  APIChannel,
  APIGuildCategoryChannel,
  APIGuildForumChannel,
  APIGuildMediaChannel,
  APIGuildStageVoiceChannel,
  APIGuildVoiceChannel,
  APIThreadChannel,
  ChannelType,
} from "@discordjs/core";
import {
  BaseGuildChannel,
  Channel,
  Client,
  DMChannel,
  GroupDMChannel,
  GuildTextChannel,
} from "..";
export * from "./colorResolved";
export * from "./EmojiResolved";
export * from "./Errors";

export * from "./Bitfield";
export * from "./BaseBitField";
export * from "./Permissions";

export function ChannelResolved(client: Client, data: APIChannel) {
  let channel: Channel;
  if (data.type == ChannelType.GuildCategory) {
    channel = new BaseGuildChannel<APIGuildCategoryChannel>(client, data);
  } else if (
    data.type == ChannelType.GuildText ||
    data.type == ChannelType.GuildAnnouncement
  ) channel = new GuildTextChannel(client, data);
  else if (data.type == ChannelType.DM) channel = new DMChannel(client, data);
  else if (data.type == ChannelType.GroupDM) {
    channel = new GroupDMChannel(client, data);
  } else {channel = new BaseGuildChannel<
      | APIGuildVoiceChannel
      | APIGuildStageVoiceChannel
      | APIThreadChannel
      | APIGuildForumChannel
      | APIGuildMediaChannel
    >(client, data);}

  return channel;
}

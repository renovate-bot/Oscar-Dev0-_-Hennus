export * from "./Message"

export * from "./baseModels"
export * from "./baseChannel"

import {
  APIGuildCategoryChannel,
  APIGuildForumChannel,
  APIGuildMediaChannel,
  APIGuildStageVoiceChannel,
  APIGuildVoiceChannel,
  APIThreadChannel,
} from "@discordjs/core"
import { DMChannel, GroupDMChannel } from "./Dmchannel"
import { BaseGuildChannel } from "./baseChannel"
import { GuildTextChannel } from "./GuildChannel"
import { _Omit } from ".."

export type Channel =
  | DMChannel
  | GroupDMChannel
  | _Omit<BaseGuildChannel<APIGuildCategoryChannel>, "send">
  | GuildTextChannel
  | BaseGuildChannel<
    | APIGuildVoiceChannel
    | APIGuildStageVoiceChannel
    | APIThreadChannel
    | APIGuildForumChannel
    | APIGuildMediaChannel
  >

export { BaseGuildChannel, DMChannel, GroupDMChannel, GuildTextChannel }

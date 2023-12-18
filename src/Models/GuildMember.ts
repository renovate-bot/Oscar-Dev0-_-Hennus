import {
  APIGuildMember,
  CDNRoutes,
  GuildMemberAvatarFormat,
} from "@discordjs/core"
import { ModelsBase } from "./baseModels"
import { Guild } from "./Guild"
import { Client } from "../client"
import { User } from "./user"
import { userMention } from "@discordjs/formatters"
import { MemberBitField } from "../utils"

export class GuildMember extends ModelsBase<APIGuildMember> {
  public guild: Guild
  constructor(_c: Client, _d: APIGuildMember, _g: Guild) {
    super(_c, _d)
    Object.defineProperty(this, "guild", { value: _g })
  }

  get nick() {
    return this.data.nick ?? undefined
  }

  get premiumSinceTimestamp() {
    return this.data.premium_since ?? undefined
  }

  get joinedTimestamp() {
    return this.data.joined_at
  }

  get communicationDisabledUntilTimestamp() {
    return this.data.communication_disabled_until ?? undefined
  }

  get avatar() {
    return this.data.avatar ?? undefined
  }

  get user() {
    const user = this.data.user
    let UserParse: User | undefined = undefined
    if (user) UserParse = new User(this.client, user)
    return UserParse
  }

  get flags() {
    return new MemberBitField(this.data.flags).freeze()
  }
  avatarURL(options: GuildMemberAvatarFormat) {
    if (this.avatar && this.user) {
      return CDNRoutes.guildMemberAvatar(
        this.guild.id,
        this.user.id,
        this.avatar,
        options,
      )
    }

    return undefined
  }

  get joinedAt() {
    return new Date(this.joinedTimestamp)
  }

  get premiumSince() {
    if (this.premiumSinceTimestamp) return new Date(this.premiumSinceTimestamp)
    else return undefined
  }

  get communicationDisabledUntil() {
    if (this.communicationDisabledUntilTimestamp) {
      return new Date(this.communicationDisabledUntilTimestamp)
    } else return undefined
  }

  toString() {
    if (this.user) return userMention(this.user.id)
    else return ""
  }
}

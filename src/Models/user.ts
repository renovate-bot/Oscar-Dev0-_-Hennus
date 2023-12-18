import { APIUser, UserPremiumType } from "discord-api-types/v10"
import { ModelsBase } from "./baseModels"

import {
  CDNRoutes,
  ImageFormat,
  UserAvatarFormat,
  UserBannerFormat,
  UserFlags,
} from "@discordjs/core"
import { UserBitField } from "../utils"
import { DiscordSnowflake } from "@sapphire/snowflake"
import { userMention } from "@discordjs/formatters"

export class User extends ModelsBase<APIUser> {
  get id() {
    return this.data.id
  }

  get username() {
    return this.data.username
  }

  get discriminator() {
    const _d = this.data.discriminator ?? "0"
    const number = Number(_d)
    return number
  }

  get premium() {
    return this.data.premium_type ?? UserPremiumType.None
  }

  get globalName() {
    return this.data.global_name ?? undefined
  }

  get color() {
    return this.data.accent_color ?? 0
  }

  get avatar() {
    return this.data.avatar ?? undefined
  }

  get banner() {
    return this.data.banner ?? undefined
  }

  get tag() {
    if (this.discriminator == 0) return `${this.username}`
    return `${this.username}#${this.discriminator}`
  }

  get bot() {
    return this.data.bot ?? false
  }

  get flags() {
    return new UserBitField(this.data.flags ?? UserFlags.Hypesquad).freeze()
  }

  get publicFlags() {
    return new UserBitField(this.data.public_flags ?? UserFlags.Hypesquad)
      .freeze()
  }

  get createdTimestamp() {
    return DiscordSnowflake.timestampFrom(this.id)
  }

  get createdAt() {
    return new Date(this.createdTimestamp)
  }

  avatarUrl(options?: UserAvatarFormat) {
    if (!this.avatar && this.data.avatar_decoration) {
      return CDNRoutes.userAvatarDecoration(
        this.id,
        this.data.avatar_decoration,
      )
    } else if (!this.avatar) return undefined
    return CDNRoutes.userAvatar(
      this.id,
      this.avatar,
      options ?? ImageFormat.PNG,
    )
  }

  bannerURL(options?: UserBannerFormat) {
    if (!this.banner) return undefined
    return CDNRoutes.userBanner(
      this.id,
      this.banner,
      options ?? ImageFormat.PNG,
    )
  }
  get hexColor() {
    return `#${this.color.toString(16).padStart(6, "0")}`
  }

  toString() {
    return userMention(this.id)
  }
}

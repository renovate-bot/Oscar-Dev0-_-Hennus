import { APIGuild, CDNRoutes, GatewayGuildCreateDispatchData, GuildBannerFormat, GuildIconFormat, ImageFormat } from "@discordjs/core"
import { ModelsBase } from "./baseModels"
import { DiscordSnowflake } from "@sapphire/snowflake"
import { ChannelsManager } from "../manager"
import { ChannelResolved } from "../utils"

export class Guild
  extends ModelsBase<GatewayGuildCreateDispatchData | APIGuild> {

  private one = { channel: false };
  private _channels = new ChannelsManager(this.client);

  get id() {
    return this.data.id
  }

  get name() {
    return this.data.name
  }

  get memberCount() {
    if (!this.isValidated) return this.data.approximate_member_count ?? 0
    else {
      const data = this.data as GatewayGuildCreateDispatchData
      return data.member_count ?? 0
    }
  }

  get icon() {
    return this.data.icon
  }

  get banner() {
    return this.data.banner
  }

  get description() {
    return this.data.description
  }

  get createdTimestamp() {
    return DiscordSnowflake.timestampFrom(this.id)
  }

  get createdAt() {
    return new Date(this.createdTimestamp)
  }

  iconURL(options?: GuildIconFormat) {
    if (!this.icon) return undefined
    return CDNRoutes.guildIcon(this.id, this.icon, options ?? ImageFormat.PNG)
  }

  bannerURL(options?: GuildBannerFormat) {
    if (!this.banner) return undefined
    return CDNRoutes.guildBanner(this.id, this.banner, options ?? ImageFormat.PNG)
  }

  private get isValidated() {
    return "members" in this.data;
  }

  get channels() {
    if (!this.isValidated) return this._channels;
    else {
     
      if (this.one.channel) return this._channels;

      const data = this.data as GatewayGuildCreateDispatchData
      const map = data.channels.concat(data.threads).map((x) => ChannelResolved(this.client, x))

      if (!this.one.channel) {
        Object.defineProperty(this, "_channels", { value: new ChannelsManager(this.client, map) })
        this.one.channel = true;
      }

      return this._channels;
    }
  }

  toString() {
    return this.name
  }
}

import { RESTGetAPIGuildMembersQuery } from "@discordjs/core"
import { DataManager } from "./DataManager"
import { Guild, GuildMember } from "../Models"
import { Client } from "../client"

export class GuildMembersManager extends DataManager<string, GuildMember> {
    guild: Guild;
  constructor(client: Client, guild: Guild,map?: GuildMember[]) {
    const _map: Iterable<readonly [string, GuildMember]> | undefined = map?.filter((x)=> x.user != undefined).map((
      x,
    ) => [x.user?.id ?? "", x])
    super(client, _map)
    Object.defineProperty(this, "guild", { value: guild })
  }

  async fetch(guildId: string, GuildMemberId: string, force?: boolean) {
    const existing = this.cache.get(GuildMemberId)
    if (existing && !force) return existing
    const data = await this.client.api.guilds.getMember(
      guildId,
      GuildMemberId,
    )
    if (data) {
      const member = new GuildMember(this.client, data, this.guild)
      if(member.user) this.set(member.user.id, member)
      return member
    } else return undefined
  }

  async fetchAll(guildId: string, options?: RESTGetAPIGuildMembersQuery) {
    const GuildMembers =
      (await this.client.api.guilds.getMembers(guildId, options))?.filter((X)=>X.user != undefined).map((
        x,
      ) => new GuildMember(this.client, x, this.guild))
    if (Array.isArray(GuildMembers)) this.setCache(GuildMembers.map((x) => [x.user?.id ?? "", x]))
    return GuildMembers
  }
}

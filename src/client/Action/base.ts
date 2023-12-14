import { GatewayDispatchEvents, GatewayDispatchPayload } from "@discordjs/core"
import { Client, ListEvents } from "../.."

type Types = keyof ListEvents

type ListEventsMap = {
  [GatewayDispatchEvents.ApplicationCommandPermissionsUpdate]:
    "ApplicationCommandPermissionsUpdate"
  [GatewayDispatchEvents.AutoModerationActionExecution]:
    "AutoModerationActionExecution"
  [GatewayDispatchEvents.AutoModerationRuleCreate]: "AutoModerationRuleCreate"
  [GatewayDispatchEvents.AutoModerationRuleDelete]: "AutoModerationRuleDelete"
  [GatewayDispatchEvents.AutoModerationRuleUpdate]: "AutoModerationRuleUpdate"
  [GatewayDispatchEvents.ChannelCreate]: "ChannelCreate"
  [GatewayDispatchEvents.ChannelDelete]: "ChannelDelete"
  [GatewayDispatchEvents.ChannelPinsUpdate]: "ChannelPinsUpdate"
  [GatewayDispatchEvents.ChannelUpdate]: "ChannelUpdate"
  [GatewayDispatchEvents.EntitlementCreate]: "EntitlementCreate"
  [GatewayDispatchEvents.EntitlementDelete]: "EntitlementDelete"
  [GatewayDispatchEvents.EntitlementUpdate]: "EntitlementUpdate"
  [GatewayDispatchEvents.GuildBanAdd]: "GuildBanAdd"
  [GatewayDispatchEvents.GuildBanRemove]: "GuildBanRemove"
  [GatewayDispatchEvents.GuildEmojisUpdate]: "GuildEmojisUpdate"
  [GatewayDispatchEvents.GuildIntegrationsUpdate]: "GuildIntegrationsUpdate"
  [GatewayDispatchEvents.GuildMemberAdd]: "GuildMemberAdd"
  [GatewayDispatchEvents.GuildMemberRemove]: "GuildMemberRemove"
  [GatewayDispatchEvents.GuildStickersUpdate]: "GuildStickersUpdate"
  [GatewayDispatchEvents.GuildUpdate]: "GuildUpdate"
  [GatewayDispatchEvents.InviteCreate]: "InviteCreate"
  [GatewayDispatchEvents.InviteDelete]: "InviteDelete"
  [GatewayDispatchEvents.Ready]: "Ready"
  [GatewayDispatchEvents.GuildRoleCreate]: "GuildRoleCreate"
  [GatewayDispatchEvents.GuildRoleDelete]: "GuildRoleDelete"
  [GatewayDispatchEvents.GuildRoleUpdate]: "GuildRoleUpdate"
  [GatewayDispatchEvents.VoiceServerUpdate]: "VoiceServerUpdate"
  [GatewayDispatchEvents.WebhooksUpdate]: "WebhooksUpdate"
  [GatewayDispatchEvents.VoiceStateUpdate]: "VoiceStateUpdate"
  [GatewayDispatchEvents.GuildMemberUpdate]: "GuildMemberUpdate"
  [GatewayDispatchEvents.GuildCreate]: "GuildCreate"
  [GatewayDispatchEvents.GuildDelete]: "GuildDelete"
  [GatewayDispatchEvents.GuildMembersChunk]: "GuildMembersChunk"
  [GatewayDispatchEvents.IntegrationCreate]: "IntegrationCreate"
  [GatewayDispatchEvents.IntegrationDelete]: "IntegrationDelete"
  [GatewayDispatchEvents.IntegrationUpdate]: "IntegrationUpdate"
  [GatewayDispatchEvents.InteractionCreate]: "InteractionCreate"
  [GatewayDispatchEvents.MessageCreate]: "MessageCreate"
  [GatewayDispatchEvents.MessageDelete]: "MessageDelete"
  [GatewayDispatchEvents.MessageDeleteBulk]: "MessageDeleteBulk"
  [GatewayDispatchEvents.MessageReactionAdd]: "MessageReactionAdd"
  [GatewayDispatchEvents.MessageReactionRemove]: "MessageReactionRemove"
  [GatewayDispatchEvents.MessageReactionRemoveAll]: "MessageReactionRemoveAll"
  [GatewayDispatchEvents.MessageReactionRemoveEmoji]:
    "MessageReactionRemoveEmoji"
  [GatewayDispatchEvents.MessageUpdate]: "MessageUpdate"
  [GatewayDispatchEvents.PresenceUpdate]: "PresenceUpdate"
  [GatewayDispatchEvents.StageInstanceCreate]: "StageInstanceCreate"
  [GatewayDispatchEvents.StageInstanceDelete]: "StageInstanceDelete"
  [GatewayDispatchEvents.StageInstanceUpdate]: "StageInstanceUpdate"
  [GatewayDispatchEvents.Resumed]: "Resumed"
  [GatewayDispatchEvents.ThreadCreate]: "ThreadCreate"
  [GatewayDispatchEvents.ThreadDelete]: "ThreadDelete"
  [GatewayDispatchEvents.ThreadListSync]: "ThreadListSync"
  [GatewayDispatchEvents.ThreadMembersUpdate]: "ThreadMembersUpdate"
  [GatewayDispatchEvents.ThreadMemberUpdate]: "ThreadMemberUpdate"
  [GatewayDispatchEvents.ThreadUpdate]: "ThreadUpdate"
  [GatewayDispatchEvents.TypingStart]: "TypingStart"
  [GatewayDispatchEvents.UserUpdate]: "UserUpdate"
  [GatewayDispatchEvents.GuildScheduledEventCreate]: "GuildScheduledEventCreate"
  [GatewayDispatchEvents.GuildScheduledEventUpdate]: "GuildScheduledEventUpdate"
  [GatewayDispatchEvents.GuildScheduledEventDelete]: "GuildScheduledEventDelete"
  [GatewayDispatchEvents.GuildScheduledEventUserAdd]:
    "GuildScheduledEventUserAdd"
  [GatewayDispatchEvents.GuildScheduledEventUserRemove]:
    "GuildScheduledEventUserRemove"
  [GatewayDispatchEvents.GuildAuditLogEntryCreate]: "GuildAuditLogEntryCreate"
}

export class ActionBase<
  D extends GatewayDispatchPayload,
  T = D["d"],
  K extends GatewayDispatchEvents = D["t"],
> {
  public data: T
  private _type: K
  public client: Client

  constructor({ t, d }: D, cleint: Client) {
    Object.defineProperty(this, "data", { value: d })
    Object.defineProperty(this, "_type", { value: t })
    Object.defineProperty(this, "client", { value: cleint })
  }

  public get type() {
    const typeMappings: ListEventsMap = {
      [GatewayDispatchEvents.ApplicationCommandPermissionsUpdate]:
        "ApplicationCommandPermissionsUpdate",
      [GatewayDispatchEvents.AutoModerationActionExecution]:
        "AutoModerationActionExecution",
      [GatewayDispatchEvents.AutoModerationRuleCreate]:
        "AutoModerationRuleCreate",
      [GatewayDispatchEvents.AutoModerationRuleDelete]:
        "AutoModerationRuleDelete",
      [GatewayDispatchEvents.AutoModerationRuleUpdate]:
        "AutoModerationRuleUpdate",
      [GatewayDispatchEvents.ChannelCreate]: "ChannelCreate",
      [GatewayDispatchEvents.ChannelDelete]: "ChannelDelete",
      [GatewayDispatchEvents.ChannelPinsUpdate]: "ChannelPinsUpdate",
      [GatewayDispatchEvents.ChannelUpdate]: "ChannelUpdate",
      [GatewayDispatchEvents.EntitlementCreate]: "EntitlementCreate",
      [GatewayDispatchEvents.EntitlementDelete]: "EntitlementDelete",
      [GatewayDispatchEvents.EntitlementUpdate]: "EntitlementUpdate",
      [GatewayDispatchEvents.GuildBanAdd]: "GuildBanAdd",
      [GatewayDispatchEvents.GuildBanRemove]: "GuildBanRemove",
      [GatewayDispatchEvents.GuildEmojisUpdate]: "GuildEmojisUpdate",
      [GatewayDispatchEvents.GuildIntegrationsUpdate]:
        "GuildIntegrationsUpdate",
      [GatewayDispatchEvents.GuildMemberAdd]: "GuildMemberAdd",
      [GatewayDispatchEvents.GuildMemberRemove]: "GuildMemberRemove",
      [GatewayDispatchEvents.GuildStickersUpdate]: "GuildStickersUpdate",
      [GatewayDispatchEvents.GuildUpdate]: "GuildUpdate",
      [GatewayDispatchEvents.InviteCreate]: "InviteCreate",
      [GatewayDispatchEvents.InviteDelete]: "InviteDelete",
      [GatewayDispatchEvents.Ready]: "Ready",
      [GatewayDispatchEvents.GuildRoleCreate]: "GuildRoleCreate",
      [GatewayDispatchEvents.GuildRoleDelete]: "GuildRoleDelete",
      [GatewayDispatchEvents.GuildRoleUpdate]: "GuildRoleUpdate",
      [GatewayDispatchEvents.VoiceServerUpdate]: "VoiceServerUpdate",
      [GatewayDispatchEvents.WebhooksUpdate]: "WebhooksUpdate",
      [GatewayDispatchEvents.VoiceStateUpdate]: "VoiceStateUpdate",
      [GatewayDispatchEvents.GuildMemberUpdate]: "GuildMemberUpdate",
      [GatewayDispatchEvents.GuildCreate]: "GuildCreate",
      [GatewayDispatchEvents.GuildDelete]: "GuildDelete",
      [GatewayDispatchEvents.GuildMembersChunk]: "GuildMembersChunk",
      [GatewayDispatchEvents.IntegrationCreate]: "IntegrationCreate",
      [GatewayDispatchEvents.IntegrationDelete]: "IntegrationDelete",
      [GatewayDispatchEvents.IntegrationUpdate]: "IntegrationUpdate",
      [GatewayDispatchEvents.InteractionCreate]: "InteractionCreate",
      [GatewayDispatchEvents.MessageCreate]: "MessageCreate",
      [GatewayDispatchEvents.MessageDelete]: "MessageDelete",
      [GatewayDispatchEvents.MessageDeleteBulk]: "MessageDeleteBulk",
      [GatewayDispatchEvents.MessageReactionAdd]: "MessageReactionAdd",
      [GatewayDispatchEvents.MessageReactionRemove]: "MessageReactionRemove",
      [GatewayDispatchEvents.MessageReactionRemoveAll]:
        "MessageReactionRemoveAll",
      [GatewayDispatchEvents.MessageReactionRemoveEmoji]:
        "MessageReactionRemoveEmoji",
      [GatewayDispatchEvents.MessageUpdate]: "MessageUpdate",
      [GatewayDispatchEvents.PresenceUpdate]: "PresenceUpdate",
      [GatewayDispatchEvents.StageInstanceCreate]: "StageInstanceCreate",
      [GatewayDispatchEvents.StageInstanceDelete]: "StageInstanceDelete",
      [GatewayDispatchEvents.StageInstanceUpdate]: "StageInstanceUpdate",
      [GatewayDispatchEvents.Resumed]: "Resumed",
      [GatewayDispatchEvents.ThreadCreate]: "ThreadCreate",
      [GatewayDispatchEvents.ThreadDelete]: "ThreadDelete",
      [GatewayDispatchEvents.ThreadListSync]: "ThreadListSync",
      [GatewayDispatchEvents.ThreadMembersUpdate]: "ThreadMembersUpdate",
      [GatewayDispatchEvents.ThreadMemberUpdate]: "ThreadMemberUpdate",
      [GatewayDispatchEvents.ThreadUpdate]: "ThreadUpdate",
      [GatewayDispatchEvents.TypingStart]: "TypingStart",
      [GatewayDispatchEvents.UserUpdate]: "UserUpdate",
      [GatewayDispatchEvents.GuildScheduledEventCreate]:
        "GuildScheduledEventCreate",
      [GatewayDispatchEvents.GuildScheduledEventUpdate]:
        "GuildScheduledEventUpdate",
      [GatewayDispatchEvents.GuildScheduledEventDelete]:
        "GuildScheduledEventDelete",
      [GatewayDispatchEvents.GuildScheduledEventUserAdd]:
        "GuildScheduledEventUserAdd",
      [GatewayDispatchEvents.GuildScheduledEventUserRemove]:
        "GuildScheduledEventUserRemove",
      [GatewayDispatchEvents.GuildAuditLogEntryCreate]:
        "GuildAuditLogEntryCreate",
    }
    const type = typeMappings[this._type]
    return type
  }

  toJSON<T extends Types>(_name: T, ..._args: ListEvents[T]) {
    return {
      name: _name,
      args: _args,
    }
  }
}

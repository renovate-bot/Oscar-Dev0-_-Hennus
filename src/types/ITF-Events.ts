import {
  GatewayApplicationCommandPermissionsUpdateDispatchData,
  GatewayAutoModerationActionExecutionDispatchData,
  GatewayAutoModerationRuleCreateDispatchData,
  GatewayAutoModerationRuleDeleteDispatchData,
  GatewayAutoModerationRuleUpdateDispatchData,
  GatewayChannelPinsUpdateDispatchData,
  GatewayEntitlementCreateDispatchData,
  GatewayEntitlementDeleteDispatchData,
  GatewayEntitlementUpdateDispatchData,
  GatewayGuildAuditLogEntryCreateDispatchData,
  GatewayGuildEmojisUpdateDispatchData,
  GatewayGuildIntegrationsUpdateDispatchData,
  GatewayGuildScheduledEventCreateDispatchData,
  GatewayGuildScheduledEventDeleteDispatchData,
  GatewayGuildScheduledEventUpdateDispatchData,
  GatewayGuildScheduledEventUserAddDispatchData,
  GatewayGuildScheduledEventUserRemoveDispatchData,
  GatewayGuildStickersUpdateDispatchData,
  GatewayIntegrationCreateDispatchData,
  GatewayIntegrationDeleteDispatchData,
  GatewayIntegrationUpdateDispatchData,
  GatewayInviteCreateDispatchData,
  GatewayInviteDeleteDispatchData,
  GatewayMessageCreateDispatchData,
  GatewayMessageReactionAddDispatchData,
  GatewayMessageReactionRemoveAllDispatchData,
  GatewayMessageReactionRemoveDispatchData,
  GatewayMessageReactionRemoveEmojiDispatchData,
  GatewayResumedDispatch,
  GatewayStageInstanceCreateDispatchData,
  GatewayStageInstanceDeleteDispatchData,
  GatewayStageInstanceUpdateDispatchData,
  GatewayThreadCreateDispatchData,
  GatewayThreadDeleteDispatchData,
  GatewayThreadListSyncDispatchData,
  GatewayThreadMembersUpdateDispatchData,
  GatewayThreadMemberUpdateDispatchData,
  GatewayThreadUpdateDispatchData,
  GatewayTypingStartDispatchData,
  GatewayWebhooksUpdateDispatchData,
} from "@discordjs/core";
import { Channel, ClientUser, Guild, Message, User } from "../Models";

export interface ListEvents {
  ApplicationCommandPermissionsUpdate: [
    GatewayApplicationCommandPermissionsUpdateDispatchData,
  ];
  EntitlementCreate: [GatewayEntitlementCreateDispatchData];
  EntitlementDelete: [GatewayEntitlementDeleteDispatchData];
  EntitlementUpdate: [GatewayEntitlementUpdateDispatchData];
  GuildMemberRoleUpdate: [];
  ChannelCreate: [Channel];
  ChannelDelete: [Channel];
  ChannelPinsUpdate: [GatewayChannelPinsUpdateDispatchData];
  ChannelUpdate: [Channel];
  GuildBanAdd: [];
  GuildBanRemove: [];
  GuildCreate: [Guild];
  GuildDelete: [Guild | undefined];
  GuildEmojisUpdate: [GatewayGuildEmojisUpdateDispatchData];
  GuildIntegrationsUpdate: [GatewayGuildIntegrationsUpdateDispatchData];
  GuildMemberAdd: [];
  GuildMemberRemove: [];
  GuildMembersChunk: [];
  GuildMemberUpdate: [];
  GuildRoleCreate: [];
  GuildRoleDelete: [];
  GuildRoleUpdate: [];
  GuildStickersUpdate: [GatewayGuildStickersUpdateDispatchData];
  GuildUpdate: [];
  IntegrationCreate: [GatewayIntegrationCreateDispatchData];
  IntegrationDelete: [GatewayIntegrationDeleteDispatchData];
  IntegrationUpdate: [GatewayIntegrationUpdateDispatchData];
  InteractionCreate: [];
  InviteCreate: [GatewayInviteCreateDispatchData];
  InviteDelete: [GatewayInviteDeleteDispatchData];
  MessageCreate: [Message];
  MessageDelete: [Message | undefined];
  MessageDeleteBulk: [Message[]];
  MessageReactionAdd: [GatewayMessageReactionAddDispatchData];
  MessageReactionRemove: [GatewayMessageReactionRemoveDispatchData];
  MessageReactionRemoveAll: [GatewayMessageReactionRemoveAllDispatchData];
  MessageReactionRemoveEmoji: [GatewayMessageReactionRemoveEmojiDispatchData];
  MessageUpdate: [Message];
  PresenceUpdate: [];
  StageInstanceCreate: [GatewayStageInstanceCreateDispatchData];
  StageInstanceDelete: [GatewayStageInstanceDeleteDispatchData];
  StageInstanceUpdate: [GatewayStageInstanceUpdateDispatchData];
  Ready: [ClientUser];
  Resumed: [GatewayResumedDispatch];
  ThreadCreate: [GatewayThreadCreateDispatchData];
  ThreadDelete: [GatewayThreadDeleteDispatchData];
  ThreadListSync: [GatewayThreadListSyncDispatchData];
  ThreadMembersUpdate: [GatewayThreadMembersUpdateDispatchData];
  ThreadMemberUpdate: [GatewayThreadMemberUpdateDispatchData];
  ThreadUpdate: [GatewayThreadUpdateDispatchData];
  TypingStart: [GatewayTypingStartDispatchData];
  UserUpdate: [User];
  VoiceServerUpdate: [];
  VoiceStateUpdate: [];
  WebhooksUpdate: [GatewayWebhooksUpdateDispatchData];
  GuildScheduledEventCreate: [GatewayGuildScheduledEventCreateDispatchData];
  GuildScheduledEventUpdate: [GatewayGuildScheduledEventUpdateDispatchData];
  GuildScheduledEventDelete: [GatewayGuildScheduledEventDeleteDispatchData];
  GuildScheduledEventUserAdd: [GatewayGuildScheduledEventUserAddDispatchData];
  GuildScheduledEventUserRemove: [
    GatewayGuildScheduledEventUserRemoveDispatchData,
  ];
  AutoModerationRuleCreate: [GatewayAutoModerationRuleCreateDispatchData];
  AutoModerationRuleUpdate: [GatewayAutoModerationRuleUpdateDispatchData];
  AutoModerationRuleDelete: [GatewayAutoModerationRuleDeleteDispatchData];
  AutoModerationActionExecution: [
    GatewayAutoModerationActionExecutionDispatchData,
  ];
  GuildAuditLogEntryCreate: [GatewayGuildAuditLogEntryCreateDispatchData];
}

export type MessageOptions = GatewayMessageCreateDispatchData;

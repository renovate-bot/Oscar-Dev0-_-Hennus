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
  WithIntrinsicProps,
        GatewayMessageUpdateDispatchData,
        GatewayMessageDeleteDispatchData,
} from "@discordjs/core";
import { Channel, ClientUser, Guild, Message, User } from "../Models";

export interface ListEvents {
  ApplicationCommandPermissionsUpdate: [
    WithIntrinsicProps<GatewayApplicationCommandPermissionsUpdateDispatchData>,
  ];
  EntitlementCreate: [WithIntrinsicProps<GatewayEntitlementCreateDispatchData>];
  EntitlementDelete: [WithIntrinsicProps<GatewayEntitlementDeleteDispatchData>];
  EntitlementUpdate: [WithIntrinsicProps<GatewayEntitlementUpdateDispatchData>];
  GuildMemberRoleUpdate: [];
  ChannelCreate: [Channel];
  ChannelDelete: [Channel];
  ChannelPinsUpdate: [WithIntrinsicProps<GatewayChannelPinsUpdateDispatchData>];
  ChannelUpdate: [Channel];
  GuildBanAdd: [];
  GuildBanRemove: [];
  GuildCreate: [Guild];
  GuildDelete: [Guild | undefined];
  GuildEmojisUpdate: [WithIntrinsicProps<GatewayGuildEmojisUpdateDispatchData>];
  GuildIntegrationsUpdate: [
    WithIntrinsicProps<GatewayGuildIntegrationsUpdateDispatchData>,
  ];
  GuildMemberAdd: [];
  GuildMemberRemove: [];
  GuildMembersChunk: [];
  GuildMemberUpdate: [];
  GuildRoleCreate: [];
  GuildRoleDelete: [];
  GuildRoleUpdate: [];
  GuildStickersUpdate: [
    WithIntrinsicProps<GatewayGuildStickersUpdateDispatchData>,
  ];
  GuildUpdate: [];
  IntegrationCreate: [WithIntrinsicProps<GatewayIntegrationCreateDispatchData>];
  IntegrationDelete: [WithIntrinsicProps<GatewayIntegrationDeleteDispatchData>];
  IntegrationUpdate: [WithIntrinsicProps<GatewayIntegrationUpdateDispatchData>];
  InteractionCreate: [];
  InviteCreate: [WithIntrinsicProps<GatewayInviteCreateDispatchData>];
  InviteDelete: [WithIntrinsicProps<GatewayInviteDeleteDispatchData>];
  MessageCreate: [Message];
  MessageDelete: [WithIntrinsicProps<GatewayMessageDeleteDispatchData>,Message | undefined];
  MessageDeleteBulk: [Message[]];
  MessageReactionAdd: [
    WithIntrinsicProps<GatewayMessageReactionAddDispatchData>,
  ];
  MessageReactionRemove: [
    WithIntrinsicProps<GatewayMessageReactionRemoveDispatchData>,
  ];
  MessageReactionRemoveAll: [
    WithIntrinsicProps<GatewayMessageReactionRemoveAllDispatchData>,
  ];
  MessageReactionRemoveEmoji: [
    WithIntrinsicProps<GatewayMessageReactionRemoveEmojiDispatchData>,
  ];
  MessageUpdate: [WithIntrinsicProps<GatewayMessageUpdateDispatchData>, Message | undefined];
  PresenceUpdate: [];
  StageInstanceCreate: [
    WithIntrinsicProps<GatewayStageInstanceCreateDispatchData>,
  ];
  StageInstanceDelete: [
    WithIntrinsicProps<GatewayStageInstanceDeleteDispatchData>,
  ];
  StageInstanceUpdate: [
    WithIntrinsicProps<GatewayStageInstanceUpdateDispatchData>,
  ];
  Ready: [ClientUser];
  Resumed: [WithIntrinsicProps<GatewayResumedDispatch>];
  ThreadCreate: [WithIntrinsicProps<GatewayThreadCreateDispatchData>];
  ThreadDelete: [WithIntrinsicProps<GatewayThreadDeleteDispatchData>];
  ThreadListSync: [WithIntrinsicProps<GatewayThreadListSyncDispatchData>];
  ThreadMembersUpdate: [
    WithIntrinsicProps<GatewayThreadMembersUpdateDispatchData>,
  ];
  ThreadMemberUpdate: [
    WithIntrinsicProps<GatewayThreadMemberUpdateDispatchData>,
  ];
  ThreadUpdate: [WithIntrinsicProps<GatewayThreadUpdateDispatchData>];
  TypingStart: [WithIntrinsicProps<GatewayTypingStartDispatchData>];
  UserUpdate: [User];
  VoiceServerUpdate: [];
  VoiceStateUpdate: [];
  WebhooksUpdate: [WithIntrinsicProps<GatewayWebhooksUpdateDispatchData>];
  GuildScheduledEventCreate: [
    WithIntrinsicProps<GatewayGuildScheduledEventCreateDispatchData>,
  ];
  GuildScheduledEventUpdate: [
    WithIntrinsicProps<GatewayGuildScheduledEventUpdateDispatchData>,
  ];
  GuildScheduledEventDelete: [
    WithIntrinsicProps<GatewayGuildScheduledEventDeleteDispatchData>,
  ];
  GuildScheduledEventUserAdd: [
    WithIntrinsicProps<GatewayGuildScheduledEventUserAddDispatchData>,
  ];
  GuildScheduledEventUserRemove: [
    WithIntrinsicProps<GatewayGuildScheduledEventUserRemoveDispatchData>,
  ];
  AutoModerationRuleCreate: [
    WithIntrinsicProps<GatewayAutoModerationRuleCreateDispatchData>,
  ];
  AutoModerationRuleUpdate: [
    WithIntrinsicProps<GatewayAutoModerationRuleUpdateDispatchData>,
  ];
  AutoModerationRuleDelete: [
    WithIntrinsicProps<GatewayAutoModerationRuleDeleteDispatchData>,
  ];
  AutoModerationActionExecution: [
    WithIntrinsicProps<GatewayAutoModerationActionExecutionDispatchData>,
  ];
  GuildAuditLogEntryCreate: [
    WithIntrinsicProps<GatewayGuildAuditLogEntryCreateDispatchData>,
  ];
}

export type MessageOptions = GatewayMessageCreateDispatchData;

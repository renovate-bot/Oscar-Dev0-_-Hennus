import { GatewayDispatchEvents, GatewayDispatchPayload } from "@discordjs/core";
import { ListEvents } from "../../types/ITF-Events";


type Types = keyof ListEvents
export class ActionBase<D extends GatewayDispatchPayload,T = D["d"], K extends D["t"] = GatewayDispatchEvents> {
    public data: T;
    private _type: K;

    constructor(_d: T, _t: K){
        Object.defineProperty(this,"data", { value: _d });
        Object.defineProperty(this,"_type", { value: _t });
    };

    public get type(){
        const typeMappings: Record<GatewayDispatchEvents, Types> = {
            [GatewayDispatchEvents.ApplicationCommandPermissionsUpdate]: "ApplicationCommandPermissionsUpdate",
            [GatewayDispatchEvents.AutoModerationActionExecution]: "AutoModerationActionExecution",
            [GatewayDispatchEvents.AutoModerationRuleCreate]: "AutoModerationRuleCreate",
            [GatewayDispatchEvents.AutoModerationRuleDelete]: "AutoModerationRuleDelete",
            [GatewayDispatchEvents.AutoModerationRuleUpdate]: "AutoModerationRuleUpdate",
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
            [GatewayDispatchEvents.GuildIntegrationsUpdate]: "GuildIntegrationsUpdate",
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
            [GatewayDispatchEvents.MessageReactionRemoveAll]: "MessageReactionRemoveAll",
            [GatewayDispatchEvents.MessageReactionRemoveEmoji]: "MessageReactionRemoveEmoji",
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
            [GatewayDispatchEvents.GuildScheduledEventCreate]: "GuildScheduledEventCreate",
            [GatewayDispatchEvents.GuildScheduledEventUpdate]: "GuildScheduledEventUpdate",
            [GatewayDispatchEvents.GuildScheduledEventDelete]: "GuildScheduledEventDelete",
            [GatewayDispatchEvents.GuildScheduledEventUserAdd]: "GuildScheduledEventUserAdd",
            [GatewayDispatchEvents.GuildScheduledEventUserRemove]: "GuildScheduledEventUserRemove",
            [GatewayDispatchEvents.GuildAuditLogEntryCreate]: "GuildAuditLogEntryCreate"
        };
        const type = typeMappings[this._type];

        return type;
        
    };

    
};
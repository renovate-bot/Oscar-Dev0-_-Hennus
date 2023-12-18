import { Collection } from '@discordjs/collection';
import * as _discordjs_core from '@discordjs/core';
import { APIMessageComponentEmoji, ChannelFlags, UserFlags, ApplicationFlags, APIChannel, APITextChannel, APINewsChannel, ChannelType, APIGuildVoiceChannel, APIGuildStageVoiceChannel, APIGuildCategoryChannel, APIThreadChannel, APIGuildForumChannel, APIGuildMediaChannel, RESTPatchAPIChannelJSONBody, UserAvatarFormat, UserBannerFormat, GatewayUpdatePresence, PresenceUpdateStatus, GatewayReadyDispatchData, GatewayGuildCreateDispatchData, APIGuild, GuildIconFormat, GuildBannerFormat, APIGroupDMChannel, APIDMChannel, GatewayApplicationCommandPermissionsUpdateDispatchData, GatewayEntitlementCreateDispatchData, GatewayEntitlementDeleteDispatchData, GatewayEntitlementUpdateDispatchData, GatewayChannelPinsUpdateDispatchData, GatewayGuildEmojisUpdateDispatchData, GatewayGuildIntegrationsUpdateDispatchData, GatewayGuildStickersUpdateDispatchData, GatewayIntegrationCreateDispatchData, GatewayIntegrationDeleteDispatchData, GatewayIntegrationUpdateDispatchData, GatewayInviteCreateDispatchData, GatewayInviteDeleteDispatchData, GatewayMessageReactionAddDispatchData, GatewayMessageReactionRemoveDispatchData, GatewayMessageReactionRemoveAllDispatchData, GatewayMessageReactionRemoveEmojiDispatchData, GatewayStageInstanceCreateDispatchData, GatewayStageInstanceDeleteDispatchData, GatewayStageInstanceUpdateDispatchData, GatewayResumedDispatch, GatewayThreadCreateDispatchData, GatewayThreadDeleteDispatchData, GatewayThreadListSyncDispatchData, GatewayThreadMembersUpdateDispatchData, GatewayThreadMemberUpdateDispatchData, GatewayThreadUpdateDispatchData, GatewayTypingStartDispatchData, GatewayWebhooksUpdateDispatchData, GatewayGuildScheduledEventCreateDispatchData, GatewayGuildScheduledEventUpdateDispatchData, GatewayGuildScheduledEventDeleteDispatchData, GatewayGuildScheduledEventUserAddDispatchData, GatewayGuildScheduledEventUserRemoveDispatchData, GatewayAutoModerationRuleCreateDispatchData, GatewayAutoModerationRuleUpdateDispatchData, GatewayAutoModerationRuleDeleteDispatchData, GatewayAutoModerationActionExecutionDispatchData, GatewayGuildAuditLogEntryCreateDispatchData, GatewayMessageCreateDispatchData, GatewayIntentBits, ComponentType, APIBaseSelectMenuComponent, ButtonStyle, APIButtonComponentBase, APIButtonComponentWithCustomId, APIButtonComponentWithURL, APIStringSelectComponent, APISelectMenuOption, APITextInputComponent, TextInputStyle, APIActionRowComponent, APIEmbed, RESTAPIAttachment, RESTPostAPIChannelMessageJSONBody, MessageFlags, GatewayDispatchPayload, RESTPostAPIGuildChannelJSONBody, RESTGetAPIChannelMessagesQuery } from '@discordjs/core';
import * as _discordjs_util from '@discordjs/util';
import { AsyncEventEmitter } from '@vladfrangu/async_event_emitter';
import { Stream } from 'node:stream';
import { APIUser, UserPremiumType } from 'discord-api-types/v10';
export * from 'discord-api-types/v10';
import { WebSocketManagerOptions } from '@discordjs/ws';
import { RESTOptions } from '@discordjs/rest';

declare class cacheManager<Key, Value> extends Collection<Key, Value> {
    constructor(iterable?: Iterable<readonly [Key, Value]> | null | undefined);
    add(key: Key, item: Value): this;
}

declare class ModelsBase<T = any> {
    data: T;
    client: Client;
    constructor(_c: Client, _d: T);
    toJSON(): T;
    imagen(_url?: string): Promise<{
        data: any;
        url: string;
        type: "jpeg" | "gif" | "png" | "ico" | "webp";
        content_type: any;
    } | undefined>;
}

declare class Message extends ModelsBase<MessageOptions> {
    get id(): string;
    get type(): _discordjs_core.MessageType;
    get content(): string;
    get mention(): {
        users: (_discordjs_core.APIUser & {
            member?: Omit<_discordjs_core.APIGuildMember, "user"> | undefined;
        })[];
        everyone: boolean;
        channels: _discordjs_core.APIChannelMention[] | undefined;
        roles: string[];
    };
    get member(): MessageOptions["member"];
    get user(): _discordjs_core.APIUser;
    get flags(): _discordjs_core.MessageFlags | undefined;
    get guildID(): MessageOptions["guild_id"];
    get channelID(): string;
    get createdTimestamp(): number;
    get createdAt(): Date;
    get isPinned(): boolean;
    get channel(): Channel | undefined;
    reply(options: MessageChannelCreate): Promise<Message>;
    delete(reason?: string): Promise<this>;
    edit(options: MessageChannelCreate): Promise<Message>;
    pin(reason?: string): Promise<this>;
    toString(): string;
}

declare function resolvedColor(color: colorType): number;
type colorType = `#${string}` | number | StringColor | "Random" | Colors | [number, number, number];
type StringColor = keyof typeof Colors;
declare enum Colors {
    Default = 0,
    White = 16777215,
    Aqua = 1752220,
    Green = 5763719,
    Blue = 3447003,
    Yellow = 16705372,
    Purple = 10181046,
    LuminousVividPink = 15277667,
    Fuchsia = 15418782,
    Gold = 15844367,
    Orange = 15105570,
    Red = 15548997,
    Grey = 9807270,
    Navy = 3426654,
    DarkAqua = 1146986,
    DarkGreen = 2067276,
    DarkBlue = 2123412,
    DarkPurple = 7419530,
    DarkVividPink = 11342935,
    DarkGold = 12745742,
    DarkOrange = 11027200,
    DarkRed = 10038562,
    DarkGrey = 9936031,
    DarkerGrey = 8359053,
    LightGrey = 12370112,
    DarkNavy = 2899536,
    Blurple = 5793266,
    Greyple = 10070709,
    DarkButNotBlack = 2895667,
    NotQuiteBlack = 2303786,
    Pink = 16761035,
    Lavender = 15132410,
    Coral = 16744272,
    Teal = 32896,
    Maroon = 8388608,
    MintGreen = 10026904,
    Olive = 8421376,
    Salmon = 16416882,
    Cyan = 65535,
    Indigo = 4915330,
    Peach = 16767673,
    SkyBlue = 8900331,
    LimeGreen = 3329330,
    Magenta = 16711935,
    Turquoise = 4251856,
    DarkOliveGreen = 5597999,
    LightCoral = 15761536,
    SteelBlue = 4620980,
    DarkMagenta = 9109643,
    DarkSlateGray = 3100495,
    Tomato = 16737095,
    Brown = 9127187,
    Crimson = 14423100,
    DarkCyan = 35723,
    DarkSalmon = 15308410,
    DeepPink = 16716947,
    ForestGreen = 2263842,
    HotPink = 16738740,
    Khaki = 15787660,
    MediumBlue = 205,
    MediumSpringGreen = 64154,
    OliveDrab = 7048739,
    Peru = 13468991,
    RoyalBlue = 4286945,
    SandyBrown = 16032864,
    Sienna = 10506797,
    Violet = 15631086,
    DarkTurquoise = 52945,
    Chocolate = 13789470,
    FireBrick = 11674146,
    LightSeaGreen = 2142890,
    DarkKhaki = 12433259,
    Orchid = 14315734,
    PaleVioletRed = 14381203,
    BananaYellow = 16766976,
    AvocadoGreen = 8569665,
    FunkyFuchsia = 16722099,
    PunnyPurple = 10233776,
    WackyWatermelon = 16729447,
    GoofyGreen = 46848,
    ChuckleChocolate = 5911842,
    LoonyLemon = 16769333,
    GiggleGrey = 11119017,
    SillySalmon = 16747625,
    NuttyNavy = 128,
    KookyCoral = 16740193,
    ZanyZucchini = 3778446,
    QuirkyQuartz = 5326927,
    BizarreBeige = 16119260,
    HilariousHeliotrope = 14644223,
    RidiculousRuby = 14684511,
    DaffyDenim = 1668306,
    BonkersBrown = 6636321,
    ChucklesCyan = 65535,
    ZestyZaffre = 5288,
    ComicalCrimson = 14423100,
    WittyWheat = 16113331,
    DrollDandelion = 16701533
}

declare function decodeEmoji(text: string): APIMessageComponentEmoji;
declare function resolvePartialEmoji(emoji: APIMessageComponentEmoji | string): APIMessageComponentEmoji | undefined;

declare class HennusError extends Error {
    constructor(message: errorCodes | string);
}
declare enum errorCodes {
    TokenInvalid = "El token proporcionado no es v\u00E1lido.",
    TokenNull = "No se proporcion\u00F3 un token.",
    ConnectionError = "No se pudo establecer la conexi\u00F3n.",
    BitsError = "La bitField proporcionada no es v\u00E1lida.",
    ColorRange = "El valor del color est\u00E1 fuera del rango v\u00E1lido (0 a 0xffffff).",
    ColorConvert = "El valor del color no es v\u00E1lido o no se puede convertir correctamente.",
    CommandNameUpperCase = "El nombre del comando no debe contener letras may\u00FAsculas.",
    InvalidCommandNameLength = "El nombre del comando debe tener entre 1 y 32 caracteres.",
    ChannelNameLength = "El nombre del canal debe tener entre 1 y 100 caracteres.",
    ChannelTopicLength = "El topic del canal debe tener entre 0 y 1024 caracteres."
}

declare class BitField<N extends number | bigint> {
    static Flags: EnumLike<unknown, number | bigint>;
    static DefaultBit: bigint;
    bitfield: N;
    constructor(_bits?: BitFieldResolvable<N>);
    add(...bits: BitFieldResolvable<N>[]): BitField<N>;
    remove(...bits: BitFieldResolvable<N>[]): BitField<bigint>;
    has(bit: BitFieldResolvable<N>): boolean;
    freeze(): Readonly<BitField<N>>;
    toArray(...hasParams: any[]): string[];
    toJSON(): string | (N & number);
    valueOf(): N;
    [Symbol.iterator](...hasParams: any[]): Generator<string>;
    static resolve<N extends number | bigint>(bit: BitFieldResolvable<N>): N;
}
type BitFieldResolvable<N extends number | bigint> = RecursiveReadonlyArray<N | `${bigint}` | string | Readonly<BitField<N>>> | N | string | `${bigint}` | Readonly<BitField<N>>;
type RecursiveReadonlyArray<T> = ReadonlyArray<T | RecursiveReadonlyArray<T>>;
type EnumLike<E, V> = Record<keyof E, V>;

declare enum _Permissions {
    /** @description Permite crear invitaciones instantáneas. @type (T: Texto, V: Voz, S: Servidor) */
    CREATE_INSTANT_INVITE = 1,
    /** @description Permite expulsar miembros. @type (T: Texto, V: Voz, S: Servidor) */
    KICK_MEMBERS = 2,
    /** @description Permite bloquear miembros. @type (T: Texto, V: Voz, S: Servidor) */
    BAN_MEMBERS = 4,
    /** @description Permite todos los permisos y omite las modificaciones de permisos en el canal. @type (T: Texto, V: Voz, S: Servidor) */
    ADMINISTRATOR = 8,
    /** @description Permite gestionar y editar canales. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_CHANNELS = 16,
    /** @description Permite gestionar y editar el servidor. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_GUILD = 32,
    /** @description Permite agregar reacciones a los mensajes. @type (T: Texto, V: Voz, S: Servidor) */
    ADD_REACTIONS = 64,
    /** @description Permite ver los registros de auditoría. @type (T: Texto, V: Voz, S: Servidor) */
    VIEW_AUDIT_LOG = 128,
    /** @description Permite usar el modo de altavoz prioritario en un canal de voz. @type (V: Voz) */
    PRIORITY_SPEAKER = 256,
    /** @description Permite al usuario hacer transmisiones en vivo. @type (V: Voz, S: Servidor) */
    STREAM = 512,
    /** @description Permite a los miembros del servidor ver un canal, lo que incluye leer mensajes en canales de texto y unirse a canales de voz. @type (T: Texto, V: Voz, S: Servidor) */
    VIEW_CHANNEL = 1024,
    /** @description Permite enviar mensajes en un canal y crear hilos en un foro (no permite enviar mensajes en hilos). @type (T: Texto, V: Voz, S: Servidor) */
    SEND_MESSAGES = 2048,
    /** @description Permite enviar mensajes de texto a voz. @type (T: Texto, V: Voz, S: Servidor) */
    SEND_TTS_MESSAGES = 4096,
    /** @description Permite eliminar los mensajes de otros usuarios. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_MESSAGES = 8192,
    /** @description Los enlaces enviados por los usuarios con este permiso se insertarán automáticamente. @type (T: Texto, V: Voz, S: Servidor) */
    EMBED_LINKS = 16384,
    /** @description Permite subir imágenes y archivos. @type (T: Texto, V: Voz, S: Servidor) */
    ATTACH_FILES = 32768,
    /** @description Permite leer el historial de mensajes. @type (T: Texto, V: Voz, S: Servidor) */
    READ_MESSAGE_HISTORY = 65536,
    /** @description Permite utilizar la mención @everyone para notificar a todos los usuarios en un canal, y la mención @here para notificar a los usuarios en línea en un canal. @type (T: Texto, V: Voz, S: Servidor) */
    MENTION_EVERYONE = 131072,
    /** @description Permite utilizar emojis personalizados de otros servidores. @type (T: Texto, V: Voz, S: Servidor) */
    USE_EXTERNAL_EMOJIS = 262144,
    /** @description Permite ver estadísticas del servidor. @type (S: Servidor) */
    VIEW_GUILD_INSIGHTS = 524288,
    /** @description Permite unirse a un canal de voz. @type (V: Voz, S: Servidor) */
    CONNECT = 1048576,
    /** @description Permite hablar en un canal de voz. @type (V: Voz) */
    SPEAK = 2097152,
    /** @description Permite silenciar a los miembros en un canal de voz. @type (V: Voz, S: Servidor) */
    MUTE_MEMBERS = 4194304,
    /** @description Permite ensordecer a los miembros en un canal de voz. @type (V: Voz) */
    DEAFEN_MEMBERS = 8388608,
    /** @description Permite mover a los miembros entre canales de voz. @type (V: Voz, S: Servidor) */
    MOVE_MEMBERS = 16777216,
    /** @description Permite utilizar la detección de actividad de voz en un canal de voz. @type (V: Voz) */
    USE_VAD = 33554432,
    /** @description Permite modificar el propio apodo. @type (T: Texto, V: Voz, S: Servidor) */
    CHANGE_NICKNAME = 67108864,
    /** @description Permite modificar los apodos de otros usuarios. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_NICKNAMES = 134217728,
    /** @description Permite gestionar y editar roles. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_ROLES = 268435456,
    /** @description Permite gestionar y editar webhooks. @type (T: Texto, V: Voz, S: Servidor) */
    MANAGE_WEBHOOKS = 536870912,
    /** @description Permite gestionar y editar emojis, stickers y sonidos del tablero de sonidos. @type (S: Servidor) */
    MANAGE_GUILD_EXPRESSIONS = 1073741824,
    /** @description Permite a los miembros usar comandos de aplicaciones, incluyendo comandos de barra y comandos de menú contextual. @type (T: Texto, V: Voz, S: Servidor) */
    USE_APPLICATION_COMMANDS = 2147483648,
    /** @description Permite solicitar hablar en canales de escenario. (Este permiso está en desarrollo activo y puede cambiar o eliminarse). @type (S: Servidor) */
    REQUEST_TO_SPEAK = 4294967296,
    /** @description Permite crear, editar y eliminar eventos programados. @type (V: Voz, S: Servidor) */
    MANAGE_EVENTS = 8589934592,
    /** @description Permite eliminar y archivar hilos, y ver todos los hilos privados. @type (T: Texto) */
    MANAGE_THREADS = 17179869184,
    /** @description Permite crear hilos públicos y de anuncios. @type (T: Texto) */
    CREATE_PUBLIC_THREADS = 34359738368,
    /** @description Permite crear hilos privados. @type (T: Texto) */
    CREATE_PRIVATE_THREADS = 68719476736,
    /** @description Permite utilizar stickers personalizados de otros servidores. @type (T: Texto, V: Voz, S: Servidor) */
    USE_EXTERNAL_STICKERS = 137438953472,
    /** @description Permite enviar mensajes en hilos. @type (T: Texto) */
    SEND_MESSAGES_IN_THREADS = 274877906944,
    /** @description Permite utilizar Activities (aplicaciones con la bandera EMBEDDED) en un canal de voz. @type (V: Voz) */
    USE_EMBEDDED_ACTIVITIES = 549755813888,
    /** @description Permite silenciar a los usuarios para evitar que envíen o reaccionen a mensajes en el chat y en los hilos, y que hablen en los canales de voz y escenario. @type (T: Texto, V: Voz, S: Servidor) */
    MODERATE_MEMBERS = 1099511627776,
    /** @description Permite ver información sobre suscripciones a roles. @type (T: Texto, V: Voz, S: Servidor) */
    VIEW_CREATOR_MONETIZATION_ANALYTICS = 2199023255552,
    /** @description Permite utilizar el tablero de sonidos en un canal de voz. @type (V: Voz) */
    USE_SOUNDBOARD = 4398046511104,
    /** @description Permite utilizar sonidos del tablero de sonidos personalizados de otros servidores. @type (V: Voz) */
    USE_EXTERNAL_SOUNDS = 35184372088832,
    /** @description Permite enviar mensajes de voz. @type (T: Texto, V: Voz, S: Servidor) */
    SEND_VOICE_MESSAGES = 70368744177664
}

declare class ChannelBitField extends BitField<ChannelFlags> {
    static Flags: typeof ChannelFlags;
}
declare class PermissionBitField extends BitField<_Permissions> {
    static Flags: typeof _Permissions;
}
declare class UserBitField extends BitField<UserFlags> {
    static Flags: typeof UserFlags;
}
declare class ApplicationBitField extends BitField<ApplicationFlags> {
    static Flags: typeof ApplicationFlags;
}

declare function ChannelResolved(client: Client, data: APIChannel): Channel;

declare class GuildTextChannel extends BaseGuildChannel<APITextChannel | APINewsChannel> {
    private _messages;
    get messages(): MessagesManager;
}

declare class BaseChannel<T extends APIChannel> extends ModelsBase<T> {
    get id(): string;
    get type(): ChannelType.GuildText | ChannelType.DM | ChannelType.GuildVoice | ChannelType.GroupDM | ChannelType.GuildCategory | ChannelType.GuildAnnouncement | ChannelType.GuildStageVoice | ChannelType.GuildForum | ChannelType.GuildMedia | _discordjs_core.ThreadChannelType;
    get flags(): Readonly<BitField<_discordjs_core.ChannelFlags>>;
    get createdTimestamp(): number;
    get createdAt(): Date;
    isTextBased(): this is GuildTextChannel;
    isVoiceBased(): boolean;
    isDMBased(): boolean;
    isThread(): boolean;
    isThreadOnly(): boolean;
    toString(): `<#${string}>`;
    delete(): Promise<this>;
    send(options: MessageChannelCreate): Promise<Message>;
}
declare class BaseGuildChannel<T extends APITextChannel | APINewsChannel | APIGuildVoiceChannel | APIGuildStageVoiceChannel | APIGuildCategoryChannel | APIThreadChannel | APIGuildForumChannel | APIGuildMediaChannel> extends BaseChannel<T> {
    constructor(client: Client, data: T);
    get parent(): string | null | undefined;
    get position(): number;
    get name(): string;
    get permision(): {
        id: string;
        type: _discordjs_core.OverwriteType;
        deny: Readonly<BitField<_Permissions>>;
        allow: Readonly<BitField<_Permissions>>;
    }[] | undefined;
    get nsfw(): boolean | undefined;
    get guildId(): string | undefined;
    edit(options: RESTPatchAPIChannelJSONBody): Promise<this>;
}

declare class User extends ModelsBase<APIUser> {
    get id(): string;
    get username(): string;
    get discriminator(): number;
    get premium(): UserPremiumType;
    get globalName(): string | undefined;
    get color(): number;
    get avatar(): string | undefined;
    get banner(): string | undefined;
    get tag(): string;
    get bot(): boolean;
    get flags(): Readonly<BitField<UserFlags>>;
    get publicFlags(): Readonly<BitField<UserFlags>>;
    get createdTimestamp(): number;
    get createdAt(): Date;
    avatarUrl(options?: UserAvatarFormat): `/avatar-decorations/${string}/${string}.png` | `/avatars/${string}/${string}.jpeg` | `/avatars/${string}/${string}.png` | `/avatars/${string}/${string}.webp` | `/avatars/${string}/${string}.gif` | undefined;
    bannerURL(options?: UserBannerFormat): `/banners/${string}/${string}.jpeg` | `/banners/${string}/${string}.png` | `/banners/${string}/${string}.webp` | `/banners/${string}/${string}.gif` | undefined;
    toString(): string;
}

interface Activity extends _Omit<GatewayUpdatePresence["d"], "since" | "afk" | "status"> {
    status: keyof typeof PresenceUpdateStatus | PresenceUpdateStatus;
}
declare class ClientUser extends User {
    shard: {
        id: number;
        count: number;
    };
    applicationFlags: ApplicationBitField;
    constructor(client: Client, data: GatewayReadyDispatchData);
    setActivity(status: Activity, shards?: number | number[]): Promise<boolean>;
    private format;
}

declare class Guild extends ModelsBase<GatewayGuildCreateDispatchData | APIGuild> {
    private one;
    private _channels;
    get id(): string;
    get name(): string;
    get memberCount(): number;
    get icon(): string | null;
    get banner(): string | null;
    get description(): string | null;
    get createdTimestamp(): number;
    get createdAt(): Date;
    iconURL(options?: GuildIconFormat): `icons/${string}/${string}.jpeg` | `icons/${string}/${string}.png` | `icons/${string}/${string}.webp` | `icons/${string}/${string}.gif` | undefined;
    bannerURL(options?: GuildBannerFormat): `/banners/${string}/${string}.jpeg` | `/banners/${string}/${string}.png` | `/banners/${string}/${string}.webp` | `/banners/${string}/${string}.gif` | undefined;
    private get isValidated();
    get channels(): ChannelsManager;
    toString(): string;
}

declare class DMChannel<T extends APIGroupDMChannel | APIDMChannel = APIDMChannel> extends BaseChannel<T> {
    get recipients(): _discordjs_core.APIUser[] | undefined;
    get name(): string | null;
    get LastMesssageId(): string | null | undefined;
    get LastPinTimestamp(): string | null | undefined;
}
declare class GroupDMChannel extends DMChannel<APIGroupDMChannel> {
    get ownerId(): string | undefined;
    get icon(): string | null | undefined;
    get manager(): boolean | undefined;
    get applicationId(): string | undefined;
}

type Channel = DMChannel | GroupDMChannel | _Omit<BaseGuildChannel<APIGuildCategoryChannel>, "send"> | GuildTextChannel | BaseGuildChannel<APIGuildVoiceChannel | APIGuildStageVoiceChannel | APIThreadChannel | APIGuildForumChannel | APIGuildMediaChannel>;

interface ListEvents {
    ApplicationCommandPermissionsUpdate: [
        GatewayApplicationCommandPermissionsUpdateDispatchData
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
        GatewayGuildScheduledEventUserRemoveDispatchData
    ];
    AutoModerationRuleCreate: [GatewayAutoModerationRuleCreateDispatchData];
    AutoModerationRuleUpdate: [GatewayAutoModerationRuleUpdateDispatchData];
    AutoModerationRuleDelete: [GatewayAutoModerationRuleDeleteDispatchData];
    AutoModerationActionExecution: [
        GatewayAutoModerationActionExecutionDispatchData
    ];
    GuildAuditLogEntryCreate: [GatewayGuildAuditLogEntryCreateDispatchData];
}
type MessageOptions = GatewayMessageCreateDispatchData;

type _Omit<T, K extends keyof T> = Omit<T, K>;

interface HennusClientOptions {
    token: string;
    intents: GatewayIntentBits;
    restOption?: RESTOptions;
    wsOption?: _Omit<WebSocketManagerOptions, "token" | "rest" | "intents">;
}

declare class BaseSelectMenuBuilder<T extends ComponentType.StringSelect | ComponentType.UserSelect | ComponentType.RoleSelect | ComponentType.MentionableSelect | ComponentType.ChannelSelect> implements APIBaseSelectMenuComponent<T> {
    custom_id: string;
    disabled?: boolean | undefined;
    type: T;
    placeholder?: string | undefined;
    max_values?: number | undefined;
    min_values?: number | undefined;
    constructor(options?: APIBaseSelectMenuComponent<T>);
    setCustomId(custom: string): this;
    setDisabled(disabled: boolean): this;
    setPlaceHolder(placeholder: string): this;
    setMaxValues(value: number): this;
    setMinValues(value: number): this;
}
declare class BaseButtonBuilder<T extends ButtonStyle> implements APIButtonComponentBase<T> {
    type: ComponentType.Button;
    disabled?: boolean | undefined;
    style: T;
    emoji?: APIMessageComponentEmoji | undefined;
    label?: string | undefined;
    constructor(options?: _Omit<APIButtonComponentBase<T>, "type">);
    setStyle(style: T | "Primary" | "Secondary" | "Success" | "Danger" | "Link"): this;
    setLabel(label: string): this;
    setEmoji(emoji: APIMessageComponentEmoji | string): this;
    setDisabled(disabled: boolean): this;
}

declare class ButtonsIdBuilder extends BaseButtonBuilder<APIButtonComponentWithCustomId["style"]> implements APIButtonComponentWithCustomId {
    custom_id: string;
    constructor(options?: _Omit<APIButtonComponentWithCustomId, "type">);
    SetCustomId(id: string): this;
}
declare class ButtonsUrlBuilder extends BaseButtonBuilder<APIButtonComponentWithURL["style"]> implements APIButtonComponentWithURL {
    url: string;
    constructor(options?: _Omit<APIButtonComponentWithURL, "type" | "style">);
    setURL(url: string): this;
}
type ButtonsBuilder = ButtonsUrlBuilder | ButtonsIdBuilder;

declare class StringSelectMenuBuilder extends BaseSelectMenuBuilder<ComponentType.StringSelect> implements APIStringSelectComponent {
    options: APISelectMenuOption[];
    constructor(data?: _Omit<APIStringSelectComponent, "type">);
    SetOptions(options: APISelectMenuOption[]): this;
    AddOptions(options: APISelectMenuOption[]): this;
    AddOption(option: APISelectMenuOption): this;
    private save;
}
type SelectMenuBuilder = StringSelectMenuBuilder;

declare class TextInputBuilder implements APITextInputComponent {
    type: ComponentType.TextInput;
    max_length?: number | undefined;
    min_length?: number | undefined;
    placeholder?: string | undefined;
    style: TextInputStyle;
    required?: boolean | undefined;
    custom_id: string;
    label: string;
    value?: string | undefined;
    constructor(option?: APITextInputComponent);
    SetCustomID(custom: string): this;
    SetStyle(style: TextInputStyle | "Paragraph" | "Short"): this;
    SetLabel(label: string): this;
    SetMinLength(value: number): this;
    SetMaxLength(value: number): this;
    SetRequired(boolean: boolean): this;
    SetValue(value: string): this;
    SetPlaceholder(value: string): this;
}

type ComponentFormats = ButtonsBuilder | SelectMenuBuilder | TextInputBuilder;
declare class ActionRowBuilder<T extends ComponentFormats = any> implements APIActionRowComponent<T> {
    type: number;
    components: T[];
    constructor(options?: ComponentFormats[]);
    AddComponents(components: ComponentFormats[]): this;
    AddComponent(component: ComponentFormats): this;
    private save;
}

declare class EmbedBuilder {
    type: APIEmbed["type"];
    title?: APIEmbed["title"];
    description?: APIEmbed["description"];
    url?: APIEmbed["url"];
    timestamp?: APIEmbed["timestamp"];
    color: APIEmbed["color"];
    footer?: APIEmbed["footer"];
    image?: APIEmbed["image"];
    thumbnail?: APIEmbed["thumbnail"];
    author?: APIEmbed["author"];
    fields: APIEmbed["fields"];
    constructor(options?: APIEmbed);
    setTitle(value: string): this;
    setDescription(value: string): this;
    setURL(url: string): this;
    setTimestamp(time?: Date): this;
    setColor(color: colorType): this;
    setFooter(option: APIEmbed["footer"]): this;
    setImage(option: APIEmbed["image"] | string): this;
    setThumbnail(option: APIEmbed["thumbnail"] | string): this;
    setAuthor(option: APIEmbed["author"]): this;
    setFields(fields: APIEmbed["fields"]): this;
    addFields(fields: APIEmbed["fields"]): this;
    addField(name: string, value: string, inline?: boolean): this;
    private save;
}

declare class ModalBuilder {
    components: Array<ActionRowBuilder>;
    title?: string;
    custom_id?: string;
    constructor(options?: {
        title: string;
        custom_id: string;
        components: Array<ActionRowBuilder>;
    });
    setTitle(title: string): this;
    setCustomId(custom_id: string): this;
    addTextInputComponents(components: Array<TextInputBuilder>): this;
    setComponents(components: Array<ActionRowBuilder>, limitRows?: number): this;
    addComponent(component: TextInputBuilder): this;
    private findComponentById;
}

declare class AttachmentBuilder implements RESTAPIAttachment {
    constructor(attachment: Buffer | string | Stream, data: RESTAPIAttachment);
    id: string | number;
    attachment: Buffer | string | Stream;
    description?: string | undefined;
    filename?: string | undefined;
    private isSpoiler;
    setDescription(description: string): this;
    setFile(attachment: Buffer | string | Stream, name?: string): this;
    setName(name: string): this;
    setSpoiler(spoiler?: boolean): this;
}

type OmitMessage = _Omit<RESTPostAPIChannelMessageJSONBody, "embeds" | "components" | "attachments"> & {
    flags?: MessageFlags;
    ephemeral?: boolean;
};
interface MessageOptionsCreate extends OmitMessage {
    embeds?: EmbedBuilder[];
    components?: ActionRowBuilder[];
    attachments?: AttachmentBuilder[];
}
type MessageChannelCreate = _Omit<MessageOptionsCreate, "flags" | "ephemeral"> | string;
type MessageInteractionCreate = _Omit<MessageOptionsCreate, "tts" | "allowed_mentions"> | string;

declare class HennusClientBase extends AsyncEventEmitter<ListEvents> {
    private core;
    private ws;
    private rest;
    user: ClientUser;
    constructor(clientOptions: HennusClientOptions);
    get api(): _discordjs_core.API;
    get destroy(): _discordjs_util.Awaitable<void>;
    private _patch;
}

declare class ActionEvents {
    constructor(client: Client, data: GatewayDispatchPayload);
    payload(client: Client, data: GatewayDispatchPayload): {
        name: keyof ListEvents;
        args: any[];
    };
}

declare class Client extends HennusClientBase {
    channels: ChannelsManager;
    guilds: GuildsManager;
    login(): Promise<boolean>;
    action(data: GatewayDispatchPayload): ActionEvents;
}

declare class DataManager<Key = any, Value = any> {
    client: Client;
    private _cache;
    constructor(client: Client, Iterable?: Iterable<readonly [Key, Value]>);
    get cache(): cacheManager<Key, Value>;
    set(key: Key, value: Value): this;
    resolveId(id: Key): Value | undefined;
    setCache(Iterable?: Iterable<readonly [Key, Value]>): this;
}

declare class ChannelsManager extends DataManager<string, Channel> {
    constructor(client: Client, map?: Channel[]);
    fetch(id: string, force: boolean): Promise<Channel>;
    fetchGuild(guildId: string): Promise<Channel[]>;
    create(guildId: string, options: RESTPostAPIGuildChannelJSONBody): Promise<Channel>;
}

declare class MessagesManager extends DataManager<string, Message> {
    constructor(client: Client, map?: Message[]);
    fetch(channelId: string, MessageId: string, force?: boolean): Promise<Message | undefined>;
    fetchAll(channelId: string, options?: RESTGetAPIChannelMessagesQuery): Promise<Message[]>;
}

declare class GuildsManager extends DataManager<string, Guild> {
    constructor(client: Client, map?: Guild[]);
    fetch(id: string, force: boolean): Promise<Guild>;
}

declare const Version = "0.0.1-Test";

export { ActionRowBuilder, type Activity, ApplicationBitField, AttachmentBuilder, BaseButtonBuilder, BaseChannel, BaseGuildChannel, BaseSelectMenuBuilder, BitField, type BitFieldResolvable, type ButtonsBuilder, ButtonsIdBuilder, ButtonsUrlBuilder, type Channel, ChannelBitField, ChannelResolved, ChannelsManager, Client, ClientUser, Colors, type ComponentFormats, DMChannel, DataManager, EmbedBuilder, type EnumLike, GroupDMChannel, Guild, GuildTextChannel, GuildsManager, type HennusClientOptions, HennusError, type ListEvents, Message, type MessageChannelCreate, type MessageInteractionCreate, type MessageOptions, type MessageOptionsCreate, MessagesManager, ModalBuilder, ModelsBase, PermissionBitField, type RecursiveReadonlyArray, type SelectMenuBuilder, StringSelectMenuBuilder, TextInputBuilder, User, UserBitField, Version, type _Omit, _Permissions, cacheManager, type colorType, decodeEmoji, errorCodes, resolvePartialEmoji, resolvedColor };

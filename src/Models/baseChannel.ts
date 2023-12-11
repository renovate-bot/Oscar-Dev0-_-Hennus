import { APIChannel, APIGuildCategoryChannel, APIGuildForumChannel, APIGuildMediaChannel, APIGuildStageVoiceChannel, APIGuildVoiceChannel, APINewsChannel, APITextChannel, APIThreadChannel, ChannelType } from "@discordjs/core";
import { channelMention } from "@discordjs/formatters";
import { DiscordSnowflake } from "@sapphire/snowflake";
import { ChannelBitField, Client, ModelsBase, PermissionBitField } from "..";

export class BaseChannel<T extends APIChannel> extends ModelsBase<T> {

    constructor(client: Client, data: T) {
        super(data, client);
    };

    get id() {
        return this.data.id;
    };

    get type() {
        return this.data.type;
    };

    get flags(){
        return new ChannelBitField(this.data.flags).freeze();
    };

    get createdTimestamp() {
        return DiscordSnowflake.timestampFrom(this.id);
    };

    get createdAt() {
        return new Date(this.createdTimestamp);
    };

    isTextBased() {
        return 'messages' in this;
    };

    isVoiceBased() {
        return 'bitrate' in this;
    };

    isDMBased() {
        return [ChannelType.DM, ChannelType.GroupDM].includes(this.type);
    };

    isThread() {
        return [ChannelType.PublicThread, ChannelType.PrivateThread, ChannelType.AnnouncementThread].includes(this.type);
    };

    isThreadOnly() {
        return 'availableTags' in this;
    };

    toString() {
        return channelMention(this.id);
    };

    async delete() {
        await this.client.api.channels.delete(this.id);
        return this;
    };
};

export class BaseGuildChannel<T extends  APITextChannel | APINewsChannel | APIGuildVoiceChannel | APIGuildStageVoiceChannel | APIGuildCategoryChannel | APIThreadChannel | APIGuildForumChannel | APIGuildMediaChannel > extends BaseChannel<T>{
    constructor(client: Client, data: T){
        super(client, data);
    };

    get parent(){
        return this.data.parent_id;
    };

    get position(){
        return this.data.position;
    };

    get name(){
        return this.data.name;
    };

    get permision(){
        return this.data.permission_overwrites?.map(({id, type, deny,allow})=>({id, type, deny: new PermissionBitField(deny).freeze(), allow: new PermissionBitField(allow).freeze()}));
    };

    get nsfw (){
        return this.data.nsfw;
    };

    get guildId(){
        return this.data.guild_id;
    };
};
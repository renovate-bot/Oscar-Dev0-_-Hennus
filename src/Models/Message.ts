import { RESTPostAPIChannelMessageJSONBody } from "@discordjs/core";
import { MessageOptions, Client, ModelsBase, MessageChannelCreate, MessageOptionsCreate, _Omit } from "..";
import { RawFile } from '@discordjs/rest';
import { Z_ASCII } from "zlib";

export class Message extends ModelsBase<MessageOptions> {
    constructor( client: Client, data: MessageOptions){
        super(data, client);
    };

    get id(){
        return this.data.id;
    };

    get type(){
        return this.data.type
    };

    get content(){
        return this.data.content;
    };

    get mention(){
        return {
            users: this.data.mentions,
            everyone: this.data.mention_everyone,
            channels: this.data.mention_channels,
            roles: this.data.mention_roles
        };
    };

    get member(): MessageOptions["member"]  {
        return this.data.member;
    };

    get user(){
        return this.data.author;
    };
    
    get flags(){
        return this.data.flags;
    };

    get guildID(): MessageOptions["guild_id"]{
        return this.data.guild_id;
    };

    get channelID(){
        return this.data.channel_id;
    };

    async reply(options: MessageChannelCreate){
        try {
            let data: RESTPostAPIChannelMessageJSONBody & {
                files?: RawFile[];
            } = {}
            if(typeof options == "string") data["content"] = options;
            else if(typeof options == "object") data = { ...options,  }
            const msg = await this.client.api.channels.createMessage(this.channelID, data);
            const format = new Message(this.client, msg);
            return format;
        } catch (error) {
            throw error;
        };
    };

    toString(){
        return this.id;
    };
};
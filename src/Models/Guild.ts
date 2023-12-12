import { APIGuild, GatewayGuildCreateDispatchData } from "@discordjs/core";
import { ModelsBase } from "./baseModels";
import { ChannelResolved, ChannelsManager, Client } from "..";
import { DiscordSnowflake } from "@sapphire/snowflake";
import { ImageURLOptions  }  from "@discordjs/rest";
export class Guild extends ModelsBase<GatewayGuildCreateDispatchData|APIGuild>{
    constructor(client: Client, data: APIGuild | GatewayGuildCreateDispatchData){
        super(data, client);
    };


    get id(){
        return this.data.id;
    };

    get name(){
        return this.data.name;
    };

    get memberCount(){
        if(!this.isValidated) return this.data.approximate_member_count ?? 0;
        else {
            const data = this.data as GatewayGuildCreateDispatchData;
            return data.member_count ?? 0;
        };
    };

    get icon(){
        return this.data.icon;
    };

    get banner(){
        return this.data.banner;
    };

    get description(){
        return this.data.description;
    };

    get createdTimestamp() {
        return DiscordSnowflake.timestampFrom(this.id);
    };

    get createdAt() {
        return new Date(this.createdTimestamp);
    };

    iconURL(options?: ImageURLOptions) {
        if (!this.icon) return undefined;
        //@ts-ignore
        return this.client.rest.cdn.icon(this.id, this.icon, options);
    }


    bannerURL(options?: ImageURLOptions) {
        if (!this.banner) return undefined;
        //@ts-ignore
        return this.client.rest.cdn.banner(this.id, this.banner, options);
    }


    private get isValidated() {
        return "members" in this.data;
    };


    get channels(){
        if(!this.isValidated) return new ChannelsManager(this.client);
        else { 
            const data = this.data as GatewayGuildCreateDispatchData;  
            const map = data.channels.map((x)=>ChannelResolved(this.client, x));
            return new ChannelsManager(this.client, map);
        };
    };

    toString() {
        return this.name;
    };

};
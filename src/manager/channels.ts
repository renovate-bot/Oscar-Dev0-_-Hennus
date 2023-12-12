import { Channel, ChannelResolved, Client, DataManager, RESTPostAPIGuildChannelJSONBody } from "..";

export class ChannelsManager extends DataManager<string, Channel> {
    public constructor(client: Client, map?: Channel[]) {
        const _map: Iterable<readonly [string, Channel]> | undefined = map?.map((x)=>([x.id, x]))
        super(client, _map);
    };

    async fetch(id: string, force: boolean) {
        const existing = this.resolveId(id);
        if (existing && !force) return existing;
        const data = await this.client.api.channels.get(id);
        const channel = ChannelResolved(this.client,data);
        if(channel) this.set(channel.id, channel);
        return channel;
    };

    async fetchGuild(guildId: string) {
        const channels = (await this.client.api.guilds.getChannels(guildId)).map((x)=>ChannelResolved(this.client, x));
        if(Array.isArray(channels)) this.setCache(channels.map((x)=>([x.id,x])));
        return channels;
    };

    async create(guildId: string, options: RESTPostAPIGuildChannelJSONBody){
        const channel = await this.client.api.guilds.createChannel(guildId, options);
        const resolved = ChannelResolved(this.client,channel);
        if(resolved) this.set(resolved.id, resolved);
        return resolved;
    };
};
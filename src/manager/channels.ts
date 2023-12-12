import { Channel, ChannelResolved, Client, DataManager } from "..";

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
};
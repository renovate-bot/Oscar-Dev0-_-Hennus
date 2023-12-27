import { DataManager } from "./DataManager";
import { Client } from "../client";
import { Guild } from "../Models";
import { Routes } from "@discordjs/core";

export class GuildsManager extends DataManager<string, Guild> {
  public constructor(client: Client, map?: Guild[]) {
    const _map: Iterable<readonly [string, Guild]> | undefined = map?.map(
      (x) => [x.id, x],
    );
    super(client, _map);
  }

  async fetch(id: string, force: boolean) {
    const existing = this.resolveId(id);
    if (existing && !force) return existing;

    const query = new URLSearchParams();
    query.append("with_counts", "true");
    //@ts-ignore
    const data: any = await this.client.rest.get(Routes.guild(id), { query });
    const guild = new Guild(this.client, data);
    this.client.guilds.set(guild.id, guild);
    return guild;
  }
}

import { DataManager } from "./DataManager";
import { User } from "../Models";
import { Client } from "../client";

export class UsersManager extends DataManager<string, User> {
  constructor(client: Client, map?: User[]) {
    const _map: Iterable<readonly [string, User]> | undefined = map?.map(
      (x) => [x.id, x],
    );
    super(client, _map);
  }

  async fetch(UserId: string, force?: boolean) {
    const existing = this.cache.get(UserId);
    if (existing && !force) return existing;
    const data = await this.client.api.users.get(UserId);
    if (data) {
      const user = new User(this.client, data);
      this.set(user.id, user);
      return user;
    } else return undefined;
  }
}

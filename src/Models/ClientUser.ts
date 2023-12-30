import {
  GatewayOpcodes,
  GatewayReadyDispatchData,
  GatewaySendPayload,
  GatewayUpdatePresence,
  PresenceUpdateStatus,
} from "@discordjs/core";
import { Client } from "../client";
import { User } from "./User";
import { ApplicationBitField } from "../utils";
import { _Omit } from "../types";

export interface Activity
  extends _Omit<GatewayUpdatePresence["d"], "since" | "afk" | "status"> {
  status: keyof typeof PresenceUpdateStatus | PresenceUpdateStatus;
}

export class ClientUser extends User {
  shard: { id: number; count: number };
  applicationFlags: ApplicationBitField;

  constructor(client: Client, data: GatewayReadyDispatchData) {
    super(client, data.user);
    const shard = data.shard;
    if (shard) this.shard = { id: shard[0], count: shard[1] };
    else this.shard = { id: 0, count: 0 };
    this.applicationFlags = new ApplicationBitField(
      data.application.flags,
    ).freeze();
  }

  async setActivity(status: Activity, shards?: number | number[]) {
    const data: GatewaySendPayload = {
      op: GatewayOpcodes.PresenceUpdate,
      d: {
        since: null,
        activities: status.activities,
        afk: false,
        status: this.format(status.status),
      },
    };
    if (Array.isArray(shards)) {
      for (const shard of shards) {
        try {
          //@ts-ignore
          await this.client.ws.send(shard, data);
        } catch {
          continue;
        }
      }
    } //@ts-ignore
    else if (typeof shards == "number") await this.client.ws.send(shards, data);
    //@ts-ignore
    else await this.client.ws.send(this.shard.id, data);
    return true;
  }

  private format<T extends Activity["status"]>(
    status: T,
  ): PresenceUpdateStatus {
    let statusString: keyof typeof PresenceUpdateStatus;
    if (status == "Online") statusString = status;
    else if (status == "Offline") statusString = status;
    else if (status == "Invisible") statusString = status;
    else if (status == "Idle") statusString = status;
    else if (status == "DoNotDisturb") statusString = status;
    else return status;
    return PresenceUpdateStatus[statusString];
  }
}

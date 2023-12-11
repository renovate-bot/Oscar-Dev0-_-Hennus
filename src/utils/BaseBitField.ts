import { ChannelFlags } from "@discordjs/core";
import { BitField, Permissions } from "..";
export class ChannelBitField extends BitField<ChannelFlags>{
    static Flags = ChannelFlags;
};

export class PermissionBitField extends BitField<Permissions> {
    static Flags = Permissions;
};
import { ChannelFlags } from "@discordjs/core";
import { BitField } from "./Bitfield";

export class ChannelBitField extends BitField<ChannelFlags>{
    static Flags = ChannelFlags;
};
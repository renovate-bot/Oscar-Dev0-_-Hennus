import { ChannelFlags } from "@discordjs/core"
import { _Permissions, BitField } from ".."

export class ChannelBitField extends BitField<ChannelFlags> {
  static Flags = ChannelFlags
}

export class PermissionBitField extends BitField<_Permissions> {
  static Flags = _Permissions
}

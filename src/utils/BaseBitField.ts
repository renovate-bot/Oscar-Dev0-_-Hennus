import { ApplicationFlags, ChannelFlags, UserFlags } from "@discordjs/core"
import { BitField } from "./Bitfield"
import { _Permissions } from "./Permissions"

export class ChannelBitField extends BitField<ChannelFlags> {
  static Flags = ChannelFlags
}

export class PermissionBitField extends BitField<_Permissions> {
  static Flags = _Permissions
}

export class UserBitField extends BitField<UserFlags> {
  static Flags = UserFlags
}

export class ApplicationBitField extends BitField<ApplicationFlags> {
  static Flags = ApplicationFlags
}
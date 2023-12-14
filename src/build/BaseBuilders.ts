import {
  APIBaseSelectMenuComponent,
  APIButtonComponentBase,
  APIMessageComponentEmoji,
  ButtonStyle,
  ComponentType,
} from "@discordjs/core"
import { _Omit } from "../types"
import { resolvePartialEmoji } from "../utils"

export class BaseSelectMenuBuilder<
  T extends
    | ComponentType.StringSelect
    | ComponentType.UserSelect
    | ComponentType.RoleSelect
    | ComponentType.MentionableSelect
    | ComponentType.ChannelSelect,
> implements APIBaseSelectMenuComponent<T> {
  custom_id: string
  disabled?: boolean | undefined
  type: T
  placeholder?: string | undefined
  max_values?: number | undefined
  min_values?: number | undefined

  constructor(options?: APIBaseSelectMenuComponent<T>) {
    if (options) {
      this.custom_id = options.custom_id
      this.disabled = options.disabled
      this.type = options.type
      this.placeholder = options.placeholder
      this.max_values = options.max_values
      this.min_values = options.min_values
    }
  }

  setCustomId(custom: string) {
    this.custom_id = custom
    return this
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled
    return this
  }

  setPlaceHolder(placeholder: string) {
    this.placeholder = placeholder
    return this
  }

  setMaxValues(value: number) {
    this.max_values = value
    return this
  }

  setMinValues(value: number) {
    this.min_values = value
    return this
  }
}

export class BaseButtonBuilder<T extends ButtonStyle>
  implements APIButtonComponentBase<T> {
  type: ComponentType.Button = ComponentType.Button
  disabled?: boolean | undefined
  style: T
  emoji?: APIMessageComponentEmoji | undefined
  label?: string | undefined

  constructor(options?: _Omit<APIButtonComponentBase<T>, "type">) {
    if (options) {
      this.disabled = options.disabled
      this.style = options.style
      this.emoji = options.emoji
      this.label = options.label
    }
  }

  setStyle(style: T | "Primary" | "Secondary" | "Success" | "Danger" | "Link") {
    const stylesMap: { [key: string]: ButtonStyle } = {
      "Primary": ButtonStyle.Primary,
      "Secondary": ButtonStyle.Secondary,
      "Success": ButtonStyle.Success,
      "Danger": ButtonStyle.Danger,
      "Link": ButtonStyle.Link,
    }

    this.style =
      (typeof style === "string"
        ? stylesMap[style] || ButtonStyle.Primary
        : style) as T
    return this
  }

  setLabel(label: string) {
    this.label = label
    return this
  }

  setEmoji(emoji: APIMessageComponentEmoji | string) {
    let _e: APIMessageComponentEmoji | undefined = {}
    if (typeof emoji == "string") _e = resolvePartialEmoji(emoji) ?? undefined
    this.emoji = _e
    return this
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled
    return this
  }
}

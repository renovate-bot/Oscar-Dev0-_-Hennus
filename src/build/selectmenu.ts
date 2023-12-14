import {
  APIBaseAutoPopulatedSelectMenuComponent,
  APIBaseSelectMenuComponent,
  APIChannelSelectComponent,
  APIMentionableSelectComponent,
  APIRoleSelectComponent,
  APISelectMenuOption,
  APIStringSelectComponent,
  APIUserSelectComponent,
  ComponentType,
  SelectMenuDefaultValueType,
} from "@discordjs/core"
import { _Omit, BaseSelectMenuBuilder } from ".."

export class StringSelectMenuBuilder
  extends BaseSelectMenuBuilder<ComponentType.StringSelect>
  implements APIStringSelectComponent {
  options: APISelectMenuOption[]

  constructor(data?: _Omit<APIStringSelectComponent, "type">) {
    const options: APIStringSelectComponent = {
      ...data,
      options: data?.options ?? [],
      type: ComponentType.StringSelect,
      custom_id: data?.custom_id ?? "",
    }
    super(options)
  }

  public SetOptions(options: APISelectMenuOption[]): this {
    this.options = options
    return this
  }

  public AddOptions(options: APISelectMenuOption[]): this {
    this.save(options)
    return this
  }

  public AddOption(option: APISelectMenuOption): this {
    this.save([option])
    return this
  }

  private save(options?: APISelectMenuOption[]): void {
    if (this.type === 3 && options) {
      this.options.push(...options)
    }
  }
}

export type SelectMenuBuilder = StringSelectMenuBuilder

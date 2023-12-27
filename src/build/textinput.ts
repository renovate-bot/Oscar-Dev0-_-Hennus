import {
  APITextInputComponent,
  ComponentType,
  TextInputStyle,
} from "@discordjs/core";

export class TextInputBuilder implements APITextInputComponent {
  type: ComponentType.TextInput;
  max_length?: number | undefined;
  min_length?: number | undefined;
  placeholder?: string | undefined;
  style: TextInputStyle;
  required?: boolean | undefined;
  custom_id: string;
  label: string;
  value?: string | undefined;

  constructor(option?: APITextInputComponent) {
    if (option) {
      this.min_length = option?.min_length;
      this.max_length = option?.max_length;
      this.required = option?.required;
      this.placeholder = option?.placeholder;
      this.custom_id = option?.custom_id;
      this.style = option?.style;
      this.label = option?.label;
      this.value = option?.value;
    }
  }

  public SetCustomID(custom: string) {
    this.custom_id = custom;
    return this;
  }

  public SetStyle(style: TextInputStyle | "Paragraph" | "Short") {
    const styleMap: { [key: string]: TextInputStyle } = {
      Paragraph: 1,
      Short: 2,
    };

    this.style = typeof style === "number" ? style : styleMap[style];
    return this;
  }

  public SetLabel(label: string) {
    this.label = label;
    return this;
  }

  public SetMinLength(value: number) {
    if (typeof value === "number") {
      this.min_length = value;
    }
    return this;
  }

  public SetMaxLength(value: number) {
    if (typeof value === "number") {
      this.max_length = value;
    }
    return this;
  }

  public SetRequired(boolean: boolean) {
    this.required = boolean;
    return this;
  }

  public SetValue(value: string) {
    this.value = value;
    return this;
  }

  public SetPlaceholder(value: string) {
    this.placeholder = value;
    return this;
  }
}

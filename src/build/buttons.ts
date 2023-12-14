import {
  APIButtonComponentWithCustomId,
  APIButtonComponentWithURL,
  ButtonStyle,
} from "@discordjs/core";
import { BaseButtonBuilder } from "./BaseBuilders";
import { _Omit } from "../types";

export class ButtonsIdBuilder
  extends BaseButtonBuilder<APIButtonComponentWithCustomId["style"]>
  implements APIButtonComponentWithCustomId {
  custom_id: string;

  constructor(options?: _Omit<APIButtonComponentWithCustomId, "type">) {
    super(options);
  }

  public SetCustomId(id: string): this {
    this.custom_id = typeof id === "string" ? id : "";
    return this;
  }
}

export class ButtonsUrlBuilder
  extends BaseButtonBuilder<APIButtonComponentWithURL["style"]>
  implements APIButtonComponentWithURL {
  url: string;

  constructor(options?: _Omit<APIButtonComponentWithURL, "type" | "style">) {
    super({ ...options, style: ButtonStyle.Link });
  }

  setURL(url: string) {
    this.url = typeof url === "string" ? url : "";
    return this;
  }
}

export type ButtonsBuilder = ButtonsUrlBuilder | ButtonsIdBuilder;

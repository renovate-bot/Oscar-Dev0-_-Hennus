import { errorCodes, HennusError } from "./Errors";

export function resolvedColor(color: colorType): number {
  if (typeof color === "string") {
    if (color === "Random") return Math.floor(Math.random() * (0xffffff + 1));
    if (color === "Default") return 0;

    if (/^#?[\da-f]{6}$/i.test(color)) {
      return parseInt(color.replace("#", ""), 16);
    }

    const enumColorValue = Colors[color as StringColor];
    if (enumColorValue !== undefined) color = enumColorValue;
    else throw new HennusError(errorCodes.ColorRange);
  } else if (Array.isArray(color)) {
    color = (color[0] << 16) + (color[1] << 8) + color[2];
  }

  if (
    typeof color !== "number" ||
    Number.isNaN(color) ||
    color < 0 ||
    color > 0xffffff
  )
    throw new HennusError(errorCodes.ColorRange);

  return color;
}

export type colorType =
  | `#${string}`
  | number
  | StringColor
  | "Random"
  | Colors
  | [number, number, number];

type StringColor = keyof typeof Colors;

export enum Colors {
  Default = 0x000000,
  White = 0xffffff,
  Aqua = 0x1abc9c,
  Green = 0x57f287,
  Blue = 0x3498db,
  Yellow = 0xfee75c,
  Purple = 0x9b59b6,
  LuminousVividPink = 0xe91e63,
  Fuchsia = 0xeb459e,
  Gold = 0xf1c40f,
  Orange = 0xe67e22,
  Red = 0xed4245,
  Grey = 0x95a5a6,
  Navy = 0x34495e,
  DarkAqua = 0x11806a,
  DarkGreen = 0x1f8b4c,
  DarkBlue = 0x206694,
  DarkPurple = 0x71368a,
  DarkVividPink = 0xad1457,
  DarkGold = 0xc27c0e,
  DarkOrange = 0xa84300,
  DarkRed = 0x992d22,
  DarkGrey = 0x979c9f,
  DarkerGrey = 0x7f8c8d,
  LightGrey = 0xbcc0c0,
  DarkNavy = 0x2c3e50,
  Blurple = 0x5865f2,
  Greyple = 0x99aab5,
  DarkButNotBlack = 0x2c2f33,
  NotQuiteBlack = 0x23272a,
  Pink = 0xffc0cb,
  Lavender = 0xe6e6fa,
  Coral = 0xff7f50,
  Teal = 0x008080,
  Maroon = 0x800000,
  MintGreen = 0x98ff98,
  Olive = 0x808000,
  Salmon = 0xfa8072,
  Cyan = 0x00ffff,
  Indigo = 0x4b0082,
  Peach = 0xffdab9,
  SkyBlue = 0x87ceeb,
  LimeGreen = 0x32cd32,
  Magenta = 0xff00ff,
  Turquoise = 0x40e0d0,
  DarkOliveGreen = 0x556b2f,
  LightCoral = 0xf08080,
  SteelBlue = 0x4682b4,
  DarkMagenta = 0x8b008b,
  DarkSlateGray = 0x2f4f4f,
  Tomato = 0xff6347,
  Brown = 0x8b4513,
  Crimson = 0xdc143c,
  DarkCyan = 0x008b8b,
  DarkSalmon = 0xe9967a,
  DeepPink = 0xff1493,
  ForestGreen = 0x228b22,
  HotPink = 0xff69b4,
  Khaki = 0xf0e68c,
  MediumBlue = 0x0000cd,
  MediumSpringGreen = 0x00fa9a,
  OliveDrab = 0x6b8e23,
  Peru = 0xcd853f,
  RoyalBlue = 0x4169e1,
  SandyBrown = 0xf4a460,
  Sienna = 0xa0522d,
  Violet = 0xee82ee,
  DarkTurquoise = 0x00ced1,
  Chocolate = 0xd2691e,
  FireBrick = 0xb22222,
  LightSeaGreen = 0x20b2aa,
  DarkKhaki = 0xbdb76b,
  Orchid = 0xda70d6,
  PaleVioletRed = 0xdb7093,
  BananaYellow = 0xffd800,
  AvocadoGreen = 0x82c341,
  FunkyFuchsia = 0xff28b3,
  PunnyPurple = 0x9c27b0,
  WackyWatermelon = 0xff4567,
  GoofyGreen = 0x00b700,
  ChuckleChocolate = 0x5a3522,
  LoonyLemon = 0xffe135,
  GiggleGrey = 0xa9a9a9,
  SillySalmon = 0xff8c69,
  NuttyNavy = 0x000080,
  KookyCoral = 0xff6f61,
  ZanyZucchini = 0x39a78e,
  QuirkyQuartz = 0x51484f,
  BizarreBeige = 0xf5f5dc,
  HilariousHeliotrope = 0xdf73ff,
  RidiculousRuby = 0xe0115f,
  DaffyDenim = 0x1974d2,
  BonkersBrown = 0x654321,
  ChucklesCyan = 0x00ffff,
  ZestyZaffre = 0x0014a8,
  ComicalCrimson = 0xdc143c,
  WittyWheat = 0xf5deb3,
  DrollDandelion = 0xfed85d,
}

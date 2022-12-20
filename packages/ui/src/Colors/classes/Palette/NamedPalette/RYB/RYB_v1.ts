import { NamedPalette } from "..";
import { Hsl } from "../../Palette_v2";

export interface IRYB_v1 {
  red: Hsl;
  yellow: Hsl;
  blue: Hsl;
  orange: Hsl;
  green: Hsl;
  purple: Hsl;
  red_orange: Hsl;
  yellow_orange: Hsl;
  yellow_green: Hsl;
  blue_green: Hsl;
  blue_purple: Hsl;
  red_purple: Hsl;
}

export interface RYB_v1 extends NamedPalette {}

export class RYB_v1
  extends NamedPalette
  implements IRYB_v1
{
  get red() {
    return this.palette.primary1;
  }
  get yellow() {
    return this.palette.primary2;
  }
  get blue() {
    return this.palette.primary3;
  }
  get orange() {
    return this.palette.secondary1;
  }
  get green() {
    return this.palette.complementary;
  }
  get purple() {
    return this.palette.secondary3;
  }
  get red_orange() {
    return this.palette.tertiary1;
  }
  get yellow_orange() {
    return this.palette.tertiary2;
  }
  get yellow_green() {
    return this.palette.tertiary3;
  }
  get blue_green() {
    return this.palette.tertiary4;
  }
  get blue_purple() {
    return this.palette.tertiary5;
  }
  get red_purple() {
    return this.palette.tertiary6;
  }
  constructor(color: number) {
    super(color, "ryb");
    if (color > 15 || color < -45)
      throw new Error(
        "out of bound, must be less than 30 and more than -30"
      );
  }
}

export type RYB_v1Ctor = {
  new (color: number): RYB_v1;
};

export const RYB_v1Ctor: RYB_v1Ctor = RYB_v1;

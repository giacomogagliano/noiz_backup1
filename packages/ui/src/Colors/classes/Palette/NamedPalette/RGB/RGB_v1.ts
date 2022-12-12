import { NamedPalette } from "..";
import { Hsl } from "../../Palette_v2";

export interface IRGB_v1 {
  red: Hsl;
  green: Hsl;
  blue: Hsl;
  yellow: Hsl;
  cyan: Hsl;
  magenta: Hsl;
  red_yellow: Hsl;
  green_yellow: Hsl;
  green_cyan: Hsl;
  blue_cyan: Hsl;
  blue_magenta: Hsl;
  red_magenta: Hsl;
}

export interface RGB_v1 extends NamedPalette {}
export class RGB_v1 extends NamedPalette {
  get red() {
    return this.palette.primary1;
  }
  get green() {
    return this.palette.primary2;
  }
  get blue() {
    return this.palette.primary3;
  }
  get yellow() {
    return this.palette.secondary1;
  }
  get cyan() {
    return this.palette.complementary;
  }
  get magenta() {
    return this.palette.secondary3;
  }
  get red_yellow() {
    return this.palette.tertiary1;
  }
  get green_yellow() {
    return this.palette.tertiary2;
  }
  get green_cyan() {
    return this.palette.tertiary3;
  }
  get blue_cyan() {
    return this.palette.tertiary4;
  }
  get blue_magenta() {
    return this.palette.tertiary5;
  }
  get red_magenta() {
    return this.palette.tertiary6;
  }
  constructor(color: number) {
    super(color, "rgb");
    if (color > 30 || color < -30)
      throw new Error(
        "out of bound, must be less than 30 and more than -30"
      );
  }
}

export type RGB_v1Ctor = {
  new (color: number): RGB_v1;
};

export const RGB_v1Ctor: RGB_v1Ctor = RGB_v1;

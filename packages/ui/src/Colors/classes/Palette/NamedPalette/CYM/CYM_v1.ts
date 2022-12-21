import { NamedPalette } from "..";
import { Hsl } from "../../Palette_v2";

export interface ICYM_v1 {
  yellow: Hsl;
  cyan: Hsl;
  magenta: Hsl;
  green: Hsl;
  blue: Hsl;
  red: Hsl;
  yellow_red: Hsl;
  yellow_green: Hsl;
  cyan_green: Hsl;
  cyan_blue: Hsl;
  magenta_blue: Hsl;
  magenta_red: Hsl;
}

export interface CYM_v1 extends NamedPalette {}
export class CYM_v1 extends NamedPalette {
  get yellow() {
    return this.palette.primary1;
  }
  get cyan() {
    return this.palette.primary2;
  }
  get magenta() {
    return this.palette.primary3;
  }
  get green() {
    return this.palette.secondary1;
  }
  get blue() {
    return this.palette.complementary;
  }
  get red() {
    return this.palette.secondary3;
  }
  get yellow_red() {
    return this.palette.tertiary1;
  }
  get yellow_green() {
    return this.palette.tertiary2;
  }
  get cyan_green() {
    return this.palette.tertiary3;
  }
  get cyan_blue() {
    return this.palette.tertiary4;
  }

  get magenta_blue() {
    return this.palette.tertiary5;
  }
  get magenta_red() {
    return this.palette.tertiary6;
  }
  constructor(color: number) {
    super(color, "cym");
    if (color > 30 || color < -30)
      throw new Error(
        "out of bound, must be less than 30 and more than -30"
      );
  }
}

export type CYM_v1Ctor = {
  new (color: number): CYM_v1;
};

export const CYM_v1Ctor: CYM_v1Ctor = CYM_v1;

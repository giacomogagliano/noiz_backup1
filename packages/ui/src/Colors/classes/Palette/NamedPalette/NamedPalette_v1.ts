import {
  ColorWheels,
  Hsl,
  Palette_v2,
} from "../Palette_v2";
import { ICYM } from "./CYM";
import { IRGB } from "./RGB";
import { IRYB } from "./RYB";

export interface INamedPalette_v1 {}

export interface NamedPalette_v1 {}

export class NamedPalette_v1 implements INamedPalette_v1 {
  #palette: Palette_v2;
  get palette() {
    return this.#palette;
  }
  constructor(color: number, type: keyof ColorWheels) {
    this.#palette = new Palette_v2(color, type);
  }
  setBrightness(bright: number) {
    this.#palette.setBrightness(bright);
    return this;
  }
  setBaseColor(color: number) {
    this.#palette.setColor(color);
    return this;
  }
  setSaturation(sat: number) {
    this.#palette.setSaturation(sat);
    return this;
  }
}

export type NamedPalette_v1Ctor<
  T extends keyof (IRGB | IRYB | ICYM) = keyof (
    | IRGB
    | IRYB
    | ICYM
  )
> = {
  new (
    ncolor: number,
    type: keyof ColorWheels
  ): NamedPalette_v1;
};

export const NamedPalette_v1Ctor: NamedPalette_v1Ctor =
  NamedPalette_v1;

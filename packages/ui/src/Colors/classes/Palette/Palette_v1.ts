import { colors } from "../../../HTML/React/lib/types/colors";

export type PaletteType_v1 = {
  [key in colors]?: string;
};

export interface Palette_v1 extends PaletteType_v1 {
  white?: string;
  black?: string;
  red?: string;
  green?: string;
  blue?: string;
  cyan?: string;
  yellow?: string;
  magenta?: string;
  orange?: string;
  purple?: string;
  indigo?: string;
  violet?: string;
  red_orange?: string;
  red_purple?: string;
  red_magenta?: string;
  red_yellow?: string;
  blue_green?: string;
  blue_purple?: string;
  blue_cyan?: string;
  blue_magenta?: string;
  yellow_orange?: string;
  yellow_green?: string;
  green_yellow?: string;
  green_cyan?: string;
  magenta_red?: string;
  magenta_blue?: string;
  cyan_green?: string;
  cyan_blue?: string;
}

export class Palette_v1 {
  white?: string;
  black?: string;
  red?: string;
  orange?: string;
  yellow?: string;
  green?: string;
  cyan?: string;
  blue?: string;
  indigo?: string;
  purple?: string;
  magenta?: string;
  violet?: string;
  red_orange?: string;
  red_purple?: string;
  red_magenta?: string;
  red_yellow?: string;
  blue_green?: string;
  blue_purple?: string;
  blue_cyan?: string;
  blue_magenta?: string;
  yellow_orange?: string;
  yellow_green?: string;
  green_yellow?: string;
  green_cyan?: string;
  magenta_red?: string;
  magenta_blue?: string;
  cyan_green?: string;
  cyan_blue?: string;
  grey?: string;
  darkgrey?: string;
  smoke?: string;
  constructor() {}
}

/////////OLD
/////////PALETTE
type Palette5Colors = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
};
type Palette8Colors = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
};

type ColorPaletteTypes = "hex";

export interface ColorPalette {
  __type: ColorPaletteTypes;
  colors: Palette5Colors | Palette8Colors;
}

export class ColorPalette {
  constructor(
    type: ColorPaletteTypes,
    colors: Palette5Colors | Palette8Colors
  ) {
    this.__type = type;
    this.colors = colors;
  }
}

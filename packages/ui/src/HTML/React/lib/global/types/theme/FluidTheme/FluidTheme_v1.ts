import { RYB } from "../../../../../../../Colors/classes";
import { BasicColorStyle } from "../../BasicColorStyle";
import { Palette1 } from "../Palette1";

export type FluidTheme_v1 = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicColorStyle;
  secondary: BasicColorStyle;
  palette: Palette1;
  palette_ryb: RYB;
};

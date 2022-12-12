import { Palette1 } from "./Palettes";
import { BasicColorStyle } from "../../global";
import { RYB } from "../../../../../Colors/classes";

export type FluidTheme = {
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

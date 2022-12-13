import { Palette1 } from "./Palettes";
import { BasicColorStyle } from "../../global";

export type FluidTheme = {
  body: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  headingColor: string;
  primary: BasicColorStyle;
  secondary: BasicColorStyle;
  palette: Palette1;
};

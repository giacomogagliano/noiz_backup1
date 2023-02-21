import { FluidTheme } from "../../types/theme";

export interface paletteDarkGrey {
  <T extends { theme: FluidTheme }>(props: T): string;
}

export function paletteDarkGrey<
  T extends { theme: FluidTheme }
>(props: T) {
  return props.theme.palette.darkgrey;
}

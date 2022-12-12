import { FluidTheme } from "../../types/theme";

export function paletteDarkGrey<
  T extends { theme: FluidTheme }
>(props: T) {
  return props.theme.palette.darkgrey;
}

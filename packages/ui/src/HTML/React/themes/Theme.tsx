import { RYB } from "../../../Colors/classes";
import { FluidTheme } from "../lib/types/theme";

const black_ = "hsl(185, 3%, 6%)";
const white_ = "hsl(0, 0%, 93%)";
const darkgrey_ = "hsl(0, 0%, 53%)";
const grey_ = "hsl(0, 0%, 76%)";

const palette = {
  grey: grey_,
  darkgrey: darkgrey_,
  red: "hsl(346, 93%, 39%)",
  orange: "hsl(18, 67%, 60%)",
  yellow: "hsl(57, 93%, 72%)",
  green: "hsl(102, 18%, 56%)",
  blue: "hsl(203, 74%, 29%)",
  purple: "hsl(317, 39%, 30%)",
  black: "hsl(114, 72%, 6%)",
  white: "hsl(300, 100%, 99%)",
  smoke: "hsl(317,1%,29%)",
};

export const darkTheme: FluidTheme = {
  body: palette.black,
  textColor: palette.white,
  backgroundColor: palette.black,
  borderColor: palette.white,
  headingColor: "",
  primary: {
    backgroundColor: palette.black,
    borderColor: palette.white,
    color: palette.white,
  },
  secondary: {
    backgroundColor: palette.white,
    borderColor: palette.black,
    color: palette.black,
  },
  palette,
  palette_ryb: new RYB(-8),
};

export const lightTheme: FluidTheme = {
  body: palette.white,
  textColor: palette.black,
  backgroundColor: palette.white,
  borderColor: palette.black,
  headingColor: "",
  primary: {
    backgroundColor: palette.white,
    borderColor: palette.black,
    color: palette.black,
  },
  secondary: {
    backgroundColor: palette.black,
    borderColor: palette.white,
    color: palette.white,
  },
  palette,
  palette_ryb: new RYB(-8),
};

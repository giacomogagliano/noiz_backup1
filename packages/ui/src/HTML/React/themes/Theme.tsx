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
  body: black_,
  textColor: white_,
  backgroundColor: black_,
  borderColor: white_,
  headingColor: "",
  primary: {
    backgroundColor: black_,
    borderColor: white_,
    color: white_,
  },
  secondary: {
    backgroundColor: white_,
    borderColor: black_,
    color: black_,
  },
  palette,
};

export const lightTheme: FluidTheme = {
  body: white_,
  textColor: black_,
  backgroundColor: white_,
  borderColor: black_,
  headingColor: "",
  primary: {
    backgroundColor: white_,
    borderColor: black_,
    color: black_,
  },
  secondary: {
    backgroundColor: black_,
    borderColor: white_,
    color: white_,
  },
  palette,
};

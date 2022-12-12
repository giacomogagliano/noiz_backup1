import { FluidTheme } from "../lib/types/theme";

const black = "#090909";
const white = "#fafafa";
const darkgrey = "hsl(0, 0%, 53%)";
const grey = "hsl(0, 0%, 76%)";

const palette = {
  grey,
  darkgrey,
  red: "hsl(346, 93%, 39%)",
  orange: "#hsl(18, 67%, 60%)",
  yellow: "hsl(57, 93%, 72%)",
  green: "hsl(102, 18%, 56%)",
  blue: "hsl(203, 74%, 29%)",
  purple: "hsl(317, 39%, 30%)",
  black: "hsl(114, 72%, 6%)",
  white: "hsl(300, 100%, 99%)",
  smoke: "hsl(317,1%,29%)",
};

export const darkTheme: FluidTheme = {
  body: black,
  textColor: white,
  backgroundColor: black,
  borderColor: white,
  headingColor: "",
  primary: {
    backgroundColor: black,
    borderColor: white,
    color: white,
  },
  secondary: {
    backgroundColor: white,
    borderColor: black,
    color: black,
  },
  palette,
};

export const lightTheme: FluidTheme = {
  body: white,
  textColor: black,
  backgroundColor: white,
  borderColor: black,
  headingColor: "",
  primary: {
    backgroundColor: white,
    borderColor: black,
    color: black,
  },
  secondary: {
    backgroundColor: black,
    borderColor: white,
    color: white,
  },
  palette,
};

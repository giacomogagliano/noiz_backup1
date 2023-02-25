// import { load } from "webfontloader";

// const gll = fonts;
// 'Roboto', sans-serif

type FluidFontFamilies =
  | "Epilogue"
  | "Roboto"
  | "Oswald"
  | "Roboto Mono"
  | "Noto Sans Limbu";

class V1 {
  fontFamily: FluidFontFamilies;
  googleQuery: string;
  cssValue: string;
  constructor(props: { fontFamily: FluidFontFamilies }) {
    this.fontFamily = props.fontFamily;
    this.googleQuery = this.makeGoogleFontsQuery({
      fontFamily: this.fontFamily,
    });
    this.cssValue = `${this.fontFamily}, sans-serif`;
  }
  makeGoogleFontsQuery(props: {
    fontFamily: FluidFontFamilies;
  }) {
    if (this.fontFamily.includes(" ")) {
      this.fontFamily.replace(" ", "+");
    }
    return `https://fonts.googleapis.com/css2?family=${props.fontFamily}:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,500;1,600;1,700;1,900&display=swap`;
  }
}

export interface GoogleFonts_v1Ctor {
  new (props: { fontFamily: FluidFontFamilies }): V1;
}

export const GoogleFonts_v1 = V1;

import {
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import { GoogleFonts } from "../../../class";
import { FluidTheme } from "../../lib/types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends FluidTheme {}
}

const roboto = new GoogleFonts({
  fontFamily: "Roboto",
});
export const robotoGoogleQuery = roboto.googleQuery;
const robotoCssValue = roboto.cssValue;

export const GlobalStyle = createGlobalStyle<{
  theme: DefaultTheme;
}>`
  body {
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    /* transition: .3s ease; */
    box-sizing: border-box;
    position:fixed;
    #__next {
    display: grid;
    /* place-items: center; */
    overflow: auto;
    width: 100%;
    height: 100%;
    }
  }
  * {
    font-family: ${robotoCssValue};
    margin: 0;
    padding: 0;
  }
  h2{
    color: ${props => props.theme.headingColor};
  }
  main{
    width: 100%;
    height:100%;
  }
  a {
    color : ${props => props.theme.textColor};
  }
`;

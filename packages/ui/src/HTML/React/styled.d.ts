// import original module declarations
import "styled-components";
import {} from "styled-components/cssprop";
import { FluidTheme } from "./lib/types/theme";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends FluidTheme {}
}

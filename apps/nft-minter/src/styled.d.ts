// import original module declarations
import { HTML } from "@zionstate/ui";
import "styled-components";
import {} from "styled-components/cssprop";

type Theme = HTML.React.lib.FluidTheme;

export type BasicProps = {
  color: string;
  backgroundColor: string;
  borderColor: string;
};

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

type exampleTheme = {
  borderRadius: Theme;

  colors: {
    main: string;
    secondary: string;
  };
};

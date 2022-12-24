import { CSSProperties } from "react";
import { ZionCss } from "../ZionCss";

/**
 *
 */
export type GCssStyled_v1<A extends keyof CSSProperties> =
  {
    css_?: ZionCss<undefined, true, A>;
  };

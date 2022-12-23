import { CSSProperties } from "react";
import { ZionCss } from "../ZionCss";

//////
export type CssPropUnion_v1<
  T extends keyof CSSProperties | undefined
> = ZionCss<undefined, true, T>;

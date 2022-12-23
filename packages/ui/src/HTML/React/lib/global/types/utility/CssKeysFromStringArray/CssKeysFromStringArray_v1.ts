import { CSSProperties } from "react";

/**
 *
 */
export type CssKeysFromStringArray_v1<
  T extends (keyof CSSProperties)[]
> = {
  [props in T[number]]: CSSProperties[props];
};

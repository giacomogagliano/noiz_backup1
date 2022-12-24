import { CSSProperties } from "react";
import { PickCss } from "../PickCss";

/**
 *
 */
export type RequiredCss_v1<R extends keyof CSSProperties> =
  Required<PickCss<R>>;

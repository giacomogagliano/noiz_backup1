import { CSSProperties } from "react";

/**
 *
 */
export type PickCss_v1<P extends keyof CSSProperties> =
  Pick<CSSProperties, P>;

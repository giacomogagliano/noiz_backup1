import { CSSProperties } from "react";

/**
 *
 */
export type OmitCss_v1<O extends keyof CSSProperties> =
  Omit<CSSProperties, O>;

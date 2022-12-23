import { CSSProperties } from "react";
import {
  OmitCss,
  PickCss,
  RequiredCss,
} from "../../../utility";
import { CssProperties } from "../../CssProperties";

/**
 * Utility type to build css property requierements. The
 * CssProperties type is built with all properties being
 * optional.
 * Sometimes we need some properties to be required,
 * in this case we can use this utility type which has an
 * optional generic type which extends the keys of
 * CssProperties in order to create union types of
 * required CssProperties.
 * Usage:
 * ```ts
 * // creates an object type which has width and height as required props
 * type CssProps = ZionCss<"width" | "height">;
 * // creates a type which has only the required properties
 * type CssProps = ZionCss<"width"|"height",true>
 * // creates a type which has the required properties AND the list passed as Optional
 * type CssProps = ZionCss<"width"|"height",true,"maxWidth">
 * // creates a type which has only optional properties passed as Optional
 * type CssProps = ZionCss<undefined,true,"display" | "maxWidth">
 * ```
 * @param R the list of required CSS attributes
 * @param Pick if true, the list of values
 * passed is also picked, meaning that only those values
 * will be retained from all of the CSS attributes.
 * @param Optional list of attributes that shall be
 * included but optionally.
 */
export type ZionCss_v1<
  R extends keyof CssProperties | undefined = undefined,
  Pick = false,
  Optional extends
    | keyof CSSProperties
    | undefined = undefined
> = [R] extends [keyof CSSProperties]
  ? Pick extends false
    ? RequiredCss<R> & OmitCss<R>
    : Optional extends undefined
    ? RequiredCss<R>
    : [Optional] extends [keyof CSSProperties]
    ? RequiredCss<R> & PickCss<Optional>
    : never
  : Pick extends true
  ? [Optional] extends [keyof CSSProperties]
    ? PickCss<Optional>
    : never
  : CSSProperties;

import { FlattenSimpleInterpolation } from "styled-components";
import { ZionCss } from "../../../utility";

export function preCheckProp<
  T extends { css_?: ZionCss } = {
    css_?: ZionCss;
  }
>(props: T): { css_: ZionCss } {
  if (props.css_) return props as { css_: ZionCss };
  else throw new Error("");
}

export function checkPropsAndSetDefault_v1<
  T extends { css_: ZionCss },
  P extends keyof ZionCss
>(
  props: T,
  property: P,
  defaultValue: FlattenSimpleInterpolation
  // types: { type: string; value: FlattenSimpleInterpolation }[]
): FlattenSimpleInterpolation {
  console.log(property);

  console.log("called checlPropAndSetDeault", props.css_);
  let result: FlattenSimpleInterpolation;
  result = defaultValue;
  return result;
}

// export function checkPropAndSetDefault<
//   T extends { css_: utility.ZionCss },
//   P extends keyof utility.ZionCss,
//   D extends T["css_"][P]
// >(props: T, property: P, defaultValue: D): NonNullable<utility.ZionCss[P]> {
//   const result = props.css_
//     ? props.css_[property]
//       ? props.css_[property]
//       : defaultValue
//     : defaultValue;
//   if (!result) throw new Error(ERROR);
//   return result;
// }

import { CSSProperties } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import {
  checkGridAreaNoCss,
  checkGridAreaWithCss_,
} from "./";

export function checkGridArea_v1<
  T extends {
    css_?: { gridArea?: CSSProperties["gridArea"] };
  }
>(props: T): FlattenSimpleInterpolation | undefined;
//////
export function checkGridArea_v1<
  T extends {
    css_: { gridArea?: CSSProperties["gridArea"] };
  }
>(props: T): FlattenSimpleInterpolation;
//////
export function checkGridArea_v1<
  T extends {
    gridArea: CSSProperties["gridArea"];
  }
>(props: T): FlattenSimpleInterpolation;
///
export function checkGridArea_v1<
  T extends {
    css_?: { gridArea?: CSSProperties["gridArea"] };
    gridArea?: CSSProperties["gridArea"];
  }
>(props: T) {
  const condition1 = props.css_ !== undefined;
  let result;
  switch (condition1) {
    case true:
      result = checkGridAreaWithCss_(
        props as {
          css_: { gridArea?: CSSProperties["gridArea"] };
        }
      );
      break;

    default:
      result = checkGridAreaNoCss(props);
      break;
  }

  return result;
}

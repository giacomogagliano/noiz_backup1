import {
  css,
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
import { BooleanSizes, Size } from "../../global";
import { checkSize } from "./checkSize";
import {
  CheckSizeOptions,
  CheckSizePossibleProps,
} from "./checkSize/checkSize_v1";
// import { BooleanSizes, CSSProps, Size } from "../global.types";

//// CHECKSIZE BOOLEANSIZE
export function checkProps_v1(
  type: "checkSize",
  props: Size
): FlattenSimpleInterpolation;

//// CHECKSIZE SIZE
export function checkProps_v1(
  type: "checkSize",
  props: BooleanSizes | Size | CSSProperties,
  options: CheckSizeOptions
): FlattenSimpleInterpolation;

///// ALL POSSIBILITIES
export function checkProps_v1(
  type: "checkSize",
  props?: CheckSizePossibleProps,
  options?: CheckSizeOptions
): FlattenSimpleInterpolation {
  let result;
  switch (type) {
    case "checkSize":
      if (!options) result = checkSize(props as Size);
      else
        result = checkSize(
          props as BooleanSizes,
          options as CheckSizeOptions
        );
      break;
    default:
      result = css``;
      break;
  }
  return result;
}

export default checkProps_v1;

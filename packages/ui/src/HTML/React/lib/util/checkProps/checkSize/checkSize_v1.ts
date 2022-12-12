import {
  CSSProperties,
  FlattenSimpleInterpolation,
} from "styled-components";
// import { BooleanSizes, CSSProps, Size } from "../../global.types";
import { checkSizeBoolean } from "../checkSize/checkSizeBoolean";
import { checkSizeRatio } from "../checkSize/checkSizeRatio";

export type FS = FlattenSimpleInterpolation;
export type CheckSizePossibleProps =
  | BooleanSizes
  | Size
  | CSSProperties;
export type CheckSizeOptions = {};
// abbreviations
type CSO = CheckSizeOptions;
type CSPP = CheckSizePossibleProps;

export function checkSize_v1(props: Size): FS;
export function checkSize_v1(
  props: BooleanSizes,
  options: CSO
): FS;
export function checkSize_v1(
  props?: CSPP,
  options?: CSO
): FS {
  let result: FS;
  switch (options) {
    case true:
      result = checkSizeBoolean(props as BooleanSizes);
      break;
    default:
      result = checkSizeRatio(props as Size);
      break;
  }
  return result;
}

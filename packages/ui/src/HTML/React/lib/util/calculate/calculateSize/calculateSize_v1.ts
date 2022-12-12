import {
  css,
  FlattenSimpleInterpolation,
} from "styled-components";

type FSI = FlattenSimpleInterpolation;
type CalculateSizeOptions = {
  base?: "height" | "width";
};

function calculateSizeOnHeight(
  ratio: number,
  height: number,
  options: CalculateSizeOptions
) {
  if (options.base === "width")
    throw new Error(
      "width was given as base, expected 'height'"
    );
  const width = height * ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
}

function calculateSizeOnWidth(
  ratio: number,
  width: number,
  options: CalculateSizeOptions
) {
  if (options.base === "height")
    throw new Error(
      "height was given as base, expected 'width'"
    );
  const height = width / ratio;
  return css`
    width: ${width.toString()}rem;
    height: ${height.toString()}rem;
  `;
}

export function calculateSize_v1(
  ratio: number,
  width: number,
  options: CalculateSizeOptions
): FSI;
export function calculateSize_v1(
  ratio: number,
  height: number
): FSI;
export function calculateSize_v1(
  ratio: number,
  base: number,
  options?: CalculateSizeOptions
): FSI {
  let result: FSI;
  switch (options) {
    case true:
      result = calculateSizeOnWidth(ratio, base, options);
      break;

    case undefined:
      result = calculateSizeOnHeight(ratio, base, {
        base: "height",
      });
      break;

    default:
      result = calculateSizeOnHeight(ratio, base, options);
      break;
  }
  return result;
}

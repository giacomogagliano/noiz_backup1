import { ZionError } from "@zionstate/zionbase/utils";

/**
 * converts an hex string to a tuple of rgb numbers
 *
 * usage
 *
 * ```js
 * hexToRgb("#00ff00") // returns [ 0, 255, 0 ]
 * hexToRgb("#0000FF") // returns [ 0, 0, 255 ]
 * ```
 */
export function hex2rgb_v1(
  hex: string
): [number, number, number] {
  var result =
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result)
    throw new ZionError(
      "there was no match with the provided string",
      hex2rgb_v1.name,
      [hex]
    );
  if (!result[1] || !result[2] || !result[3])
    throw new Error("");

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);
  return [r, g, b];
}

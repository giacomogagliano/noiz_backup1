/**
 * convert a set of rgb numbers to an hex strings
 *
 * usage:
 *
 * ```js
 * rgbToHex(0, 255, 0) // returns #00ff00
 * ```
 */
export function rgb2hex_v1(
  r: number,
  g: number,
  b: number
): string {
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
  );
}

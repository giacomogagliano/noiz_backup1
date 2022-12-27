import { ZionRegExp } from "../../../../../js/ZionRegExp";
import { guard } from "../../guard";

const captureStartEnd =
  ZionRegExp.dynCaptureBeginningAndEnd;

export interface ShortenStringOptions {
  type?:
    | "cut-in-the-middle"
    | "truncate-start"
    | "truncate-end";
  /**
   * How many character shall be left at the beginning. If
   * the type is "truncate-start" or "truncate-end",
   * only the corresponding amount will be taken into account
   */
  char_start?: number;
  char_end?: number;
  /**
   * the character which will be used to fill the trucated parts
   */
  substituteChar?: string;
  /**
   * sets how many substitue characters shall be filling the cuts
   */
  substituteCharAmount?: number;
}
export class ShortenStringOptions {}

export interface CutInTheMiddleOptions {
  type: "cut-in-the-middle";
  char_start?: number;
  char_end?: number;
  substituteChar?: string;
  substituteCharAmount?: number;
}

export interface TruncateBeginningOptions {
  type: "truncate-start";
  char_end?: number;
  substituteChar?: string;
  substituteCharAmount?: number;
}

export interface TruncateEndOptions {
  type: "truncate-end";
  char_start?: number;
  substituteChar?: string;
  substituteCharAmount?: number;
}

export interface IshortenString_v1 {
  (
    string: string,
    options: CutInTheMiddleOptions & {
      type: "truncate-start";
    }
  ): string;
  (
    string: string,
    options: TruncateBeginningOptions
  ): string;
  (
    string: string,
    options: TruncateEndOptions & {
      type: "truncate-start";
    }
  ): string;
  (string: string, options?: ShortenStringOptions): string;
}

export function shortenString_v1(
  string: string,
  options?: CutInTheMiddleOptions
): string;
export function shortenString_v1(
  string: string,
  options: TruncateBeginningOptions
): string;
export function shortenString_v1(
  string: string,
  options: TruncateEndOptions
): string;
export function shortenString_v1(
  string: string,
  options?: ShortenStringOptions
) {
  const defaultStart = 3;
  const defaultEnd = 3;
  const defaultAmount = 4;
  const defaultChar = ".";
  if (!options) {
    options = new ShortenStringOptions();
    options.type = "cut-in-the-middle";
    options.char_start = defaultStart;
    options.char_end = defaultEnd;
    options.substituteChar = defaultChar;
    options.substituteCharAmount = defaultAmount;
  }
  if (options.type === "cut-in-the-middle") {
  }
  if (options.type === "truncate-start") {
    if (!options.char_end) options.char_end = defaultStart;
    if (!options.substituteChar)
      options.substituteChar = defaultChar;
    if (!options.substituteCharAmount)
      options.substituteCharAmount = defaultAmount;
    options.char_start = 0;
  }
  if (options.type === "truncate-end") {
    if (!options.char_start)
      options.char_start = defaultEnd;
    if (!options.substituteChar)
      options.substituteChar = defaultChar;
    if (!options.substituteCharAmount)
      options.substituteCharAmount = defaultAmount;
    options.char_end = 0;
  }

  const start = guard(options.char_start);
  const end = guard(options.char_end);
  const char = guard(options.substituteChar);
  const dots = guard(options.substituteCharAmount);
  const regexp = captureStartEnd(start, end);

  // Check if the string is already short enough
  if (string.length <= start + end) {
    return string;
  }

  let filler = "";

  // Add the filler dots
  for (let i = 0; i < dots; i++) {
    filler += char;
  }

  return string.replace(regexp, `$1${filler}$2`);
}

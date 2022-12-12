import { emptyString } from "../../../Condizioni/Condizioni_v1";

export interface IsplitAt_v1 {
  (string: string, symbol: string): string[];
}

export const splitAt_v1: IsplitAt_v1 = function (
  string: string,
  symbol: string
) {
  return string.split(symbol).filter(emptyString);
};

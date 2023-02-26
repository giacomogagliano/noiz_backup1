export interface roundDecimals_v1 {
  (num: number, decimals: number): number;
}

export const roundDecimals_v1 = (
  num: number,
  decimals: number
) => {
  return Math.round(num * decimals) / decimals;
};

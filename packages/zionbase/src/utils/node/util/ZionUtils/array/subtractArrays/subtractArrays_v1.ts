export interface IsubtractArrays_v1 {
  (arr1: string[], arr2: string[]): string[];
}

export const subtractArrays_v1: IsubtractArrays_v1 = function subtractArrays(
  arr1: string[],
  arr2: string[]
) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
};

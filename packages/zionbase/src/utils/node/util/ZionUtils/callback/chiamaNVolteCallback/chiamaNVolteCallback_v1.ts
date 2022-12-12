export interface IchiamaNVolteCallback_v1 {
  <T>(volte: number, callback: Function): T[];
}

/**
 *
 * @param volte
 * @param callback
 * @returns
 */
export const chiamaNVolteCallback_v1: IchiamaNVolteCallback_v1 = function <T>(
  volte: number,
  callback: Function
): T[] {
  let array: T[] = [];
  while (volte) {
    array.push(callback());
    volte--;
  }
  return array;
};

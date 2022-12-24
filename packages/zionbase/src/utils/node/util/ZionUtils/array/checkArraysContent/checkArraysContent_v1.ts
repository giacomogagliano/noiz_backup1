export interface IcheckArraysContent_v1 {
  <T>(array: T[], nextArray: T[]): boolean;
}

/**
 * Il contenuto degli array deve essere identico anche nell'ordine
 * @param {*} array
 * @param {*} nextArray
 * @returns
 */
export const checkArraysContent_v1: IcheckArraysContent_v1 =
  function checkArraysContent<T>(
    array: T[],
    nextArray: T[]
  ): boolean {
    if (array.length !== nextArray.length) {
      return false;
    }
    let results: boolean[] = [];
    for (let index = 0; index < array.length; index++) {
      // TODO #149 @giacomogagliano errore TS
      // @ts-expect-error
      const element: T = array[index];
      // @ts-expect-error
      const elementOfNextArray: T = nextArray[index];
      if (element === elementOfNextArray) {
        results.push(true);
      } else {
        results.push(false);
      }
    }
    if (!results.includes(false)) {
      return true;
    } else {
      return false;
    }
  };

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
      const uncertain_element = nextArray[index];
      if (!uncertain_element) throw new Error("");
      const element: T = uncertain_element;
      const elementOfNextArray: T = uncertain_element;
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

import { zionUtil } from "../../../zionUtil";

export interface IextractSameElementsFromArray_v1 {
  <T extends string | number | boolean>(array1: T[], array2: T[]): T[];
}

export const extractSameElementsFromArray_v1: IextractSameElementsFromArray_v1 =
  function extractSameElementsFromArray<T extends string | boolean | number>(
    array1: T[],
    array2: T[]
  ): T[] {
    let sameValues: T[] = [];
    if (
      // controllo se gli array sono vuoti
      !zionUtil.isArrayEmpty(array1) &&
      !zionUtil.isArrayEmpty(array2)
    ) {
      // controllo se uno dei due array contiene oggetti
      if (
        //@ts-expect-error
        zionUtil.hasArrayObjectElements(array1) ||
        //@ts-expect-error
        zionUtil.hasArrayObjectElements(array2)
      ) {
        throw new Error(
          `Uno dei due array contiente oggetti, questa funziona richiede che l'array contenga valori (string, number, boolan)`
        );
      }
      for (let element2 of array2) {
        let match = array1.find(element1 => element1 === element2);
        match ? sameValues.push(match) : "no match found";
      }
      return sameValues;
    }
    throw new Error("Uno dei due array è vuoto");
  };

/**
 *
 * @param array1
 * @param array2
 * @returns
 */

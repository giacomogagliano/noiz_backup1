export interface IquantiDecimaliDopoLaVirgola_v1 {
  (number: number): number;
}

/**
 * @param number
 * @returns
 */
export const quantiDecimaliDopoLaVirgola_v1: IquantiDecimaliDopoLaVirgola_v1 =
  function quantiDecimaliDopoLaVirgola(number: number): number {
    const len = number.toString().length - 2;
    return len;
  };

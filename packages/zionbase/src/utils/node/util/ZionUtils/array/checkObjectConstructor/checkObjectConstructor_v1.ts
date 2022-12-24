export interface IcheckObjectConstructor_v1 {
  (object: object, constructor: Function): boolean;
}

/**
 * // TODO #150 @ariannatnl @giacomogagliano controllare se tutte le funzioni in questa
 * cartella hanno una descrizione @giacomogagliano @ariannatnl
 * @param object
 * @param constructor
 * @returns
 */
export const checkObjectConstructor_v1: IcheckObjectConstructor_v1 =
  function checkObjectConstructor(
    object: object,
    constructor: Function
  ): boolean {
    const oggettoUgualeConstructor =
      object.constructor === constructor;
    return oggettoUgualeConstructor;
  };

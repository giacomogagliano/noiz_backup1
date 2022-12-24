export interface IchangePosition_v1 {
  <T>(array: T[], old: number, new_pos: number):
    | T[]
    | string;
}

export const changePosition_v1: IchangePosition_v1 =
  function changePosition<T>(
    array: T[],
    old: number,
    new_pos: number
  ): T[] | string {
    // i numeri devono essere inclusi nella lunghezza
    // massima
    if (
      new_pos > array.length - 1 ||
      old > array.length ||
      new_pos < 0 ||
      old < 0
    ) {
      return "not";
    }
    // TODO #148 @giacomogagliano errore TS
    // @ts-expect-error
    array.splice(new_pos, 0, array.splice(old, 1)[0]);
    return array;
  };

/**
 *
 * @param {*[]} array Array da ricomporre
 * @param {number} old Indice di orgine dell'elemento da
 * spostare.
 * @param {number} new_pos Indice della posizione target
 * dell'elemento.
 * @returns Un array ricomposto nel quale l'elemento
 * situato precedentement all'indice di origine è situato,
 * nel risultato di ritorno, all'indice target.
 */

export interface IpopFirst_v1 {
  (a: any): any;
}

/**
 *
 * @param {*[]} array Array sorgente di lunghezza n.
 * @returns Ritorna un array ricomposto, dove il primo
 * elemeno del array è stato eliminato. L'array risultato
 * ha un lunghezza n-1.
 */
export const popFirst_v1: IpopFirst_v1 = function popFirst<T>(array: T[]): T[] {
  array.shift();
  return array;
};

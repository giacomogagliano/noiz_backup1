export interface ImassimoComuneDivisore_v1 {
  (a: number, b: number): number;
}

/**
 *
 * @param a
 * @param b
 * @returns
 */
export const massimoComuneDivisore_v1: ImassimoComuneDivisore_v1 =
  function massimoComuneDivisore(a: number, b: number): number {
    if (b < 0.0000001) return a;

    function mcdmcm(A: number, B: number) {
      var a, b, r, MCD, mcm;

      a = parseInt(A.toString());
      b = parseInt(B.toString());

      r = a % b;
      while (r != 0) {
        a = b;
        b = r;
        r = a % b;
      }

      MCD = b;
      mcm = (parseInt(A.toString()) * parseInt(B.toString())) / MCD;
      return { MCD: MCD, mcm: mcm };
    }
    return mcdmcm(a, b).MCD;
  };

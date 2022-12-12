import { IZionUtils } from "../..";

export interface IconvertDecimalToFractionString_v1 {
  (this: IZionUtils, decimale: number): string;
}

/**
 * Crea una string con il formato di frazione a partire da
 * un numero con la virgola.
 * @param decimale numero con virgola per il quale deve
 * essere creata la string.
 * @returns una string con formato frazione (0,2 => '1/5')
 */
export const convertDecimalToFractionString_v1: IconvertDecimalToFractionString_v1 =
  function (this: IZionUtils, decimale: number): string {
    let frazioneInString: string;
    if (decimale === 1) return "1";
    if (decimale >= 1)
      return "il valore passato deve essere un numero decimale!";
    const numeriDopoLaVirgola = this.quantiDecimaliDopoLaVirgola(decimale);
    let denominatore: number = Math.pow(10, numeriDopoLaVirgola);
    let numeratore: number = decimale * denominatore;
    const divisore: number = this.massimoComuneDivisore(
      numeratore,
      denominatore
    );
    numeratore /= divisore;
    denominatore /= divisore;
    frazioneInString =
      `${Math.floor(numeratore)}` + `/${Math.floor(denominatore)}`;
    return frazioneInString;
  };

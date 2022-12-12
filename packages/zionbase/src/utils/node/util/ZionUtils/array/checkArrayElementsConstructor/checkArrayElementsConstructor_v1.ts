export interface IcheckArrayElementsConstructor_v1 {
  <T>(array: T[], constructor: Function): boolean;
}

/**
 * Questa funzione controlla che tutti gli elementi di un
 * array siano della classe inviata come secondo
 * argomento.
 * @param {array} array array del quale bisogna
 * controllare gli elementi
 * @param {class} constructor la classe contro la quale
 * bisogna effettuare il check
 * @return True se tutti gli elementi matchano con il
 * costruttore fornito. False se un solo elemento non
 * matcha la classe fornita.
 */
export const checkArrayElementsConstructor_v1: IcheckArrayElementsConstructor_v1 =
  function checkArrayElementsConstructor<T>(
    array: T[],
    constructor: Function
  ): boolean {
    let risultatoControllo: boolean[] = [];
    const controllaIlConstructor = function (elemento: T) {
      //@ts-ignore
      let condizione = elemento.constructor === constructor;
      risultatoControllo.push(condizione);
      return risultatoControllo.some(el => el === false);
    };
    const controlloFinale = function (element: boolean) {
      return element === false;
    };
    array.forEach(controllaIlConstructor);
    return !risultatoControllo.some(controlloFinale);
  };

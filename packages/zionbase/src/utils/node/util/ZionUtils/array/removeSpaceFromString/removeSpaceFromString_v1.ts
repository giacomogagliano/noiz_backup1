export interface IremoveSpaceFromString_v1 {
  (type: number, string: string): string;
}

/**
 * @param type
 * @param string
 * @returns
 */
export const removeSpaceFromString_v1: IremoveSpaceFromString_v1 =
  function removeSpaceFromString(
    type: number,
    string: string
  ): string {
    // TODO #152  @giacomogagliano Migliorare inizializzazione
    let newString: string = "";
    switch (type) {
      case 1:
        method1(string);
        break;
      case 2:
        method2(string);
        break;
      case 3:
        method3(string);
        break;
      default:
        break;
    }
    function method1(string: string) {
      newString = string.replace(/ /g, "");
    }
    function method2(string: string) {
      newString = string.replace(/\s+/g, "");
    }
    function method3(string: string) {
      newString = string.split(" ").join("");
    }
    return newString;
  };

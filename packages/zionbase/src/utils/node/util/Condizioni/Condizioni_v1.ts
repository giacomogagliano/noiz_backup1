type StandardValues = string | number | boolean;

export function emptyString(el: string) {
  return el !== "";
}

export class Condizioni_v1 {
  constructor() {}
  // TODO #147 @giacomogagliano creare strategie di riconoscimento classe
  oggettoUgualeCostruttore(
    object: object,
    constructor: Function
  ) {
    return object.constructor === constructor;
  }
  proprietàName<T>(
    elemento: T extends { name: string } ? T : never,
    name: string
  ) {
    return elemento.name === name;
  }
}

export class Condizionatore {
  static #condizionatori: Condizionatore[] = [];
  #property;
  get property() {
    return this.#property;
  }
  set property(property) {
    this.#property = property;
  }
  #value: StandardValues;
  get value() {
    return this.#value;
  }
  set value(value) {
    this.#value = value;
  }
  #servedArray = [];
  get servedArray() {
    return this.#servedArray;
  }
  set servedArray(servedArray) {
    this.#servedArray = servedArray;
  }
  id;
  constructor(
    value: string | number | boolean,
    property?: string
  ) {
    this.#property = property;
    this.#value = value;
    Condizionatore.#condizionatori.push(this);
    this.id = Condizionatore.#condizionatori.length;
  }
  condizione = (oggetto: { [key: string]: string }) => {
    if (!this.property) throw Error();
    return oggetto[this.property] === this.value;
  };
  condizioneForEach = (oggetto: {
    [key: string]: string;
  }) => {
    let servedArray: object[] = this.servedArray;
    if (!this.property) throw Error();
    if (oggetto[this.property] === this.value) {
      servedArray.push(oggetto);
    }
    return this;
  };
}

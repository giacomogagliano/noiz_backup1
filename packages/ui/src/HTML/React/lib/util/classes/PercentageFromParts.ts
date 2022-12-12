import { roundDecimals } from "../calculate/";

export class PercentageFromParts {
  a: string;
  b: string;
  c: string;
  constructor(a: number, b: number, c: number) {
    const total = a + b + c;
    const aPerc = a / total;
    const bPerc = b / total;
    const aPercRounded = roundDecimals(aPerc, 100);
    const bPercRounded = roundDecimals(bPerc, 100);
    const cPercRounded = roundDecimals(
      1 - aPercRounded - bPercRounded,
      100
    );
    this.a = PercentageFromParts.#numToPerc(aPercRounded);
    this.b = PercentageFromParts.#numToPerc(bPercRounded);
    this.c = PercentageFromParts.#numToPerc(cPercRounded);
  }
  static #numToPerc(num: number) {
    const string = num.toString() + "%";
    return string;
  }
}

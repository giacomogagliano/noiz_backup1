export class RemainingPercentage {
  fixed: string;
  variable: string;
  rest: string;
  restB: string;
  constructor(num: number) {
    const fixed = 0.1;
    this.fixed = (fixed * 100).toString() + "%";
    this.variable = (num * 100).toString() + "%";
    const rest = RemainingPercentage.#remainingPercentage(
      fixed,
      num
    );
    const ratio = 0.7;
    const sectionA = ratio * rest;
    const sectionB = rest - sectionA;
    this.rest = (sectionA * 100).toString() + "%";
    this.restB = (sectionB * 100).toString() + "%";
  }
  static #remainingPercentage = (a: number, b: number) => {
    const result = 1 - a - b;
    if (result < 0) throw new Error("100% exceeded");
    return result;
  };
}

import { roundDecimals } from "../../../HTML/React/lib/util/calculate/roundDecimals";
import { validation } from "./validation";

export type ColorGeneratorOptions_v1 = {
  min: number;
  max: number;
};

export class ColorGenerator_v1 {
  #colors: number[];
  #maxColors: number = 360;
  get colors() {
    return this.#colors;
  }
  constructor(
    public options: ColorGeneratorOptions_v1 = {
      min: 0,
      max: 360,
    }
  ) {
    this.#validation(options, this.#maxColors);
    const span = this.options.max - this.options.min;
    this.#colors = [...Array(span).keys()];
  }
  *generate() {
    const random = Math.random();
    const remainingColors = this.#colors.length;
    const randomIndex = random * (remainingColors - 1);
    const scaled = this.#scale(randomIndex, 1);
    let colorsBefor: number[] = [];
    this.#colors.forEach(e => colorsBefor.push(e));
    if (this.#colors.length !== 1)
      this.#move(scaled, remainingColors - 1);
    const extracted = this.#colors.pop();
    if (!extracted) return;
    const hsl = this.#createHsl(extracted);
    if (this.#colors.length) yield hsl;
    else return hsl;
  }
  #scale(num: number, scale: number) {
    return roundDecimals(num * scale, 1);
  }
  #move(from: number, to: number, arr?: number[]) {
    if (!arr) {
      const elementToMove = this.#colors.splice(
        from,
        1
      )[0];
      if (elementToMove)
        this.#colors.splice(to, 0, elementToMove);
    }
    if (arr && arr.length) {
      const elementToMove = arr.splice(from, 1)[0];

      if (!elementToMove) return;
      const moved = arr.splice(to, 0, elementToMove);

      return moved;
    }
  }
  #createHsl(col: number) {
    return `hsl(${col}, 100%, 50%)`;
  }
  #validation = validation;
}

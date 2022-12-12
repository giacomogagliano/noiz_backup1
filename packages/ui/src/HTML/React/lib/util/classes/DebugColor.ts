import { css } from "styled-components";

export class DebugColor {
  #isDebug: boolean;
  #value;
  get value() {
    return (
      this.#isDebug &&
      css`
        background-color: ${this.#value};
      `
    );
  }
  constructor(value: string, debug: boolean) {
    this.#value = value;
    this.#isDebug = debug;
  }
}

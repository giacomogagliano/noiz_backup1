import styled, { css } from "styled-components";
import { roundDecimals } from "../../lib/util/calculate/roundDecimals";

const widthinblocks = 8;
const totalHeightInBlocks = 14;
const ratio = 4 / 5;
const heightinblocks = widthinblocks / ratio;
const heightinpercentage =
  heightinblocks / totalHeightInBlocks;
const heightInPercentage = roundDecimals(
  heightinpercentage,
  1000
);

class RemainingPercentage {
  fixed: string;
  variable: string;
  rest: string;
  constructor(num: number) {
    const fixed = 0.1;
    this.fixed = (fixed * 100).toString() + "%";
    this.variable = (num * 100).toString() + "%";
    const rest = RemainingPercentage.#remainingPercentage(
      fixed,
      num
    );
    this.rest = (rest * 100).toString() + "%";
  }
  static #remainingPercentage = (a: number, b: number) => {
    const result = 1 - a - b;
    if (result < 0) throw new Error("100% exceeded");
    return result;
  };
}

const percentage = new RemainingPercentage(
  heightInPercentage
);

const nft = css`
  background-color: transparent;
  grid-template-rows: ${percentage.fixed} ${percentage.variable} ${percentage.rest};
`;

const album = css`
  background-color: hsl(0, 0%, 93%);
  grid-template-rows: 1.4fr 6fr 1fr 1.8fr;
`;

export const CardArea = styled.div<{
  album?: boolean;
  nft?: boolean;
}>`
  height: 90%;
  width: 90%;
  display: grid;
  place-self: center;
  ${props => props.album && album}
  ${props => props.nft && nft}
`;

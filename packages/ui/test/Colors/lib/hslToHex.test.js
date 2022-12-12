import { hslToHex } from "../../built/src/lib/Color/hslToHex.js";
import { testEnvironment } from "@zionstate/test";

const { expect, log } = testEnvironment();

describe(`Method hslToHex`, () => {
  it(`it should convert the provided hsl values into an hex string`, () => {
    expect(hslToHex(0, 100, 50)).to.be.equal("#ff0000");
  });
});

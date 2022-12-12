import { rgbToHex } from "../../built/src/lib/Color/rgbToHex.js";
import { testEnvironment } from "@zionstate/test";
const { expect, log } = testEnvironment();

describe(`Method rgbToHex`, () => {
  it(`it should convert an rgb value in numbers to an hex string`, () => {
    expect(rgbToHex(0, 255, 0)).to.be.equal("#00ff00");
  });
});

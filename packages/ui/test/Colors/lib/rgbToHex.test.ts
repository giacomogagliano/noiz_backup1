import { lib } from "../../../src/Colors";
import { testEnvironment } from "@zionstate/test";

const rgbToHex = lib.rgb2hex;
const { expect, log } = testEnvironment();
log;

describe(`Method rgbToHex`, () => {
  it(`it should convert an rgb value in numbers to an hex string`, () => {
    expect(rgbToHex(0, 255, 0)).to.be.equal("#00ff00");
  });
});

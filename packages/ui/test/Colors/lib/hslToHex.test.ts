import { lib } from "../../../src/Colors";
import { testEnvironment } from "@zionstate/test";

const hslToHex = lib.hsl2hex;
const { expect, log } = testEnvironment();
log;

describe(`Method hslToHex`, () => {
  it(`it should convert the provided hsl values into an hex string`, () => {
    expect(hslToHex(0, 100, 50)).to.be.equal("#ff0000");
  });
});

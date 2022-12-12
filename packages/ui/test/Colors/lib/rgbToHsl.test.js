import { testEnvironment } from "@zionstate/test";
import { ZionError } from "@zionstate_js/error";
import { rgbToHsl } from "../../built/src/lib/Color/rgbToHsl.js";

const { expect, log } = testEnvironment();

describe(`Method rgbToHsl()`, () => {
  it(`it should convert an rgb value in number format to an hsl tuple of numbers`, () => {
    const expectedResult = [0.3333333333333333, 1, 0.5];
    expect(rgbToHsl(0, 255, 0)[0]).to.be.equal(expectedResult[0]);
    expect(rgbToHsl(0, 255, 0)[1]).to.be.equal(expectedResult[1]);
    expect(rgbToHsl(0, 255, 0)[2]).to.be.equal(expectedResult[2]);
  });
  it(`it should throw cause the value provided are not of the right type`, () => {
    const ERRORMESSAGE = "One of the arguments passed was not a number";
    expect(() => rgbToHsl("2", "2", 0)).to.throw(ERRORMESSAGE);
  });
});

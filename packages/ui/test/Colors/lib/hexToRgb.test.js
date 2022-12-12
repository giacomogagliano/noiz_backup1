import { hexToRgb } from "../../built/src/lib/Color/hexToRgb.js";
import "@zionstate/test";
import { testEnvironment } from "@zionstate/test";
const { expect, log } = testEnvironment();

describe(`Method hexToRgb()`, () => {
  it(`it should convert an hex string to an rgb tuple of numbers`, () => {
    expect(hexToRgb("#00ff00")[0]).to.be.equal([0, 255, 0][0]);
    expect(hexToRgb("#00ff00")[1]).to.be.equal([0, 255, 0][1]);
    expect(hexToRgb("#00ff00")[2]).to.be.equal([0, 255, 0][2]);
    expect(hexToRgb("#0000FF")[0]).to.be.equal([0, 0, 255][0]);
    expect(hexToRgb("#0000FF")[1]).to.be.equal([0, 0, 255][1]);
    expect(hexToRgb("#0000FF")[2]).to.be.equal([0, 0, 255][2]);
  });
});

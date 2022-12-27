import { testEnvironment } from "@zionstate/test";
import { shortenString } from "../../../../../../../src/utils/node/util/";

const { expect, log } = testEnvironment();
log;

const testString =
  "I am a super very long string that shall be cut in the middle";

describe("shortenString function is correctly exported", () => {
  const regex = /shortenString/g;
  const name = shortenString.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named shortenString", () => {
    expect(res).to.be.true;
  });
});

describe("shorten string with no options", () => {
  /// no options
  const expected = "I a....dle";
  it(`it shall return :${expected}`, () => {
    const result = shortenString(testString);
    expect(result).to.be.equal(expected);
  });
});

describe('shortenString "cut-in-the-middle" with options', () => {
  const expectedWithOptions = "I am*****ddle";
  it(`should return ${expectedWithOptions}`, () => {
    const resWithOptions = shortenString(testString, {
      type: "cut-in-the-middle",
      char_start: 4,
      char_end: 4,
      substituteChar: "*",
      substituteCharAmount: 5,
    });
    expect(resWithOptions).to.be.equal(
      expectedWithOptions
    );
  });
});

describe('shortenString "truncate-start"', () => {
  const expectedWithOptions = "....iddle";
  it(`should return ${expectedWithOptions}`, () => {
    const resWithOptions = shortenString(testString, {
      type: "truncate-start",
      char_end: 5,
    });
    expect(resWithOptions).to.be.equal(
      expectedWithOptions
    );
  });
});

describe('shortenString "truncate-end"', () => {
  const expectedWithOptions = "I a.....";
  it(`should return ${expectedWithOptions}`, () => {
    const resWithOptions = shortenString(testString, {
      type: "truncate-end",
      substituteCharAmount: 5,
    });
    expect(resWithOptions).to.be.equal(
      expectedWithOptions
    );
  });
});

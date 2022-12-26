import { testEnvironment } from "@zionstate/test";
import { stringifyBase64 } from "../../../../../../../src/utils";

const { expect, log } = testEnvironment();
expect;
log;

describe("if stringifyBase64 function is correctly exported", () => {
  const regex = /stringifyBase64/g;
  const name = stringifyBase64.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named stringifyBase64", () => {
    expect(res).to.be.true;
  });
});

describe("stringifyBase64", () => {
  const EXPECTED =
    "eyJuYW1lIjoibWUiLCJzdXJuYW1lIjoiZWxsaW90In0=";
  class Stringified {
    name = "me";
    surname = "elliot";
    stringify = stringifyBase64;
  }
  expect(new Stringified().stringify()).to.be.equal(
    EXPECTED
  );
});

import { testEnvironment } from "@zionstate/test";
import { shortenString } from "../../../../../../../src/utils/node/util/";

const { expect, log } = testEnvironment();
expect;
log;

describe("shortenString function is correctly exported", () => {
  const regex = /shortenString/g;
  const name = shortenString.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named shortenString", () => {
    expect(res).to.be.true;
  });
});

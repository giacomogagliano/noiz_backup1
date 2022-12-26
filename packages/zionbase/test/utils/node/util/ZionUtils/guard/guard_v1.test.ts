import { testEnvironment } from "@zionstate/test";
import { guard } from "../../../../../../src/utils/";

const { expect, log } = testEnvironment();
expect;
log;

// TODO #229 @giacomogagliano make tests
describe("if guard function is correctly exported", () => {
  const regex = /guard/g;
  const name = guard.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named guard", () => {
    expect(res).to.be.true;
  });
});

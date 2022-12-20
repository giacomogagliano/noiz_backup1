import { testEnvironment } from "@zionstate/test";
import { EVM } from "../../src/EVM";

const { expect, log } = testEnvironment();
expect;
log;

describe("if EVM function is correctly exported", () => {
  const regex = /EVM/g;
  const name = EVM.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named EVM", () => {
    expect(res).to.be.true;
  });
});

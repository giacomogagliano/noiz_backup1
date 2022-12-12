import { testEnvironment } from "@zionstate/test";
import { NoizContractFactories } from "../../src/EVM";

const { expect, log } = testEnvironment();
expect;
log;

describe("if NoizContractFactories function is correctly exported", () => {
  const regex = /NoizContractFactories/g;
  const name = NoizContractFactories.name;
  const res = regex.test(name);
  res;
  it("shall confirm the existance of a function named NoizContractFactories", () => {
    expect(res).to.be.true;
  });
});

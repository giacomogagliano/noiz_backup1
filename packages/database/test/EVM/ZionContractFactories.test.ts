import { testEnvironment } from "@zionstate/test";
import { ZionContractFactories_v2 as ZionContractFactories } from "../../src/EVM/Types/ZionContractFactories_v2";

const { expect, log } = testEnvironment();
expect;
log;

describe("if ZionContractFactories function is correctly exported", () => {
  const regex = /ZionContractFactories/g;
  const name = ZionContractFactories.name;
  const res = regex.test(name);
  res;
  it("shall confirm the existance of a function named ZionContractFactories", () => {
    expect(res).to.be.true;
  });
});

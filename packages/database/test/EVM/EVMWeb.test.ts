import { testEnvironment } from "@zionstate/test";
import { EVMweb } from "../../EVM";

const { expect, log } = testEnvironment();
expect;
log;

describe("if EVMWeb function is correctly exported", () => {
  const regex = /EVMweb/g;
  const name = EVMweb.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named EVMWeb", () => {
    expect(res).to.be.true;
  });
});

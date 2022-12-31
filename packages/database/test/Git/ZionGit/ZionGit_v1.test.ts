import { testEnvironment } from "@zionstate/test";
import { ZionGit } from "../../../src/Git";

const { expect, log } = testEnvironment();
expect;
log;

describe("if ZionGit function is correctly exported", () => {
  const regex = /ZionGit/g;
  const name = ZionGit.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named ZionGit", () => {
    expect(res).to.be.true;
  });
});

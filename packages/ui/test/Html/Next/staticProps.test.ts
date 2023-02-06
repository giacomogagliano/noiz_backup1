import { testEnvironment } from "@zionstate/test";
import { staticProps } from "../../../next";

const { expect, log } = testEnvironment();

expect;
log;
const getStatic = staticProps.getStatic;

describe("if staticProps function is correctly exported", () => {
  const regex = /getStatic/g;
  const name = getStatic.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named staticProps", () => {
    expect(res).to.be.true;
  });
});

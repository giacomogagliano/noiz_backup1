// @ts-nocheck

import { testEnvironment } from "@zionstate/test";
import { _variable_ } from "_variable2_";

const { expect, log } = testEnvironment();
expect;
log;

describe("if _variable_ function is correctly exported", () => {
  const regex = /_variable_/g;
  const name = _variable_.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named _variable_", () => {
    expect(res).to.be.true;
  });
});

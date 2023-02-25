import { testEnvironment } from "@zionstate/test";
import { lib } from "../../../../utils";
const calculateBits_v1 = lib.calculateBits;

const { expect, log } = testEnvironment();
expect;
log;

describe("if calculateBits_v1 function is correctly exported", () => {
  const regex = /calculateBits_v1/g;
  const name = calculateBits_v1.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named calculateBits_v1", () => {
    expect(res).to.be.true;
  });
});

describe("functionalities", () => {
  it("should return 8", () => {
    let res = calculateBits_v1("1");
    expect(res).to.be.equal(8);
  });
  it("should return 32", () => {
    let res = calculateBits_v1("1abc");
    expect(res).to.be.equal(32);
  });
  it("should return 1", () => {
    let res = calculateBits_v1(1);
    expect(res).to.be.equal(1);
  });
  it("should return 4", () => {
    let res = calculateBits_v1(8);
    expect(res).to.be.equal(4);
  });
});

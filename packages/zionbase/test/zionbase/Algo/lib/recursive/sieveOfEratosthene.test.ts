import { testEnvironment } from "@zionstate/test";
import { sieveOfEratosthenes } from "../../../../../src/zionbase/Algo/lib/recursive/sieveOfEratosthenes";

const { expect, log } = testEnvironment();
expect;
log;

describe("if sieveOfEratosthene function is correctly exported", () => {
  const regex = /sieveOfEratosthenes/g;
  const name = sieveOfEratosthenes.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named sieveOfEratosthene", () => {
    expect(res).to.be.true;
  });
  it("should return the primal number between 0 and 100", () => {
    const expRes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
      47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ];
    const res = sieveOfEratosthenes(100);
    const testIdx1 = 0;
    const testIdx2 = 3;
    const testIdx3 = 7;
    const testIdx4 = 11;
    const test1 = res[testIdx1] === expRes[testIdx1];
    const test2 = res[testIdx2] === expRes[testIdx2];
    const test3 = res[testIdx3] === expRes[testIdx3];
    const test4 = res[testIdx4] === expRes[testIdx4];
    expect(test1).to.be.true;
    expect(test2).to.be.true;
    expect(test3).to.be.true;
    expect(test4).to.be.true;
  });
});

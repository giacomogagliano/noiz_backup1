import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const RYB = classes.RYB;

describe("if RYB function is correctly exported", () => {
  const regex = /RYB/g;
  const name = RYB.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named RYB", () => {
    expect(res).to.be.true;
  });
});

describe("Class functionality", () => {
  const cym = new RYB(10);
  const blue = cym.blue[0];
  const test = blue === "hsl(250, 100%, 0%)";
  it("should create an hsl color", () => {
    expect(test).to.be.true;
  });
});

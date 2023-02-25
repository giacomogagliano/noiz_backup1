import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const CYM = classes.CYM;

describe("if CYM function is correctly exported", () => {
  const regex = /CYM/g;
  const name = CYM.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named CYM", () => {
    expect(res).to.be.true;
  });
});

describe("Class functionality", () => {
  const cym = new CYM(10);
  const blue = cym.blue[0];
  const test = blue === "hsl(250, 100%, 0%)";
  it("should create an hsl color", () => {
    expect(test).to.be.true;
  });
});

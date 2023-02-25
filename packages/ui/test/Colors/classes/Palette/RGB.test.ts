import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const RGB = classes.RGB;

describe("if RGB function is correctly exported", () => {
  const regex = /RGB/g;
  const name = RGB.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named RGB", () => {
    expect(res).to.be.true;
  });
});

describe("Class functionality", () => {
  const cym = new RGB(10);
  const blue = cym.blue[0];
  const test = blue === "hsl(250, 100%, 0%)";
  it("should create an hsl color", () => {
    expect(test).to.be.true;
  });
});

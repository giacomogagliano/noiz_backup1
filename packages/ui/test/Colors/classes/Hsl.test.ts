import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../colors-entrypoint";

const Hsl = classes.Hsl;

const { expect, log } = testEnvironment();
expect;
log;

describe("if Hsl function is correctly exported", () => {
  const regex = /Hsl/g;
  const name = Hsl.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named Hsl", () => {
    expect(res).to.be.true;
  });
});

describe("Class functionalities", () => {
  const hsl = new Hsl({
    hue: "30",
    luminance: "50",
    saturation: "100",
  });
  const test = hsl.value === "hsl(30, 100, 50)";
  log("", test);
  log("", hsl);
});

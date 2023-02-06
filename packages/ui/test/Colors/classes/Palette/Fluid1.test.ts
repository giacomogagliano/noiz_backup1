import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const Fluid1 = classes.Fluid1;

describe("if Fluid1 function is correctly exported", () => {
  const regex = /Fluid1/g;
  const name = Fluid1.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named Fluid1", () => {
    expect(res).to.be.true;
  });
});

describe(`Class functionalities: this class creates a color palette.
  Colors included in this class are "orange","blue", "blue_green", "green" and "red_purple"
`, () => {
  const fluid = new Fluid1(
    "hsl(23, 100%, 50%)",
    "hsl(203, 100%, 52%)",
    "hsl(168, 100%, 50%)",
    "hsl(132, 100%, 50%)",
    "hsl(312, 100%, 50%)"
  );
  const color1 = fluid.blue;
  const color2 = fluid.blue_green;
  const color3 = fluid.orange;
  const color4 = fluid.green;
  const color5 = fluid.red_purple;
  const test1 = typeof color1 === "string";
  const test2 = typeof color2 === "string";
  const test3 = typeof color3 === "string";
  const test4 = typeof color4 === "string";
  const test5 = typeof color5 === "string";
  expect(test1).to.be.true;
  expect(test2).to.be.true;
  expect(test3).to.be.true;
  expect(test4).to.be.true;
  expect(test5).to.be.true;
});

import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const Fluid2 = classes.Fluid2;

describe("if Fluid2 function is correctly exported", () => {
  const regex = /Fluid2/g;
  const name = Fluid2.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named Fluid2", () => {
    expect(res).to.be.true;
  });
});

describe(`Class functionalities: this class creates a color palette.
  Colors included in this class are "blue","purple","red_purple", "green", "blue_green"
`, () => {
  const fluid = new Fluid2(
    "hsl(244, 100%, 50%)",
    "hsl(273, 100%, 50%)",
    "hsl(336, 100%, 50%)",
    "hsl(94, 100%, 50%)",
    "hsl(156, 100%, 50%)"
  );
  const color1 = fluid.blue;
  const color2 = fluid.purple;
  const color3 = fluid.red_purple;
  const color4 = fluid.green;
  const color5 = fluid.blue_green;
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

import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../../colors-entrypoint";

const { expect, log } = testEnvironment();
expect;
log;
const Fluid3 = classes.Fluid3;

describe("if Fluid3 function is correctly exported", () => {
  const regex = /Fluid3/g;
  const name = Fluid3.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named Fluid3", () => {
    expect(res).to.be.true;
  });
});

describe(`Class functionalities: this class creates a color palette.
  Colors included in this class are "orange","blue", "blue_green","green","red"
`, () => {
  const fluid = new Fluid3(
    "hsl(29, 100%, 50%)",
    "hsl(209, 100%, 50%)",
    "hsl(192, 100%, 50%)",
    "hsl(172, 100%, 50%)",
    "hsl(352, 100%, 50%)"
  );
  const color1 = fluid.orange;
  const color2 = fluid.blue;
  const color3 = fluid.blue_green;
  const color4 = fluid.green;
  const color5 = fluid.red;
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

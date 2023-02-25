import { testEnvironment } from "@zionstate/test";
import { classes } from "../../../colors-entrypoint";

const ColorGenerator = classes.ColorGenerator;

const { expect, log } = testEnvironment();
expect;
log;

describe("if ColorGenerator function is correctly exported", () => {
  const regex = /ColorGenerator/g;
  const name = ColorGenerator.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named ColorGenerator", () => {
    expect(res).to.be.true;
  });
});

describe("class functionality", () => {
  const gen = new ColorGenerator({ max: 100, min: 20 });
  gen.colors;
  const length = gen.colors.length;
  it("should show an array with 80 colors", () => {
    expect(length).to.be.equal(80);
  });
  const colorsBeforePick = [...gen.colors];
  it("should generate a rando hsl color, in a string format ", () => {
    const res = gen.generate().next();
    const string = res.value;
    if (!string) throw new Error("there was a problem");
    const test = typeof string === "string";
    expect(test).to.be.true;
  });
  const res = gen.generate().next();
  if (!res.value) throw new Error("there was a problem");
  const firstSplit = res.value.split(",")[0];
  if (!firstSplit) throw new Error("there was a problem");
  const generatedColor = firstSplit.split("(")[1];
  it("should have choosen a color amongst those provided", () => {
    const test_presence = colorsBeforePick.includes(
      new Number(generatedColor).valueOf()
    );
    expect(test_presence).to.be.true;
  });
  it("should have delete the chose color from the list", () => {
    const colors = gen.colors;
    const test_absence = colors.includes(
      new Number(generatedColor).valueOf()
    );
    expect(test_absence).to.be.false;
  });
});

import { testEnvironment } from "@zionstate/test";
import { guard } from "../../../../../../src/utils/";

const { expect, log } = testEnvironment();
expect;
log;

describe("if guard function is correctly exported", () => {
  const regex = /guard/g;
  const name = guard.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named guard", () => {
    expect(res).to.be.true;
  });
});

describe("makeErrorGuard()", () => {
  it("shall throw an error cause the data is undefined", () => {
    const data = undefined;
    expect(() => guard(data)).to.throw(
      "the passed data is: undefined"
    );
  });
  it("shall throw an error cause the data is null", () => {
    const data = null;
    expect(() => guard(data)).to.throw(
      "the passed data is: null"
    );
  });
  it("shall return the number of the passed data as NonNullable", () => {
    const data = 1;
    expect(guard(data)).to.be.equal(data);
  });
  it("shall return the string value", () => {
    const data = "string";
    expect(guard(data)).to.be.equal(data);
  });
  it("shall return the value of the boolean", () => {
    const data = true;
    expect(guard(data)).to.be.equal(data);
  });
});

describe("dataGuard", () => {
  const obj = { data: undefined };
  const ERROR = "custom error";
  it(`should throw with this error: ${ERROR}`, () => {
    expect(() => guard(obj.data, ERROR)).to.throw(ERROR);
  });
});

describe("keyInObjectGuard", () => {
  it("should return the object", () => {
    interface TestObject {
      name?: string;
    }
    const obj: TestObject = { name: "ciao" };
    const retobg = guard(obj, "name") as TestObject;
    expect(retobg.name).to.be.equal(obj.name);
  });
  it("should throw cause the key is undefined", () => {
    interface TestObject {
      name?: string;
    }
    const obj: TestObject = {};
    guard(obj, "name");
  });
});

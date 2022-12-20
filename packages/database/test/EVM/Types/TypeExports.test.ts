import { testEnvironment } from "@zionstate/test";
import type { AbiInput } from "../../../src/EVM/Types";

const obj: AbiInput = { name: "name", type: "type" };

const { expect, log } = testEnvironment();
expect;
log;

describe("AbiInput type", () => {
  it("should import the type and facilitate the creation of objects", () => {
    expect(obj.name).to.be.equal("name");
    expect(obj.type).to.be.equal("type");
  });
});

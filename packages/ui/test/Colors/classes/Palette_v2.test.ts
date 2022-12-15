import { testEnvironment } from "@zionstate/test";
import { Palette_v2 } from "../../../src/Colors/classes/Palette/Palette_v2";

const { expect, log } = testEnvironment();

expect;
log;

describe("", () => {
  const palette = new Palette_v2(20);
  log("palette", palette.primary2[20]);
});

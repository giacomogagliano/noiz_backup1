import { testEnvironment } from "@zionstate/test";
import { Palette_v2 } from "../../../src/Colors/classes/Palette/Palette_v2";

const { expect, log } = testEnvironment();

expect;
log;

describe("Creazione palette RGB", () => {
  const coloreBase = 20;
  const EXPECTED_PRIMARY1 = 20;
  const EXPECTED_PRIMARY2 = 20 + 120;
  const EXPECTED_PRIMARY3 = 20 + 240;
  const EXPECTED_SECONDARY1 = 20 + 60;
  const EXPECTED_SECONDARY2 = 20 + 60 + 120;
  const EXPECTED_SECONDARY3 = 20 + 60 + 240;
  const palette = new Palette_v2(coloreBase);
  const primary1 = palette.primary1.value;
  const primary2 = palette.primary2.value;
  const primary3 = palette.primary3.value;
  const secondary1 = palette.secondary1.value;
  const secondary2 = palette.complementary.value;
  const secondary3 = palette.secondary3.value;
  const EXPECTED_BRIGHTNESS = 40;
  const primary1_40 = palette.primary1[40];
  it(`dovrebbe tornare questo valore:'hsl(${EXPECTED_PRIMARY1}, 100%, 50%)'`, () => {
    expect(primary1).to.be.equal(
      `hsl(${EXPECTED_PRIMARY1}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hsl(${EXPECTED_PRIMARY2}, 100%, 50%)'`, () => {
    expect(primary2).to.be.equal(
      `hsl(${EXPECTED_PRIMARY2}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hslhsl(${EXPECTED_PRIMARY3}, 100%, 50%)'`, () => {
    expect(primary3).to.be.equal(
      `hsl(${EXPECTED_PRIMARY3}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hslhsl(${EXPECTED_SECONDARY1}, 100%, 50%)'`, () => {
    expect(secondary1).to.be.equal(
      `hsl(${EXPECTED_SECONDARY1}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hslhsl(${EXPECTED_SECONDARY2}, 100%, 50%)'`, () => {
    expect(secondary2).to.be.equal(
      `hsl(${EXPECTED_SECONDARY2}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hslhsl(${EXPECTED_SECONDARY3}, 100%, 50%)'`, () => {
    expect(secondary3).to.be.equal(
      `hsl(${EXPECTED_SECONDARY3}, 100%, 50%)`
    );
  });
  it(`dovrebbe tornare questo valore:'hsl(${EXPECTED_PRIMARY1}, 100%, ${EXPECTED_BRIGHTNESS}%)'`, () => {
    expect(primary1_40).to.be.equal(
      `hsl(${EXPECTED_PRIMARY1}, 100%, ${EXPECTED_BRIGHTNESS}%)`
    );
  });
});

describe("Test per metodo setBrightness", () => {
  const COLOR = 10;
  const BRIGHTNESS = 20;
  const palette = new Palette_v2(COLOR, "ryb");
  palette.setBrightness(BRIGHTNESS);
  const EXPECTED_STRING = `hsl(${COLOR}, 100%, ${BRIGHTNESS}%)`;
  it(`dovrebbe ritornare ${EXPECTED_STRING}`, () => {
    expect(palette.primary1.value).to.be.equal(
      EXPECTED_STRING
    );
  });
});

describe("", () => {
  const COLOR = 20;
  const SATURATION = 40;
  const EXPECTED_STRING = `hsl(${
    COLOR + 60
  }, ${SATURATION}%, 50%)`;
  const palette = new Palette_v2(COLOR, "cym");
  palette.setSaturation(SATURATION);
  it(`dovrebbe ritornare questo valore: ${EXPECTED_STRING}`, () => {
    expect(palette.primary1.value).to.be.equal(
      EXPECTED_STRING
    );
  });
});

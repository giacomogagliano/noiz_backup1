export interface Palette_v2Props {}

interface ColorWheel {
  primary: [number, number, number];
  secondary: [number, number, number];
  tertiary: [
    number,
    number,
    number,
    number,
    number,
    number
  ];
}
class ColorWheel {}

export interface ColorWheels {
  rgb: ColorWheel;
  cym: ColorWheel;
  ryb: ColorWheel;
}
export class ColorWheels {}

export const DegreesTypes = {
  [0]: 0,
  [10]: 10,
  [20]: 20,
  [30]: 30,
  [40]: 40,
  [50]: 50,
  [60]: 60,
  [70]: 70,
  [80]: 80,
  [90]: 90,
  [100]: 100,
} as const;

type DegreesKeys = keyof typeof DegreesTypes;
type StringDegrees = { [props in DegreesKeys]: string };

export interface HslProps {
  color: number;
  saturation: number;
  brightness: number;
}

export interface Hsl extends StringDegrees {
  setColor(cl: number): this;
  setSaturation(st: number): this;
  setBrightness(br: number): this;
}
export class Hsl {
  #color: number;
  #saturation: number;
  #brightness: number;
  get color() {
    return this.#color;
  }
  get saturation() {
    return this.#saturation;
  }

  get brightness() {
    return this.#brightness;
  }
  get value() {
    return `hsl(${this.color}, ${this.saturation}%, ${this.brightness}%)`;
  }
  constructor({
    brightness,
    color,
    saturation,
  }: HslProps) {
    this.#brightness = brightness;
    this.#color = color;
    this.#saturation = saturation;
    for (let key in DegreesTypes) {
      const newBirghtness =
        DegreesTypes[key as unknown as DegreesKeys];
      this[
        key as unknown as DegreesKeys
      ] = `hsl(${this.color}, ${this.saturation}%, ${newBirghtness}%)`;
    }
  }

  setColor(cl: number) {
    this.#color = cl;
    return this;
  }

  setSaturation(sr: number) {
    this.#saturation = sr;
    return this;
  }

  setBrightness(br: number) {
    this.#brightness = br;
    return this;
  }
}

export interface Palette_v2 {
  primary1: Hsl;
  primary2: Hsl;
  primary3: Hsl;
  secondary1: Hsl;
  complementary: Hsl;
  secondary3: Hsl;
  tertiary1: Hsl;
  tertiary2: Hsl;
  tertiary3: Hsl;
  tertiary4: Hsl;
  tertiary5: Hsl;
  tertiary6: Hsl;
  setColor(cl: number): this;
  setSaturation(sat: number): this;
  setBrightness(bright: number): this;
}

export class Palette_v2 {
  #saturation = 100;
  #brightness = 50;
  colorWheels: ColorWheels = {
    rgb: {
      primary: [0, 120, 240],
      secondary: [60, 180, 300],
      tertiary: [30, 90, 150, 210, 270, 330],
    },
    cym: {
      primary: [60, 180, 300],
      secondary: [120, 240, 0],
      tertiary: [90, 150, 210, 270, 330, 30],
    },
    ryb: {
      primary: [0, 60, 240],
      secondary: [30, 180, 270],
      tertiary: [15, 45, 120, 210, 255, 315],
    },
  };
  constructor(
    color: number,
    wheel: keyof ColorWheels = "rgb"
  ) {
    const standard = {
      brightness: this.#brightness,
      saturation: this.#saturation,
    };
    const primary = this.colorWheels[wheel].primary;
    const secondary = this.colorWheels[wheel].secondary;
    const tertiary = this.colorWheels[wheel].tertiary;
    const p1Color = color + primary[0];
    const p2Color = color + primary[1];
    const p3Color = color + primary[2];
    const s1Color = color + secondary[0];
    const s2Color = color + secondary[1];
    const s3Color = color + secondary[2];
    const t1Color = color + tertiary[0];
    const t2Color = color + tertiary[1];
    const t3Color = color + tertiary[2];
    const t4Color = color + tertiary[3];
    const t5Color = color + tertiary[4];
    const t6Color = color + tertiary[5];
    const p1 = { color: p1Color, ...standard };
    const p2 = { color: p2Color, ...standard };
    const p3 = { color: p3Color, ...standard };
    const s1 = { color: s1Color, ...standard };
    const c = { color: s2Color, ...standard };
    const s3 = { color: s3Color, ...standard };
    const t1 = { color: t1Color, ...standard };
    const t2 = { color: t2Color, ...standard };
    const t3 = { color: t3Color, ...standard };
    const t4 = { color: t4Color, ...standard };
    const t5 = { color: t5Color, ...standard };
    const t6 = { color: t6Color, ...standard };
    this.primary1 = new Hsl(p1);
    this.primary2 = new Hsl(p2);
    this.primary3 = new Hsl(p3);
    this.secondary1 = new Hsl(s1);
    this.complementary = new Hsl(c);
    this.secondary3 = new Hsl(s3);
    this.tertiary1 = new Hsl(t1);
    this.tertiary2 = new Hsl(t2);
    this.tertiary3 = new Hsl(t3);
    this.tertiary4 = new Hsl(t4);
    this.tertiary5 = new Hsl(t5);
    this.tertiary6 = new Hsl(t6);
  }
  setSaturation(sat: number) {
    this.#saturation = sat;
    this.primary1.setSaturation(this.#saturation);
    this.primary2.setSaturation(this.#saturation);
    this.primary3.setSaturation(this.#saturation);
    this.secondary1.setSaturation(this.#saturation);
    this.complementary.setSaturation(this.#saturation);
    this.secondary3.setSaturation(this.#saturation);
    this.tertiary1.setSaturation(this.#saturation);
    this.tertiary2.setSaturation(this.#saturation);
    this.tertiary3.setSaturation(this.#saturation);
    this.tertiary4.setSaturation(this.#saturation);
    this.tertiary5.setSaturation(this.#saturation);
    this.tertiary6.setSaturation(this.#saturation);
    return this;
  }
  setBrightness(bright: number) {
    this.#brightness = bright;
    this.primary1.setBrightness(this.#brightness);
    this.primary2.setBrightness(this.#brightness);
    this.primary3.setBrightness(this.#brightness);
    this.secondary1.setBrightness(this.#brightness);
    this.complementary.setBrightness(this.#brightness);
    this.secondary3.setBrightness(this.#brightness);
    this.tertiary1.setBrightness(this.#brightness);
    this.tertiary2.setBrightness(this.#brightness);
    this.tertiary3.setBrightness(this.#brightness);
    this.tertiary4.setBrightness(this.#brightness);
    this.tertiary5.setBrightness(this.#brightness);
    this.tertiary6.setBrightness(this.#brightness);
    return this;
  }
}

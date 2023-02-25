import { Palette } from "..";
import { ColorWheels } from "../Palette_v2";

export class PrimaryColors_v1 extends Palette {
  constructor(
    color: number,
    wheel: keyof ColorWheels = "rgb"
  ) {
    super(color, wheel);
  }
}
export class SecondaryColors_v1 extends Palette {
  constructor(
    color: number,
    wheel: keyof ColorWheels = "rgb"
  ) {
    super(color, wheel);
  }
}
export class TertiaryColors_v1 extends Palette {
  constructor(
    color: number,
    wheel: keyof ColorWheels = "rgb"
  ) {
    super(color, wheel);
  }
}

export class ColorWheel_v1 {
  constructor(
    public primary: PrimaryColors_v1,
    public secondary: SecondaryColors_v1,
    public tertiary: TertiaryColors_v1
  ) {}
}

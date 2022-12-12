import { Palette } from "..";

export class PrimaryColors_v1 extends Palette {
  constructor() {
    super();
  }
}
export class SecondaryColors_v1 extends Palette {
  constructor() {
    super();
  }
}
export class TertiaryColors_v1 extends Palette {
  constructor() {
    super();
  }
}

export class ColorWheel_v1 {
  constructor(
    public primary: PrimaryColors_v1,
    public secondary: SecondaryColors_v1,
    public tertiary: TertiaryColors_v1
  ) {}
}

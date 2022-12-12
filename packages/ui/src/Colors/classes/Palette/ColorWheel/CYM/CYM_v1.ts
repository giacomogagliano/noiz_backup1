import {
  ColorWheel,
  PrimaryColors,
  SecondaryColors,
  TertiaryColors,
} from "../";

export class CYMPrimary_v1 extends PrimaryColors {
  constructor(
    public cyan: string,
    public yellow: string,
    public magenta: string
  ) {
    super();
  }
}

export class CYMSecondary_v1 extends SecondaryColors {
  constructor(
    public green: string,
    public blue: string,
    public red: string
  ) {
    super();
  }
}

export class CYMTertiary_v1 extends TertiaryColors {
  constructor(
    public yellow_green: string,
    public cyan_green: string,
    public cyan_blue: string,
    public magenta_blue: string,
    public magenta_red: string,
    public yellow_red: string
  ) {
    super();
  }
}

export class CYM_v1 extends ColorWheel {
  constructor(
    public yellow: string = "hsl(60, 100%, 50%)",
    public yellow_green: string = "hsl(90, 100%, 50%)",
    public green: string = "hsl(120, 100%, 50%)",
    public cyan_green: string = "hsl(150, 100%, 50%)",
    public cyan: string = "hsl(180, 100%, 50%)",
    public cyan_blue: string = "hsl(210, 100%, 50%)",
    public blue: string = "hsl(240, 100%, 50%)",
    public magenta_blue: string = "hsl(270, 100%, 50%)",
    public magenta: string = "hsl(300, 100%, 50%)",
    public magenta_red: string = "hsl(330, 100%, 50%)",
    public red: string = "hsl(0, 100%, 50%)",
    public yellow_red: string = "hsl(30, 100%, 50%)"
  ) {
    super(
      new CYMPrimary_v1(cyan, yellow, magenta),
      new CYMSecondary_v1(green, blue, red),
      new CYMTertiary_v1(
        yellow_green,
        cyan_green,
        cyan_blue,
        magenta_blue,
        magenta_red,
        yellow_green
      )
    );
  }
}

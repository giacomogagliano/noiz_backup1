import {
  PrimaryColors,
  SecondaryColors,
  TertiaryColors,
  ColorWheel,
} from "..";

export class RGBPrimary_v1 extends PrimaryColors {
  constructor(
    public red: string,
    public green: string,
    public blue: string
  ) {
    super();
  }
}

export class RGBSecondary_v1 extends SecondaryColors {
  constructor(
    public yellow: string,
    public cyan: string,
    public magenta: string
  ) {
    super();
  }
}

export class RGBTertiary_v1 extends TertiaryColors {
  constructor(
    public red_yellow: string,
    public green_yellow: string,
    public green_cyan: string,
    public blue_cyan: string,
    public blue_magenta: string,
    public red_magenta: string
  ) {
    super();
  }
}

export class RGB_v1 extends ColorWheel {
  constructor(
    public red: string = "hsl(0, 100%, 50%)",
    public red_yellow: string = "hsl(30, 100%, 50%)",
    public yellow: string = "hsl(60, 100%, 50%)",
    public green_yellow: string = "hsl(90, 100%, 50%)",
    public green: string = "hsl(120, 100%, 50%)",
    public green_cyan: string = "hsl(150, 100%, 50%)",
    public cyan: string = "hsl(180, 100%, 50%)",
    public blue_cyan: string = "hsl(210, 100%, 50%)",
    public blue: string = "hsl(240, 100%, 50%)",
    public blue_magenta: string = "hsl(270, 100%, 50%)",
    public magenta: string = "hsl(300, 100%, 50%)",
    public red_magenta: string = "hsl(330, 100%, 50%)"
  ) {
    super(
      new RGBPrimary_v1(red, green, blue),
      new RGBSecondary_v1(yellow, cyan, magenta),
      new RGBTertiary_v1(
        red_yellow,
        green_yellow,
        green_cyan,
        blue_cyan,
        blue_magenta,
        red_magenta
      )
    );
  }
}

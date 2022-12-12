import {
  ColorWheel,
  PrimaryColors,
  SecondaryColors,
  TertiaryColors,
} from "..";

export class RYBPrimary_v1 extends PrimaryColors {
  constructor(
    public red: string,
    public yellow: string,
    public blue: string
  ) {
    super();
  }
}

export class RYBSecondary_v1 extends SecondaryColors {
  constructor(
    public orange: string,
    public green: string,
    public purple: string
  ) {
    super();
  }
}
export class RYBTertiary_v1 extends TertiaryColors {
  constructor(
    public red_orange: string,
    public yellow_orange: string,
    public yellow_green: string,
    public blue_green: string,
    public blue_purple: string,
    public red_purple: string
  ) {
    super();
  }
}

export class RYB_v1 extends ColorWheel {
  constructor(
    public red: string = "hsl(5, 99%, 53%)",
    public red_orange: string = "hsl(21, 98%, 51%)",
    public orange: string = "hsl(36, 98%, 50%)",
    public yellow_orange: string = "hsl(47, 97%, 55%)",
    public yellow: string = "hsl(60, 99%, 60%)",
    public yellow_green: string = "hsl(73, 67%, 52%)",
    public green: string = "hsl(95, 56%, 44%)",
    public blue_green: string = "hsl(197, 49%, 40%)",
    public blue: string = "hsl(224, 99%, 50%)",
    public blue_purple: string = "hsl(251, 71%, 49%)",
    public purple: string = "hsl(286, 99%, 35%)",
    public red_purple: string = "hsl(334, 81%, 42%)"
  ) {
    super(
      new RYBPrimary_v1(red, yellow, blue),
      new RYBSecondary_v1(orange, green, purple),
      new RYBTertiary_v1(
        red_orange,
        yellow_orange,
        yellow_green,
        blue_green,
        blue_purple,
        red_purple
      )
    );
  }
}

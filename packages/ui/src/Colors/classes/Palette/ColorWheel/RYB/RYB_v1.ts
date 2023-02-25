export class RYBPrimary_v1 {
  constructor(
    public red: string,
    public yellow: string,
    public blue: string
  ) {}
}

export class RYBSecondary_v1 {
  constructor(
    public orange: string,
    public green: string,
    public purple: string
  ) {}
}
export class RYBTertiary_v1 {
  constructor(
    public red_orange: string,
    public yellow_orange: string,
    public yellow_green: string,
    public blue_green: string,
    public blue_purple: string,
    public red_purple: string
  ) {}
}

export class RYB_v1 {
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
  ) {}
}

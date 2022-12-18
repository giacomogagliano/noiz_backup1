import { Palette_v1 as Palette } from "..";

export class Rainbow_v1 extends Palette {
  constructor(
    public red = "hsl(0, 100%, 50%)",
    public orange = "hsl(26, 100%, 50%)",
    public yellow = "hsl(60, 100%, 50%)",
    public green = "hsl(120, 100%, 50%)",
    public blue = "hsl(209, 100%, 50%)",
    public indigo = "hsl(263, 100%, 50%)",
    public violet = "hsl(270, 100%, 50%)"
  ) {
    super();
  }
}

import {
  colors_,
  Palette_v1 as Palette,
} from "../../Palette";

export type Fluid1Type_v1 = Pick<
  colors_,
  "orange" | "blue" | "blue_green" | "green" | "red_purple"
>;

export class Fluid1_v1
  extends Palette
  implements Fluid1Type_v1
{
  constructor(
    public orange: string,
    public blue: string,
    public blue_green: string,
    public green: string,
    public red_purple: string
  ) {
    super();
  }
}

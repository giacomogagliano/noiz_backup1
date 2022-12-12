import {
  colors_,
  Palette_v1 as Palette,
} from "../../Palette";

export type Fluid2Type_v1 = Pick<
  colors_,
  "blue" | "purple" | "red_purple" | "green" | "blue_green"
>;

export class Fluid2_v1
  extends Palette
  implements Fluid2Type_v1
{
  constructor(
    public blue: string,
    public purple: string,
    public red_purple: string,
    public green: string,
    public blue_green: string
  ) {
    super();
  }
}

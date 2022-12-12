import { colors_, Palette } from "../../Palette";

export type Fluid3Type_v1 = Pick<
  colors_,
  "orange" | "blue" | "blue_green" | "green" | "red"
>;

export class Fluid3_v1
  extends Palette
  implements Fluid3Type_v1
{
  constructor(
    public orange: string,
    public blue: string,
    public blue_green: string,
    public green: string,
    public red: string
  ) {
    super();
  }
}

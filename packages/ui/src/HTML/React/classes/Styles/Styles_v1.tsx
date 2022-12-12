import {
  Area,
  Button,
  Circle,
  Div,
  H1,
  Img,
  Input,
  P,
  Path,
} from "../../";

export type Styles_v1Data = "Styles_v1Data";
export type Styles_v1Booleans = "Styles_v1Booleans";
export type Styles_v1Props = "Styles_v1Props";
export type Styles_v1ClassProps = "Styles_v1ClassProps";
export type Styles_v1AsChild = "Styles_v1AsChild";

export interface IStyles_v1 {
  name: string;
  Area: typeof Area;
  Button: typeof Button;
  Circle: typeof Circle;
  Div: typeof Div;
  H1: typeof H1;
  Img: typeof Img;
  Input: typeof Input;
  P: typeof P;
  Path: typeof Path;
}

export interface Styles_v1 {
  name: string;
  Area: typeof Area;
  Button: typeof Button;
  Circle: typeof Circle;
  Div: typeof Div;
  H1: typeof H1;
  Img: typeof Img;
  Input: typeof Input;
  P: typeof P;
  Path: typeof Path;
}

export class Styles_v1 implements IStyles_v1 {
  Area = Area;
  Button = Button;
  Circle = Circle;
  Div = Div;
  H1 = H1;
  Img = Img;
  Input = Input;
  P = P;
  Path = Path;
  constructor(name: string) {
    this.name = name;
  }
}

export type StylesCtor = {
  new (name: string): Styles_v1;
};

export const Styles: StylesCtor = Styles_v1;

export const styles = new Styles("Original-Stylee");

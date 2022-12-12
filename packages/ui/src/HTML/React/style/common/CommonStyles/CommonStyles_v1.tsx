import { ComponentType } from "react";
import {
  FlattenSimpleInterpolation,
  StyledComponent,
} from "styled-components";
import { Path } from "../../";
import {
  filled as f,
  filled_height as fh,
  filled_width as fw,
} from "../fillable";
import { sixty as sx } from "../position";

class StyleTuple<S extends string = string> {
  constructor(
    public a: S extends string ? S : never,
    public b: FlattenSimpleInterpolation
  ) {}
}

class ElementTuple<
  S extends
    | keyof JSX.IntrinsicElements
    | ComponentType<any> =
    | keyof JSX.IntrinsicElements
    | ComponentType<any>
> {
  constructor(
    public a: S,
    public b: StyledComponent<S, any>
  ) {}
}

const FILLED = "filled";
const filled = new StyleTuple(FILLED, f);

const FILLED_WIDTH = "filled_width";
const filled_width = new StyleTuple(FILLED_WIDTH, fh);

const FILLED_HEIGHT = "filled_height";
const filled_height = new StyleTuple(FILLED_HEIGHT, fw);

const SIXTY = "sixty";
const sixty = new StyleTuple(SIXTY, sx);

const path = new ElementTuple("path", Path);

type getFromStyleTuple<T> = T extends StyleTuple<infer X>[]
  ? X
  : never;

type getFromElementTuple<T> = T extends ElementTuple<
  infer X
>[]
  ? X
  : never;

interface ICommon {
  commonStyles: StyleTuple[];
}

export class CommonStyles_v1 implements ICommon {
  commonStyles = [
    filled,
    filled_width,
    filled_height,
    sixty,
  ];
  elements = [path];
  constructor() {}
  getCommonStyle<
    T extends getFromStyleTuple<typeof this.commonStyles>
  >(string: T) {
    const style = this.commonStyles.find(
      style => style.a === string
    );
    if (!style) throw new Error("");
    return style.b;
  }
  getElement<
    T extends getFromElementTuple<typeof this.elements>
  >(style: T) {
    const element = this.elements.find(
      element => element.a === style
    );
    if (!element)
      throw new Error("No element matching the string");
    return element.b;
  }
}

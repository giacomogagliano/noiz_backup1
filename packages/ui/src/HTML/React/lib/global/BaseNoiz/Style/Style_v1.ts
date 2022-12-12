export interface IStyle_v1<S, P> {
  name: S;
  style: StyledGComponent<P>;
}

export interface Style_v1<S, P> {
  name: S;
  style: StyledGComponent<P>;
}

export class Style_v1<S, P> {
  constructor(props: Style_v1<S, P>) {
    this.name = props.name;
    this.style = props.style;
  }
}

export type Style_v1Ctor<S = string, P = {}> = {
  new (props: Style_v1<S, P>): Style_v1<S, P>;
};

export const Style_v1Ctor: Style_v1Ctor = Style_v1;

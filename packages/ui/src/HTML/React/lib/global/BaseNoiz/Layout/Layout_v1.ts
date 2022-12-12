export interface ILayout_v1<L, P> {
  name: L;
  component: (p: P) => JSX.Element;
}

export interface Layout_v1<L, P> {
  name: L;
  component: (p: P) => JSX.Element;
}

export class Layout_v1<L, P> {
  constructor(p?: Layout_v1<L, P>) {
    if (!p) return;
    this.name = p.name;
    this.component = p.component;
  }
}
export type Layout_v1Ctor<L = string, P = {}> = {
  new (p?: Layout_v1<L, P>): Layout_v1<L, P>;
};

export const Layout_v1Ctor: Layout_v1Ctor = Layout_v1;

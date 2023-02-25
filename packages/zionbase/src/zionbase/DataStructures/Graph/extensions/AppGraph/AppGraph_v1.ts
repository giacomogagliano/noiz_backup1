import { AppNode, getNodeId } from "./AppNode";

type FuncReturns<U> = U extends any ? () => U : never;

type OverloadOfAsReturn<U> = U extends any
  ? (k: FuncReturns<U>) => void
  : never;

type IntersectionOfAsReturn<U> =
  OverloadOfAsReturn<U> extends (k: infer I) => void
    ? I
    : never;

type Last<U> =
  IntersectionOfAsReturn<U> extends () => infer R
    ? R
    : never;

type IsArray<U> = [U] extends [never] ? true : false;

type PushToArray<A extends any[], E> = [...A, E];

type TupleOf<
  U,
  L = Last<U>,
  E = Exclude<U, L>
> = IsArray<U> extends true
  ? []
  : PushToArray<TupleOf<E>, L>;

export interface IAppGraph_v1<
  S extends string = string,
  N extends AppNode = AppNode,
  A extends string = string,
  C extends string = string,
  I extends getNodeId<N[]> = getNodeId<N[]>
> {
  id: S;
  nodes: N[];
  actions: A[];
  children: C[];
  addNode(node: N): this;
  getById(id: I): N;
  makeApp(children: C[]): this;
}

export interface AppGraph_v1<
  S extends string = string,
  N extends AppNode = AppNode,
  A extends string = string,
  C extends string = string,
  I extends getNodeId<N[]> = getNodeId<N[]>
> {
  id: S;
  nodes: N[];
  actions: A[];
  children: C[];
  addNode(node: N): this;
  getById(id: I): N;
  makeApp(children: C[]): this;
}

export interface AppGraph_v1Props<
  S extends string,
  N extends AppNode,
  A extends string = string,
  C extends string = string
> {
  id: S;
  nodes: N[];
  actions?: A[];
  children?: C[];
}

export class AppGraph_v1<
  S extends string,
  N extends AppNode,
  A extends string = string,
  C extends string = string,
  I extends getNodeId<N[]> = getNodeId<N[]>
> implements IAppGraph_v1
{
  static Nodes: AppNode[] = [];
  static addElement<T>(
    arrayOfNodes: T[],
    startingElement: T
  ): TupleOf<T> {
    const res = arrayOfNodes.reduce(
      (arr, el) => {
        return [...arr, el];
      },
      [startingElement] as T[]
    );
    return res as TupleOf<T>;
  }
  constructor(props: AppGraph_v1Props<S, N, A, C>) {
    const { actions, children, id, nodes } = props;
    this.id = id;
    this.nodes = nodes;

    if (actions) this.actions = actions;
    if (children) this.children = children;
  }
  getById(id: I) {
    const node = this.nodes.find(node => node.id === id);
    if (!node) throw new Error("");
    return node;
  }
  makeApp(children: C[]) {
    this.children = children;
    return this;
  }
}

export type AppGraph_v1Ctor = {
  new <
    S extends string = string,
    N extends AppNode = AppNode,
    A extends string = string,
    C extends string = string
  >(
    props: AppGraph_v1Props<S, N, A, C>
  ): AppGraph_v1;
};

export const AppGraph_v1Ctor: AppGraph_v1Ctor =
  AppGraph_v1;

import type { processor, graph } from "../Types";
import type { BasicNode } from "../Types";

export interface IDfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  graph: graph<N> | undefined;
  stack: N[];
  curr: N;
  processors: processor<N>[];
}

export interface Dfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  graph: graph<N> | undefined;
  stack: N[];
  curr: N;
  processors: processor<N>[];
  traverse(): this;
  use(p: processor<N>): this;
  treat: (p: processor<N>) => void;
  pushInStack: (id: I) => void;
  process(graph: graph<N>): graph<N>;
}

export class Dfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  constructor() {
    this.stack = [];
    this.processors = [];
  }

  traverse() {
    return this;
  }

  use(processor: processor<N>) {
    this.processors.push(processor);
    return this;
  }

  treat = (p: processor<N>) => {
    if (!this.curr) return;
    this.curr = p(this.curr);
  };

  pushInStack = (c: I) => {
    if (!this.graph) return;
    const node = this.graph.nodes[c as number];
    this.stack.push(node as N);
  };

  process(graph: graph<N>) {
    this.graph = graph;
    let root = graph.nodes[0];
    if (!root) return;
    this.stack = [root];
    while (this.stack.length) {
      let curr = this.stack.pop();
      if (!curr) return;
      this.curr = curr;
      const children = curr.children as I[];
      children.forEach(this.pushInStack);
      // process
      if (this.processors) {
        this.processors.forEach(this.treat);
      }
    }
    return graph;
  }
}

export type Dfs_v1Ctor<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> = {
  new (): Dfs_v1<I, T, N>;
};

export const Dfs_v1Ctor: Dfs_v1Ctor = Dfs_v1;

import type {
  BasicNode,
  graph,
  processor,
} from "../Types";

export interface IBfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  graph: graph<N> | undefined;
  queue: N[];
  curr: N;
  processors: processor<N>[];
}

export interface Bfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  graph: graph<N> | undefined;
  queue: N[];
  curr: N;
  processors: processor<N>[];
  traverse(): this;
  use(p: processor<N>): this;
  treat: (p: processor<N>) => void;
  pushInQueue: (id: I) => void;
  process(graph: graph<N>): graph<N>;
}

export class Bfs_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  constructor() {
    this.queue = [];
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

  pushInQueue = (c: I) => {
    if (!this.graph) return;
    const node = this.graph.nodes[c as number];
    this.queue.push(node as N);
  };

  process(graph: graph<N>) {
    this.graph = graph;
    let root = graph.nodes[0];
    if (!root) return;
    this.queue = [root];
    while (this.queue.length) {
      let curr = this.queue.shift();
      if (!curr) return;
      this.curr = curr;
      const children = curr.children as I[];
      children.forEach(this.pushInQueue);
      // process
      if (this.processors) {
        this.processors.forEach(this.treat);
      }
    }
    return graph;
  }
}

export type Bfs_v1Ctor<
  T = {},
  N extends BasicNode<T> = BasicNode<T>
> = {
  new (): Bfs_v1<T, N>;
};

export const Bfs_v1Ctor: Bfs_v1Ctor = Bfs_v1;

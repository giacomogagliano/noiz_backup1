import { FluidGraph } from "../DataStructures/Graph/Graph_v3";
import type { BasicNode, graph, processor } from "./Types";

type GraphTypes<
  Id extends string | number | symbol,
  T,
  Node extends BasicNode<Id, T>
> = graph<Node> | FluidGraph<unknown, Id, Node, T>;

export interface Dfs_v1Props<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  type?: "dfs";
  graph: GraphTypes<I, T, N>;
  stack: BasicNode<I, T>[];
  curr: N;
  processors: processor<N>[];
}

export interface Bfs_v1Props<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  type?: "bfs";
  graph: GraphTypes<I, T, N>;
  queue: BasicNode<I, T>[];
  curr: N;
  processors: processor<N>[];
}

export type FluidAlgoProps<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> = Bfs_v1Props<I, T, N> | Dfs_v1Props<I, T, N>;

export interface IAlgo_v1<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  type: "dfs" | "bfs";
  graph: GraphTypes<I, T, N>;
  stack_or_queue: BasicNode<I, T>[];
  curr: N;
  processors: processor<N>[];
}

export interface Algo_v1<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  type: "dfs" | "bfs";
  graph: GraphTypes<I, T, N>;
  stack_or_queue: BasicNode<I, T>[];
  curr: N;
  processors: processor<N>[];
  traverse(): this;
  use(p: processor<N>): this;
  treat: (p: processor<N>) => void;
  pushInStack: (id: I) => void;
  // TODO #156 @giacomogagliano finire implementazioni e togliere
  // il void return
  process(
    graph?: GraphTypes<I, T, N>
  ): GraphTypes<I, T, N> | void;
}

export class Algo_v1<
  I = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> {
  constructor(props: FluidAlgoProps<I, T, N>) {
    switch (props.type) {
      case "bfs":
        this.stack_or_queue = props.queue;
        this.type = "bfs";
        break;
      case "dfs":
        this.stack_or_queue = props.stack;
        this.type = "dfs";
        break;
      default:
        break;
    }
    this.processors = props.processors;
    this.graph = props.graph;
    this.curr = props.curr;
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
    let node;
    switch (this.graph.type) {
      case "array":
        var nodes = this.graph.nodes as N[];
        node = nodes[c as number];
        break;

      default:
        if (this.graph.type === "map") throw new Error("");
        var nodes = this.graph.nodes as N[];
        node = nodes[c as number];
        break;
    }
    this.stack_or_queue.push(node as N);
  };

  process(graph?: GraphTypes<I, T, N>) {
    if (graph) this.graph = graph;
    let root;
    switch (graph?.type) {
      case "array":
        var nodes = this.graph.nodes as N[];
        var arrayroot = nodes[0]!;
        root = arrayroot;
        break;

      case "map":
        throw new Error("to be implemented");

      default:
        var nodes = this.graph.nodes as N[];
        var arrayroot = nodes[0]!;
        root = arrayroot;
        break;
    }
    if (!root) return;
    this.stack_or_queue = [root];
    while (this.stack_or_queue.length) {
      let curr: BasicNode<I, T>;
      switch (this.type) {
        case "dfs":
          curr = this.stack_or_queue.pop()!;
          break;
        case "bfs":
          curr = this.stack_or_queue.shift()!;
          break;
        default:
          curr = this.stack_or_queue.shift()!;
          break;
      }
      if (!curr) return;
      this.curr = curr as N;
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

export type Algo_v1Ctor<
  I extends string | number | symbol = number,
  T = {},
  N extends BasicNode<I, T> = BasicNode<I, T>
> = {
  new (props: FluidAlgoProps<I, T, N>): Algo_v1<I, T, N>;
};

export const Algo_v1Ctor: Algo_v1Ctor = Algo_v1;

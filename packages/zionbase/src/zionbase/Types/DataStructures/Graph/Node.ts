import { Strategy } from "../../Class/Strategy";
import { Edge } from "./Edge";

enum NodeMethods {
  createId = "create-id",
}
type NodeMethodsUnion = keyof typeof NodeMethods;

export interface BasicNode<T> {
  type: string;
  value: T;
}

export abstract class Node {
  #methods: Map<unknown, Strategy> = new Map();
  get methods() {
    return this.#methods;
  }
  id: unknown;
  abstract type: string;
  abstract value: unknown;
  constructor() {
    this.id = this.#methods.get("create-id")?.method();
  }
  abstract addEdge(edge: Edge): this;
  addStrategy(strategy: Strategy) {
    this.#methods.set(strategy.name, strategy);
  }
  assignStrategy(
    strategy: NodeMethodsUnion,
    newStrategy: Strategy
  ) {
    this.#methods.set(strategy, newStrategy);
  }
}

import type { Types } from "@zionstate/zionbase/zionbase";

export interface Node<T> extends Types.DataStructure.Graph.BasicNode<T> {}

export abstract class Node<T> implements Node<T> {
  value: T;
  constructor(p: T) {
    this.value = p;
  }
}

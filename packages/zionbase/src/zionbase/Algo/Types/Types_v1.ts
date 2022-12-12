// Graph

export interface graph<N> {
  type: "simple";
  nodes: N[];
}

// Node

export interface BasicNode<I = number, T = {}> {
  id: I;
  children: BasicNode["id"][];
  value: T;
}

// Processor

export interface processor<T> {
  (e: T): T;
}

// Algo

export interface commonProps<N> {
  thiscurr: N;
  processors: processor<N>[];
  treat: (p: processor<N>) => void;
}

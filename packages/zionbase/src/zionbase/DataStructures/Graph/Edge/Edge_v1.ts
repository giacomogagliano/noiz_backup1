export interface IEdge_v1 {
  name: string;
}

export interface Edge_v1 {
  name: string;
}

export class Edge_v1 implements IEdge_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Edge_v1Ctor = {
  new (name: string): Edge_v1;
};

export const Edge_v1Ctor: Edge_v1Ctor = Edge_v1;

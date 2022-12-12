export interface IDijkstra_v1 {
  name: string;
}

export interface Dijkstra_v1 {
  name: string;
}

export class Dijkstra_v1 implements IDijkstra_v1 {
  constructor(name: string) {
    this.name = name;
  }
}

export type Dijkstra_v1Ctor = {
  new (name: string): Dijkstra_v1;
};

export const Dijkstra_v1Ctor: Dijkstra_v1Ctor =
  Dijkstra_v1;

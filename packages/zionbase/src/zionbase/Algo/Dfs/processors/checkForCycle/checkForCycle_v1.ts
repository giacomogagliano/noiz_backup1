import { BasicNode, processor } from "../../../Types";

export interface IcheckForCycle_v1
  extends processor<BasicNode & { visited: boolean }> {}

export const checkForCycle_v1: IcheckForCycle_v1 =
  node => {
    // se il nodo è già stato visitato, c'è un ciclo nel grafo
    if (node.visited)
      throw new Error("Ciclo rilevato nel grafo");

    // segna il nodo come visitato
    node.visited = true;

    return node;
  };

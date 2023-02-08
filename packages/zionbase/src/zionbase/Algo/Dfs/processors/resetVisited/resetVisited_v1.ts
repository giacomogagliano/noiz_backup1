import { BasicNode, processor } from "../../../Types";
import { Visitable } from "../../../Types/Types_v1";

export interface IresetVisited_v1
  extends processor<BasicNode & Visitable> {}

export const resetVisited_v1: IresetVisited_v1 = node => {
  node.visited = false;
  return node;
};

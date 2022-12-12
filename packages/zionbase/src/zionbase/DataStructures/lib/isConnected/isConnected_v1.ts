import { isConnectedType } from "../../../Types/DataStructures/Graph";

export const isConnected_v1: isConnectedType = function (
  nodeA,
  nodeB
) {
  const indexA = this.nodeIndexes[nodeA];
  const indexB = this.nodeIndexes[nodeB];
  if (!indexA) throw new Error("no index A");
  if (!indexB) throw new Error("no index b");
  const bii = this.adjacencyMatrix[indexA];
  if (!bii) throw new Error("");
  const cond = bii[indexB] ? true : false;
  return cond;
};

import { addNodeType } from "../../../../Types/DataStructures/Graph";

export const addNode_v1: addNodeType = function (node) {
  const currentMatrixLength = this.adjacencyMatrix.length;

  this.adjacencyMatrix.push(
    new Array(currentMatrixLength).fill(0)
  );
  this.nodeIndexes[node] = this.adjacencyMatrix.length - 1;
  return this;
};

import {
  findAdjacentNodesType,
  INode,
} from "../../../Types/DataStructures/Graph";

export const findAdjacentNodes_v1: findAdjacentNodesType =
  function (node) {
    const result: INode["key"][] = [];
    if (!this.nodeIndexes) throw new Error("");
    for (let key in this.nodeIndexes) {
      let nodeIndex = this.nodeIndexes[node];
      if (!nodeIndex) throw new Error("");
      const connectionsOfNode =
        this.adjacencyMatrix[nodeIndex];
      const currentNode = this.nodeIndexes[key];
      if (!connectionsOfNode) throw new Error("");
      if (!currentNode) throw new Error("");

      if (connectionsOfNode[currentNode]) {
        const node = this.nodes[currentNode];
        if (!node) throw new Error("");
        result.push(node);
      }
    }
    return result;
  };

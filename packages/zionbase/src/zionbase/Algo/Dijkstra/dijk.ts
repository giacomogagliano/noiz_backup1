// https://bytethisstore.com/articles/pg/dijkstras-algorithm
export {};
/**
 * Encapsulates a graph node/vertex
 * Holds references to connected nodes with weights
 */
export class GraphNode {
  private outNodes = new Map<GraphNode, number>();

  constructor(private value: string) {}

  getValue(): string {
    return this.value;
  }

  getChildMaps(): Map<GraphNode, number> {
    return this.outNodes;
  }

  /**
   * Add a connection to a node, then add node to this
   * Both weights will be the same
   */
  addConnectionTo(node: GraphNode, weight: number): void {
    this.outNodes.set(node, weight);
    if (!node.isConnectedTo(this)) {
      node.addConnectionTo(this, weight);
    }
  }

  isConnectedTo(node: GraphNode): boolean {
    return this.outNodes.has(node);
  }
}

/**
 * Encapsulate a response for finding the shortest path
 */
class ShortestPath {
  constructor(
    public path: GraphNode[],
    public cost: number
  ) {}
}

/**
 * Store the function in a class as a static method
 */
export class Dijkstra {
  /**
   * Find the shortest path
   * Return an object which contains the path and sum of weights
   */
  public static findShortestPath(
    startNode: GraphNode,
    endNode: GraphNode
  ): ShortestPath {
    const smallestWeights = new Map<GraphNode, number>();
    smallestWeights.set(startNode, 0);
    const prevNodes = new Map<GraphNode, GraphNode>();
    const nodesToVisitQueue: GraphNode[] = [];
    const visitedNodes = new Set<GraphNode>();
    visitedNodes.add(startNode);
    let currentNode = startNode;
    while (true) {
      const dist = smallestWeights.get(currentNode)!;
      const childNodes = currentNode.getChildMaps();
      for (const [childNode, weight] of childNodes) {
        if (!visitedNodes.has(childNode)) {
          nodesToVisitQueue.push(childNode);
        }
        const thisDist = dist + weight;
        if (prevNodes.has(childNode)) {
          const altDist = smallestWeights.get(childNode)!;
          if (thisDist < altDist) {
            prevNodes.set(childNode, currentNode);
            smallestWeights.set(childNode, thisDist);
          }
        } else {
          prevNodes.set(childNode, currentNode);
          smallestWeights.set(childNode, thisDist);
        }
      }
      visitedNodes.add(currentNode);
      if (nodesToVisitQueue.length === 0) {
        break;
      }
      currentNode = nodesToVisitQueue.shift()!;
    }
    const path: GraphNode[] = [];
    currentNode = endNode;
    while (currentNode !== startNode) {
      path.push(currentNode);
      currentNode = prevNodes.get(currentNode)!;
    }
    path.push(startNode);
    path.reverse();
    const cost = smallestWeights.get(endNode)!;
    return new ShortestPath(path, cost);
  }
}

export class Edge_byChatGPT {
  // The edge's source node
  private source: Node;

  // The edge's destination node
  private destination: Node;

  // The edge's weight (if it is a weighted graph)
  private weight: number;

  constructor(
    source: Node,
    destination: Node,
    weight: number
  ) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }

  // Getters and setters for the source, destination, and weight properties
  public getSource(): Node {
    return this.source;
  }

  public setSource(source: Node): void {
    this.source = source;
  }

  public getDestination(): Node {
    return this.destination;
  }

  public setDestination(destination: Node): void {
    this.destination = destination;
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    this.weight = weight;
  }
}

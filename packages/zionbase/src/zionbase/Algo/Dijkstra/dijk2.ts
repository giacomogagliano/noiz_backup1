export {};
// export class Djik {
//   vertices: any[];
//   adjacencyList: {};
//   constructor() {
//     this.vertices = [];
//     this.adjacencyList = {};
//   }
//   addVertex(vertex: number) {
//     this.vertices.push(vertex);
//     this.adjacencyList[vertex] = {};
//   }

//   addEdge(
//     vertex1: number,
//     vertex2: number,
//     weight: number
//   ) {
//     this.adjacencyList[vertex1][vertex2] = weight;
//   }

//   changeWeight(
//     vertex1: number,
//     vertex2: number,
//     weight: number
//   ) {
//     this.adjacencyList[vertex1][vertex2] = weight;
//   }
//   dijkstra(source: number) {
//     let distances = {},
//       parents = {},
//       visited = new Set();
//     for (let i = 0; i < this.vertices.length; i++) {
//       if (this.vertices[i] === source) {
//         distances[source] = 0;
//       } else {
//         distances[this.vertices[i]] = Infinity;
//       }
//       parents[this.vertices[i]] = null;
//     }

//     let currVertex = this.vertexWithMinDistance(
//       distances,
//       visited
//     );

//     while (currVertex !== null) {
//       let distance = distances[currVertex],
//         neighbors = this.adjacencyList[currVertex];
//       for (let neighbor in neighbors) {
//         let newDistance = distance + neighbors[neighbor];
//         if (distances[neighbor] > newDistance) {
//           distances[neighbor] = newDistance;
//           parents[neighbor] = currVertex;
//         }
//       }
//       visited.add(currVertex);
//       currVertex = this.vertexWithMinDistance(
//         distances,
//         visited
//       );
//     }

//     console.log(parents);
//     console.log(distances);
//   }
//   vertexWithMinDistance(
//     distances: {},
//     visited: { has: Function }
//   ) {
//     let minDistance = Infinity,
//       minVertex: string | null = null;
//     for (let vertex in distances) {
//       let distance = distances[vertex];
//       if (distance < minDistance && !visited.has(vertex)) {
//         minDistance = distance;
//         minVertex = vertex;
//       }
//     }
//     return minVertex;
//   }
// }

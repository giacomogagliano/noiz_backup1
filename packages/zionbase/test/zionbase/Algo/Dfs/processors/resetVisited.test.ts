import { testEnvironment } from "@zionstate/test";
import { resetVisited } from "../../../../../src/zionbase/Algo/Dfs";

const { expect, log } = testEnvironment();
expect;
log;

describe("if resetVisited function is correctly exported", () => {
  const regex = /resetVisited/g;
  const name = resetVisited.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named resetVisited", () => {
    expect(res).to.be.true;
  });
});

describe("resetVisited_v1", () => {
  it("should reset the 'visited' property of all nodes to false", () => {
    // crea un grafo dove tutti i nodi hanno la proprietà 'visited' impostata su true
    const graph = {
      type: "simple",
      nodes: [
        { id: 0, visited: true, children: [1], value: {} },
        { id: 1, visited: true, children: [2], value: {} },
        { id: 2, visited: true, children: [0], value: {} },
      ],
    };

    // esegui il processore resetVisited_v1 su ogni nodo del grafo
    graph.nodes.forEach(node => resetVisited(node));

    // il test dovrebbe passare se tutti i nodi hanno la proprietà 'visited' impostata su false
    graph.nodes.forEach(node => {
      expect(node.visited).to.be.false;
    });
  });
});

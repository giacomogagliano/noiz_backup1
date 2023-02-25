import { testEnvironment } from "@zionstate/test";
import { Dfs } from "../../../../../src/zionbase/Algo/Dfs";
import { checkForCycle } from "../../../../../src/zionbase/Algo/Dfs/processors";
import { graph } from "../../../../../src/zionbase/Algo/Types";

const { expect, log } = testEnvironment();
expect;
log;

describe("if  checkForCycle function is correctly exported", () => {
  const regex = /checkForCycle/g;
  const name = checkForCycle.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named  checkForCycle", () => {
    expect(res).to.be.true;
  });
});

describe("Dfs", () => {
  it("should throw an exception if a cycle is detected", () => {
    // crea un grafo con un ciclo
    const graph: graph<{
      id: number;
      visited: boolean;
      value: {};
      children: number[];
    }> = {
      type: "simple",
      nodes: [
        {
          id: 0,
          visited: false,
          children: [1],
          value: {},
        },
        {
          id: 1,
          visited: false,
          children: [2],
          value: {},
        },
        {
          id: 2,
          visited: false,
          children: [0],
          value: {},
        }, // ciclo qui!
      ],
    };

    // crea un'istanza dell'algoritmo DFS e aggiungi il processore per la verifica dei cicli
    const dfs = new Dfs<
      number,
      {},
      {
        id: number;
        visited: boolean;
        value: {};
        children: number[];
      }
    >();
    dfs.use(checkForCycle);

    // il test dovrebbe lanciare un'eccezione
    expect(() => dfs.process(graph)).to.throw();
  });
});

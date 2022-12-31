import { testEnvironment } from "@zionstate/test";
import { removeDirectoryLevels } from "../../../../../../src/utils/node/util/ZionUtils/path/";

const { expect, log } = testEnvironment();
expect;
log;

describe("if removeDirectoryLevels function is correctly exported", () => {
  const regex = /removeDirectoryLevels/g;
  const name = removeDirectoryLevels.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named removeDirectoryLevels", () => {
    expect(res).to.be.true;
  });
});

describe("removeDirectoryLevels", () => {
  const filePath =
    "/Users/WAW/Documents/Projects/noiz-network-state/packages/database/test/Git/ZionGit";
  it("dovrebbe troncare la string con il path di 2 livelli", () => {
    // Rimuove due livelli di directory dal percorso del file
    const newFilePath = removeDirectoryLevels(filePath, 2);
    const EXPECTED =
      "/Users/WAW/Documents/Projects/noiz-network-state/packages/database/test";
    expect(newFilePath).to.be.equal(EXPECTED); // '/Users/WAW/Documents/Projects/noiz-network-state/packages/database/test'
  });
});

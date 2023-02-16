import { searchObject } from "../../../../../src/zionbase/Algo/lib/recursive";
import { testEnvironment } from "@zionstate/test";
const { log, expect } = testEnvironment();

describe("searchObject", () => {
  const start = performance.now();
  const res = searchObject(
    {
      level_1: {
        level_2: {
          level_3: {
            level_4: {
              level_5: {
                value: 20,
              },
            },
          },
        },
      },
    },
    20
  );
  const end = performance.now();
  const elapsed = end - start;
  log("elasped time", elapsed);
  it("should return true", () => {
    expect(res).to.be.true;
  });
});

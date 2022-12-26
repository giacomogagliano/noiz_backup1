import { testEnvironment } from "@zionstate/test";
import { ZionGitHub } from "../../../src/Git/ZionGitHub/ZionGitHub_v2";
import { config } from "dotenv";
config();

const { expect, log } = testEnvironment();
expect;
log;

const access =
  process.env.GIT_ACCESS_TOKEN_GiacomoGagliano;
const github = new ZionGitHub(access!);

describe("if ZionGitHub function is correctly exported", async () => {
  const regex = /ZionGitHub/g;
  const name = ZionGitHub.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named ZionGitHub", () => {
    expect(res).to.be.true;
  });
});

describe("closeIssue", async () => {
  const issueN = 161;
  const repo = "noiz-network-state";
  const close = await github.closeIssue(
    issueN,
    // @ts-expect-error
    "Zion-PTC",
    repo
  );
  log("", close);
  it("should delete an issue", () => {});
});

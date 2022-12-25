import { testEnvironment } from "@zionstate/test";
import { ZionGitHub } from "../../../src/Git/ZionGitHub/ZionGitHub_v2";
import { config } from "dotenv";
config();

const { expect, log } = testEnvironment();
expect;
log;

const access =
  process.env.GIT_ACCESS_TOKEN_GiacomoGagliano;

describe("if ZionGitHub function is correctly exported", () => {
  const regex = /ZionGitHub/g;
  const name = ZionGitHub.name;
  const res = regex.test(name);

  const github = new ZionGitHub(access!);
  // github.closeIssue();

  log("", github);

  it("shall confirm the existance of a function named ZionGitHub", () => {
    expect(res).to.be.true;
  });
});

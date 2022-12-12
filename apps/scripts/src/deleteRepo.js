// import { ZionGitHub } from "../packages/git/src/GitHub.js";
import { FS } from "@zionstate/database";
import { node } from "@zionstate/utils";
import { ZionGitHub } from "@zionstate/git";
import { config } from "dotenv";
import { join } from "path";
config();
const { process: pr } = node;
const runProcess = pr.runProcess;
const { system } = FS;

// export {};

// connect to github
// retrieve repos
// take out repos to keep
// delete remaining repos
// print log

export async function main() {
  if (!process.env.TOKEN) throw new Error("");
  const github = new ZionGitHub(process.env.TOKEN);
  const { zionOctoKit } = github;
  const repos = await github.getRepos();
  const giacomo = repos.filter((repo) => repo[0] === "giacomogagliano");
  const arianna = repos.filter((repo) => repo[0] === "ariannatnl");
  const zion = repos.filter((repo) => repo[0] === "Zion-PTC");
  const ZION = "ZION";
  const PRESEED = "zion-preseed";
  const CONTRACTS = "zion-contracts";
  const zionToDelete = zion
    .filter((repo) => repo[1] !== ZION)
    .filter((repo) => repo[1] !== PRESEED)
    .filter((repo) => repo[1] !== CONTRACTS);
  const zionToDeleteTest = zionToDelete[4];
  github.createRepoForOrg("zionPTC", "_oldZion");
  console.log(zionToDeleteTest);
  // console.log(zionToDeleteTest);

  // system.writeJson(
  //   join(
  //     process.cwd(),
  //     "logs",
  //     "deleteRepos_" + new Date().toString() + ".json"
  //   ),
  //   JSON.stringify(zionToDelete)
  // );
  // zionToDelete.forEach((repo) => github.deleteRepo("zionPTC", repo[1]));
}

runProcess(main, { successMess: "success" });

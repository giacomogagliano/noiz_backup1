import { ZionGit } from "@zionstate/git";
import { runProcess } from "@zionstate/utils/dist/node/process";

const REPOPATH = "/Users/WAW/Documents/Projects/zion-network-state/packages/ui";

async function main() {
  const git = new ZionGit(REPOPATH);
  console.log(git);
}

runProcess(main, { successMess: "success" });

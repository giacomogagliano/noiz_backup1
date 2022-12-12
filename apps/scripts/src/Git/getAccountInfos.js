import { config } from "dotenv";
import git from "@zionstate/git";
import { node } from "@zionstate/utils";
config();
const ZionGitHub = git.ZionGitHub;
const runProcess = node.process.runProcess;

async function main() {
  if (!process.env.TOKEN) throw new Error("No token provided");
  console.log(process.env.TOKEN);
  const ziongit = new ZionGitHub(process.env.TOKEN);
  const user = await ziongit.zionOctoKit.users.getAuthenticated();
  console.log(user.data.login);
}

runProcess(main, { successMess: "success" });

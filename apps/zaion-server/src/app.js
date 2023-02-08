import express from "express";
import path from "path";
import { system, ZionYaml, NoizPath } from "@zionstate/database/FileSystem";
import { node } from "@zionstate/zionbase/utils";
import { Monorepo, lib } from "@zionstate/database/Git";
import { signup } from "./signup/index.js";
import { createrepo } from "./create/repo/index.js";
import { EventEmitter } from "events";
import { editrepo } from "./edit/repo/index.js";

class ServerEvents extends EventEmitter {}

export const server = new ServerEvents();

const removeLevels = node.zionUtil.removeDirectoryLevels;
const MONO_REPO_ROOT = removeLevels(process.cwd(), 2);
const buildtree = lib.buildTreeFromGit;

const {
  joinPaths: join,
  mkdirSync: mkdir,
  writeFileSync: write,
  existsSync: exists,
} = system;
const PORT = 5000;
const DATA_DIR = "data";
const ROOT_DIR = process.cwd();
const LOOK_UP = "look_up.yaml";
const DATA_PATH = join([ROOT_DIR, DATA_DIR]);
const LOOK_UP_PATH = join([ROOT_DIR, DATA_DIR, LOOK_UP]);

let look_up;

function reloadLookUp() {
  look_up = new ZionYaml(LOOK_UP_PATH);
  if (!look_up.parsed.users) {
    look_up.parsed = { users: {} };
  }
}

server.on("user-created", () => {
  reloadLookUp();
});

async function setUp() {
  const cond1 = exists(DATA_PATH);
  if (!cond1) mkdir(DATA_PATH);
  const cond2 = exists(LOOK_UP_PATH);
  if (!cond2) {
    write(LOOK_UP_PATH, "");
  }
  look_up = new ZionYaml(LOOK_UP_PATH);
  if (!look_up.parsed.users) {
    look_up.parsed = { users: {} };
  }
  if (!look_up.parsed.repos) {
    look_up.parsed = { ...look_up.parsed, repos: {} };
  }
  const cond3 = new ZionYaml(LOOK_UP_PATH).string === "";
  if (cond3) {
    const date = new Date().toISOString();
    const config = {
      application: "zaion-server",
      kind: "look_up",
      "creation-date": date,
    };
    look_up.parsed = { ...look_up.parsed, ...config };
    look_up.write();
  }
}
setUp();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ciao benvenuto nel server");
});

app.get("/dati", async (req, res) => {
  const tree = await build();
  res.send(tree);
});

app.post("/signup", signup(look_up, ROOT_DIR, DATA_DIR));
app.post("/create/repo", createrepo(look_up, DATA_PATH));
app.post("/edit/repo", editrepo(look_up, DATA_PATH));

export async function build() {
  const tree = await buildtree("3244d99", MONO_REPO_ROOT);
  return tree;
}

app.listen(PORT, () => {
  process.stdout.write(`server started on port: ${PORT}\n`);
});

import SEA from "gun/sea.js";

import { system, ZionYaml, NoizPath } from "@zionstate/database/FileSystem";
import { server } from "../app.js";

const { joinPaths: join, writeFileSync: write } = system;

export function signup(look_up, ROOT_DIR, DATA_DIR) {
  return async function (req, res) {
    const dati = req.body;
    if (!dati) {
      res.send("No data given");
      return;
    }
    if (!dati.name) {
      res.send("no name given");
      return;
    }
    const user = look_up.parsed.users[dati.name];
    if (!user) {
      // handle new user
      const pub = await handleNewUser(dati, look_up, ROOT_DIR, DATA_DIR);
      res.send(JSON.stringify({ user: dati.name, id: pub }));
    } else {
      res.send(`user name already exists: ${user}`);
    }
  };
}

async function handleNewUser(dati, look_up, ROOT_DIR, DATA_DIR) {
  // create user's keypair
  const keypair = await SEA.pair();
  const yaml_path = makepath(keypair, ROOT_DIR, DATA_DIR);

  // add user to lookup
  look_up.parsed.users[dati.name] = keypair.pub;
  look_up.write();

  // handle new user datas
  write(yaml_path, "");
  createUser(dati, yaml_path, keypair);
  server.emit("user-created");
  return keypair.pub;
}

function createUser(dati, yaml_path, keypair) {
  const user_yaml = new ZionYaml(yaml_path);
  user_yaml.parsed = { name: dati.name, keypair };
  user_yaml.write();
}

function makepath(keypair, ROOT_DIR, DATA_DIR) {
  const yaml = `${keypair.pub}.yaml`;
  const yaml_path = join([ROOT_DIR, DATA_DIR, yaml]);
  return yaml_path;
}

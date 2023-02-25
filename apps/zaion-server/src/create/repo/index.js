import SEA from "gun/sea.js";
import { system, NoizPath, NoizYaml } from "@zionstate/database/FileSystem";
import { build } from "../../app.js";

const exists = system.existsSync;
const join = system.joinPaths;
let user_yaml, repo_yaml;

export function createrepo(look_up, DATA_DIR) {
  return async function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write("\nlooking for user");
    const data = req.body;
    const user = look_up.parsed.users[data.user];
    res.write("\nuser found");
    res.write(`\n${user}`);
    const user_file = `${user}.yaml`;
    const user_file_path = join([DATA_DIR, user_file]);
    const cond = exists(user_file_path);
    if (!cond) {
      res.send("\nuser doesnt exist");
      return;
    } else {
      if (!user_yaml) user_yaml = new NoizYaml(user_file_path);
      let user_yaml_parsed = user_yaml.parsed;
      if (!user_yaml_parsed.repos) {
        user_yaml_parsed.repos = { init: true };
        user_yaml.write();
      }
      let repo = user_yaml_parsed.repos[data.name];
      if (!repo) {
        res.write("\nuser has no repo with that name");
        res.write("\nI am generating one");
        // create keys for repo
        const keys = await SEA.pair();
        const pub = keys.pub;
        // create repo in user file
        user_yaml.parsed.repos[data.name] = pub;
      } else {
        let init = user_yaml.parsed.repos.init;
        if (init) delete user_yaml.parsed.repos.init;
        user_yaml.write();
        const pub = user_yaml.parsed.repos[data.name];
        const repo_file = `${pub}.yaml`;
        const repo_file_path = join([DATA_DIR, repo_file]);
        let cond = exists(repo_file_path);
        res.write(`\ndata already exists? ${cond}\n`);
        if (!cond) {
          res.write(`let's create the datas\n`);
          system.writeFileSync(repo_file_path, "");
        }
        cond = exists(repo_file_path);
        if (cond) {
          res.write(`let's look for datas..\n`);
          if (!repo_yaml) repo_yaml = new NoizYaml(repo_file_path);
          if (!repo_yaml.parsed) {
            repo_yaml.parsed = { name: data.name };
            repo_yaml.parsed.creationDate = new Date().toISOString();
            repo_yaml.parsed.owner = user;
            repo_yaml.parsed.url = data.url;
            repo_yaml.parsed.commit = data.commit;
            res.write("start scanning git repo");
            repo_yaml.parsed.tree = await build();
            res.write("finished scanning git repo");
            res.write(JSON.stringify(repo_yaml.parsed));
            repo_yaml.write();
          } else {
            res.write("repo already exists");
          }
        }
        // res.end();
      }
    }
    res.write(JSON.stringify(data));
    res.end();
  };
}

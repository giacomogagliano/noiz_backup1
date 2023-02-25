import { ZionYaml } from "@zionstate/database/FileSystem";

let user_yaml, repo_yaml;

export function editrepo(look_up, DATA_PATH) {
  return async function (req, res) {
    const filesys = await import("@zionstate/database/FileSystem");
    const join = filesys.system.joinPaths;
    const data = req.body;
    const user = look_up.parsed.users[data.user];
    const user_file = `${user}.yaml`;
    const user_file_path = join([DATA_PATH, user_file]);
    if (!user_yaml) user_yaml = new ZionYaml(user_file_path);
    const user_repos = user_yaml.parsed.repos;
    if (!user_repos) res.send("no user repos");
    const repo = user_repos[data.name];
    const repo_file = `${repo}.yaml`;
    const repo_file_path = join([DATA_PATH, repo_file]);
    if (!repo_yaml) repo_yaml = new ZionYaml(repo_file_path);
    const tree = repo_yaml.parsed.tree;
    const packages = tree
      .find(e => e.name === "packages")
      .children.map(e => e.name);
    const apps = tree.find(e => e.name === "apps").children.map(e => e.name);
    if (!user) {
      res.send("User doesn't exist");
    }
    if (!repo) {
      res.send("Repo doesn't exist");
    }
    if (data.action) {
      switch (data.action) {
        case "ls-pkg":
          res.send(packages);
          break;
        case "ls-apps":
          res.send(apps);
          break;

        default:
          res.send("default action is do nothing");
          break;
      }
    }
  };
}

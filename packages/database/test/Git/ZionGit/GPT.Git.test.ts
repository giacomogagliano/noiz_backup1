import { node } from "@zionstate/zionbase/utils";
import { simpleGit } from "simple-git";

const removeDirectoryLevels =
  node.zionUtil.removeDirectoryLevels;

const path = process.cwd();
const root = removeDirectoryLevels(path, 5);
root;

interface GitTreeEntry {
  // Il nome del file o della directory
  name: string;
  // Indica se l'oggetto rappresenta un file o una directory
  isFile: boolean;
  // L'hash dell'oggetto
  hash: string;
  // Un array di figli, se l'oggetto rappresenta una directory
  children: Array<GitTreeEntry>;
}
console.log(root);

async function getTree(
  commitHash: string
): Promise<GitTreeEntry[]> {
  const git = simpleGit(root);

  // Esegue il comando `git ls-tree -r abc123`
  const result = await git.raw([
    "ls-tree",
    "-t",
    commitHash,
  ]);

  // Divide il risultato in righe
  const lines = result.split("\n");

  // Estrae le informazioni sui file e le directory presenti nell'albero
  const entries: { [name: string]: GitTreeEntry } = {};
  for (const line of lines) {
    // Ignora le righe vuote
    if (line.trim() === "") {
      continue;
    }

    // Divide la riga in elementi separati da spazio
    const parts = line.split(" ");
    console.log(line);

    // Il primo elemento è il permesso (ignorato)
    // Il secondo elemento è il tipo (blob o tree)
    // Il terzo elemento è l'hash
    // Gli elementi successivi formano il nome del file o della directory
    const isFile = parts[1] === "blob";
    if (!parts[2]) throw new Error("no hash");
    const part2 = parts[2].split("\t");
    const hash = part2[0];
    const name = part2[1];

    if (!hash) throw new Error("no hash");
    if (!part2) throw new Error("no name");
    if (!name) throw new Error("no name");

    entries[name] = { name, isFile, hash, children: [] };
  }

  // Popola l'array di figli delle directory
  for (const entry of Object.values(entries)) {
    if (entry.isFile) {
      continue;
    }

    const children = await getTree(entry.hash);
    entry.children = children;
  }

  // Restituisce l'albero
  return Object.values(entries);
}

async function main() {
  const tree = await getTree("f3aba5a");

  // Stampa l'albero
  console.log(
    tree.filter(e => {
      return e.children.length !== 0;
    })
  );
}

main();

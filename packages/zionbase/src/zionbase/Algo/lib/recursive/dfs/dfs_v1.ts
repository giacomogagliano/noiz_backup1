export interface Idfs_v1 {
  (node: Node, target: any, visited: Set<Node>): boolean;
}

export interface Node {
  value: any;
  children: Node[];
}

export function dfs_v1(
  node: Node,
  target: any,
  visited: Set<Node> = new Set()
) {
  if (!node) return false;
  if (visited.has(node)) return false;
  if (node.value === target) return true;
  visited.add(node);
  for (const child of node.children) {
    if (dfs_v1(child, target, visited)) return true;
  }
  return false;
}

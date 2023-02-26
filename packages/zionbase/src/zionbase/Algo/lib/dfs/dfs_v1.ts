interface BinaryTree {
  key: string;
  right: BinaryTree;
  left: BinaryTree;
}

interface Tree {
  key?: string;
  children: Tree[];
}

export interface Idfs_v1 {
  (root: Tree): any;
}

export function dfs_v1(root: Tree) {
  let stack: Tree[] = [root];
  let res: string[] = [];
  while (stack.length) {
    let curr = stack.pop();
    res.push(curr?.key!);
    if (curr) {
      const children = curr.children;
      if (children)
        /**reversing the children to have the in the
         * same order  as they were input in the array*/
        children.reverse().forEach(c => stack.push(c));
    }
  }
  return res;
}

export function dfs_binary_tree(root: BinaryTree) {
  let stack: BinaryTree[] = [root];
  let res: string[] = [];
  while (stack.length) {
    let curr = stack.pop();
    if (curr) {
      res.push(curr.key);
      if (curr.right) {
        stack.push(curr.right);
      }
      if (curr.left) {
        stack.push(curr.left);
      }
    }
  }
  return res.reverse();
}

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function dfs(list: number[][], node: TreeNode | null, level: number) {
  if (!node) return;

  if (level >= list.length) {
    list.unshift([]);
  }

  dfs(list, node.left, level + 1);
  dfs(list, node.right, level + 1);

  list[list.length - level - 1].push(node.val);
}

/**
 * Problem 107. Level Order Bottom
 * DFS solution
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
  const result = [] as number[][];
  dfs(result, root, 0);
  return result;
}

export {};

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

/**
 * isSymmetric problem with BFS solution
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  // queue
  const queue = [[root.left, root.right]];

  // BFS logic
  while (queue.length !== 0) {
    const [left, right] = queue.shift()!;

    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }

  return true;
}

export {};

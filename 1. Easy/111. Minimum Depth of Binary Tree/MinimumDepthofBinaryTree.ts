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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let depth = 1;
  const queue = [root];

  while (queue.length !== 0) {
    const size = queue.length;

    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (!node) continue;
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    depth += 1;
  }

  return depth;
}

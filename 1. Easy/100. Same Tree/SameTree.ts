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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const stack = [[p, q]];

  while (stack.length !== 0) {
    const [np, nq] = stack.shift()!;

    if (!np && !nq) continue;
    if (!np || !nq) return false;
    if (np.val !== nq.val) return false;

    stack.unshift([np.left, nq.left]);
    stack.unshift([np.right, nq.right]);
  }

  return true;
}

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

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  // both left and right node are NULL
  if (!left && !right) return true;
  // only one side is NULL
  if (!left || !right) return false;

  return (
    left.val === right.val &&
    isMirror(left.left, right.right) &&
    isMirror(left.right, right.left)
  );
}

/**
 * entry
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

export {};

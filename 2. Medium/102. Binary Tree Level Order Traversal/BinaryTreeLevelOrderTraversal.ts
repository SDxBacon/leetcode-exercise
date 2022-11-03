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

function levelOrder(root: TreeNode | null): number[][] {
  const queue = [root];

  const result = [] as number[][];

  while (queue.length !== 0) {
    const size = queue.length;
    const valList = [] as number[];

    for (let i = 0; i < size; i += 1) {
      const node = queue.shift();
      if (!node) continue;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      valList.push(node.val);
    }

    if (valList.length > 0) result.push(valList);
  }

  return result;
}

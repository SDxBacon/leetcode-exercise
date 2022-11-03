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
 * Problem 107. Level Order Bottom
 * BFS solution
 */
function levelOrderBottom(root: TreeNode | null): number[][] {
  const queue = [root];
  const result = [] as number[][];

  while (queue.length !== 0) {
    const level = queue.length;
    const valList = [] as number[];

    for (let i = 0; i < level; i += 1) {
      const head_node = queue.shift();
      if (!head_node) continue;
      if (head_node.left) queue.push(head_node.left);
      if (head_node.right) queue.push(head_node.right);

      valList.push(head_node.val);
    }
    if (valList.length > 0) result.unshift(valList);
  }

  return result;
}

export {};

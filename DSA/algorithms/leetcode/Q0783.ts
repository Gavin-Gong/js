/**
 * @link https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/submissions/
 * @param {TreeNode} root
 * @return {number}
 */
export function minDiffInBST(root) {
  let res = Infinity;
  let pre;
  function bfs(treeNode) {
    if (!treeNode) return;
    bfs(treeNode.left);
    if (pre !== undefined) {
      res = Math.min(res, treeNode.val - pre.val);
    }
    pre = treeNode;
    bfs(treeNode.right);
  }
  bfs(root);
  return res;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

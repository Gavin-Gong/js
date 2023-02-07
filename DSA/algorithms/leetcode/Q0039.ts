/**
 * @link https://leetcode-cn.com/problems/combination-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * TODO: 截枝优化
 */
export function combinationSum(nums, target) {
  const res = [];
  backtracking(nums, 0, target, [], res);
  return res;
}

function backtracking(nums, start, target, solution, res) {
  // 无法满足终止
  if (target < 0) {
    return;
  }
  if (target === 0) {
    // 满足 终止并保存结果
    res.push([...solution]); // 复制避免使用同一数组
    return;
  }
  // 继续向后查找
  for (let i = start; i < nums.length; i++) {
    solution.push(nums[i]);
    backtracking(nums, i, target - nums[i], solution, res);
    solution.pop();
  }
}

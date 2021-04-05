/**
 * @link https://leetcode-cn.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}\
 */
export function subsets(nums) {
  const res = [[]];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    for (let j = res.length - 1; j >= 0; j--) {
      res.push([...res[j], num]);
    }
  }
  return res;
}

/**
 * 动态规划
 * [] -> []
 * [1] -> [] [1]
 * [1, 2] -> [] [1] [2] [1,2]
 * [1, 2, 3] -> [] [1] [2] [1,2] [3] [1, 3] [2, 3] [1,2,3]
 */

/**
 * @desc 回溯
 * @param {*} nums
 * @returns
 */
export function subsetsWithBacktrace(nums) {
  const res = [];
  backtrack(nums, 0, [], res);
  return res;
}

function backtrack(nums, start, slt, res) {
  res.push(slt.slice());
  for (let i = start; i < nums.length; i++) {
    slt.push(nums[i]);
    backtrack(nums, i + 1, slt, res);
    slt.pop();
  }
}

/**
 * 0 [1, 2, 3]
 * 1 [2, 3]
 * 2 [3]
 * 3 []
 * 2 [3] pop 3
 * 1 [2, 3] pop 2 -> push 3 -> pop 3
 * 0 [1, 2, 3] -> pop 1 -> push 2
 */

/**
 * 1, 2, 3, 4
 * 2, 3, 4
 * 3, 4
 * 4
 * -----
 * 1, 2, 3, 4
 * 2, 3, 4
 * 4
 * -----
 * 1, 2, 3, 4
 * 3, 4
 * 4
 * -----
 * 1, 2, 3, 4
 * 4
 * -----
 * 2, 3, 4
 * 3, 4
 * 4
 * -----
 * 2, 3, 4
 * 4
 * -----
 * 3, 4
 * 3
 */

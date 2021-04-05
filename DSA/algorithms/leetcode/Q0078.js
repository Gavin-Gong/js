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

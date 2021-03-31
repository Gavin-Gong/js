/**
 * @description
 * @link https://leetcode-cn.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
export function subsetsWithDup(nums) {
  const res = [[]];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num = map.get(nums[i]);
    map.set(nums[i], num === undefined ? 1 : ++num);
  }
  for (const [num, count] of map) {
    const len = res.length;
    for (let j = 0; j < len; j++) {
      for (let k = 1; k <= count; k++) {
        res.push([...res[j], ...Array(k).fill(num)]);
      }
    }
  }
  return res;
}

/**
 *
 * 空 []
 * 单元素 -> 取决于该数字个数
 * 多元素 -> 组成元素的个数x y z -> x * y * z
 * [[]]
 * [[], [1]]
 * [[], [1], [2], [2, 2]]
 * [[], [1], [2], [2, 2], [1, 2], [1, 2, 2]]
 */

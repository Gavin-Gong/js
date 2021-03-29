/**
 * @desc [10,9,2,5,3,7,101,18] -> 4
 * @link https://leetcode.com/problems/longest-increasing-subsequence/
 * @link http://hcysun.me/vue-design/zh/renderer-diff.html#%E6%B1%82%E8%A7%A3%E6%9C%80%E9%95%BF%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97
 * @param {number[]} nums
 * @return {number}
 */
export function lengthOfLIS(nums) {
  const len = nums.length;
  const lenList = new Array(len).fill(1);
  for (let i = len - 1; i >= 0; i--) {
    const curNum = nums[i];
    let j = i + 1;
    while (j < len) {
      if (curNum < nums[j]) {
        const curLen = 1 + lenList[j];
        lenList[i] = curLen > lenList[i] ? curLen : lenList[i];
      }
      j++;
    }
  }
  return Math.max(...lenList);
}

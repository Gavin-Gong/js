/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
export function numSubarraysWithSum(nums, goal) {
  const map = new Map();
  let sum = 0;
  let res = 0;
  for (const num of nums) {
    map.set(sum, (map.get(sum) ?? 0) + 1);
    sum += num;
    res += map.get(sum - goal) ?? 0;
  }
  return res;
}

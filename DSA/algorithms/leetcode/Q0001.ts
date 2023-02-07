// https://leetcode-cn.com/problems/two-sum/solution/1-liang-shu-zhi-he-javascript-san-chong-jie-fa-by-/
// https://leetcode.com/problems/two-sum/

export default([
  function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
  }
])

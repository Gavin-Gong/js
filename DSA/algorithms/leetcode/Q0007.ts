function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const len = nums.length
  const results = []

  for (let i = 0; i < len; i++) {
    let start = i + 1;
    let end = len - 1;
    // 重复数字
    if (i> 0 && nums[i] == nums[i - 1]) continue;
    while(start < end) {
      // 重复数字
      while (start > i + 1 && start < len && nums[start] == nums[start - 1]) start++;
      const sum = nums[i] + nums[start] + nums[end]

      if (start >= end) {
        break
      }
      if (sum === 0) {
        results.push([
          nums[i],
          nums[start],
          nums[end]
        ])
        start++
      } else if (sum > 0) {
        end --
      } else if (sum < 0) {
        start ++
      }
    }
  }
  return results
};
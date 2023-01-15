/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const n = nums.length / 2;

  const newNums = [];
  for (let i = 0; i < n; i++) {
    const num = nums[i * 2];
    const nextNum = nums[i * 2 + 1];
    if (i % 2) {
      newNums[i] = Math.max(num, nextNum);
    } else {
      newNums[i] = Math.min(num, nextNum);
    }
  }

  return minMaxGame(newNums);
};

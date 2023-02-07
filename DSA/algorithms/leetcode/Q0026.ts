/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 1) return nums;
  let prev = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] === prev) {
      nums.splice(i + 1, 1);
    } else {
      prev = nums[i];
    }
  }
  return nums;
};

export const removeDuplicatesByDpointer = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      nums[++j] = nums[i];
    }
  }
  return nums.splice(0, j);
};

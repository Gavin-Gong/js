/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    const mid = start + (((end - start) / 2) >>> 0);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return nums[start];
};

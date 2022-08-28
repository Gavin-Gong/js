/**
 * @desc
 */
export function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      // most case: just return target
      return mid;
      // --- if searching leftBound
      // leftBound = mid;
      // r = mid;
      // --- if searching rightBound
      // rightBound = mid;
      // l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
}

/**
 * @desc nums = [5,7,7,8,8,10], target = 8 输出：[3,4]
 * @link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function searchRange(nums, target) {
  const start = binarySearchLeftTarget(nums, target);
  return [start, binarySearchRightTarget(nums, target, start >= 0 ? start : 0)];
}

/**
 * @desc 搜索左边
 * @param {number[]} nums
 * @param {number} target
 */
function binarySearchLeftTarget(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target && nums[mid - 1] !== target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] === target && nums[mid - 1] === target) {
      end = mid - 1;
    }
  }
  return -1;
}

/**
 * @desc 搜索右边
 * @param {number[]} nums
 * @param {number} target
 */
function binarySearchRightTarget(nums, target, s = 0) {
  let start = s;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target && nums[mid + 1] !== target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] === target && nums[mid + 1] === target) {
      start = mid + 1;
    }
  }
  return -1;
}

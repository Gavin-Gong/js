/**
 * @desc nums = [5,7,7,8,8,10], target = 8 输出：[3,4]
 * TODO: 优化点 -> 第一次搜索出 target 后, 第二次基于 第一次的下标开始查找
 * @link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function searchRange(nums, target) {
  return [binarySearchLeftTarget(nums, target), binarySearchRightTarget(nums, target)];
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
function binarySearchRightTarget(nums, target) {
  let start = 0;
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

function binarySearchSingleTarget(nums, target, direction, start = 0) {}

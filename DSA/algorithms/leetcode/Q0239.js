/**
 * @desc 滑动视窗
 * @link https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const maxSlidingWindow = function (nums, k) {
  const window = []; // index
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    // 移除越界的头部元素(递减序列会出现这种情况)
    if (window.length > 0 && window[0] === i - k) {
      window.shift();
    }
    // 一旦遇到更大的元素则把之前的 pop 出去，window 中只保留最大的元素，
    // window 中会一直维持一个最大长度为 k 的稳定的递减序列
    // 所以在视窗遍历完成后，window 的第一个元素一定会是最大的
    while (window.length > 0 && nums[window[window.length - 1]] < nums[i]) {
      window.pop();
    }

    // 推入元素
    window.push(i);

    // 一次视窗遍历完成, 第一个一定是最大的
    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }

  return result;
};

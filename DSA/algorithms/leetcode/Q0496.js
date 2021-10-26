/**
 * @desc 倒序遍历维护一个单调栈 [6, 4, 2]，
 * 遍历到某数字时, 如果该数字大于栈顶元素则，弹出栈顶元素，直到栈内元素有大于该数或者栈为空时，将该数字压入栈中
 * 而且一定是基于该数字的上一个数字做得增序栈，所以栈的最后一个元素一定是右边第一个大数字
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const map = new Map();

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  return new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
};

export { nextGreaterElement };

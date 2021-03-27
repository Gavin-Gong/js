/**
 * @desc  stack 当中暂存的一定是非递增的序列（[3,2,2] 这种也算），当主循环遍历到一个打破序列的元素，
 * 那么拿这个元素跟逐个跟之前序列的比较
 * @link https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} t
 * @return {number[]}
 */
export const dailyTemperatures = function (t) {
  const len = t.length
  const result = Array(len).fill(0);
  const stack = [];
  for (let i = 0; i < t.length; i++) {
    while (stack.length > 0 && t[i] > t[stack[stack.length - 1]]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }
  return result;
};

// 3 2 1 2 3

// 2 3 4 3 2 1 2 3

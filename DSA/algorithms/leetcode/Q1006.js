/**
 * @link https://leetcode-cn.com/problems/clumsy-factorial/submissions/
 * @param {number} N
 * @return {number}
 */
export function clumsy(N) {
  let res = null;
  for (let i = 0; i <= N - 1; ) {
    const a = N - i;
    const b = N - i - 1;
    const c = N - i - 2;
    const d = N - i - 3;
    if (res === null) {
      res = calcList([a, b <= 0 ? 1 : b, c <= 0 ? 1 : c, d <= 0 ? 0 : -d]);
    } else {
      res = res - calcList([a, b <= 0 ? 1 : b, c <= 0 ? 1 : c, d <= 0 ? 0 : d]);
    }
    i = i + 4;
  }
  return res;
}

function calcList(list) {
  return (((list[0] * list[1]) / list[2]) >> 0) - list[3];
}

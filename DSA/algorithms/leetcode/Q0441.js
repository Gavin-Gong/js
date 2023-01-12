/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let line = 0;
  let i = 1;
  let sum = 0;
  while (i <= n) {
    if (sum + line + 1 <= n) {
      line += 1;
      sum += line;
      i += line + 1;
    }
  }
  return line;
};

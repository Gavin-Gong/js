/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let total = 0;
  let line = 0;
  for (let i = 0; i < n; i++) {
    total += i + 1;
    if (total > n) break;
    line++;
  }
  return line;
};

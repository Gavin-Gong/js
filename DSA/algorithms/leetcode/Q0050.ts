/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export const pow = function (x, n) {
  if (n === 1) return x;
  if (n === 0) return 1;
  if (n === -1) return 1 / x;
  if (n % 2 === 0) {
    return pow(x * x, n / 2);
  } else {
    return pow(x * x, Math.floor(n / 2)) * x;
  }
};

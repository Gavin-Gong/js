/**
 * @desc 依次取最后一位相加
 * >>> 转无符号
 * @link https://leetcode.com/problems/reverse-bits/
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export function reverseBits(n) {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = (res << 1) + (n & 1);
    n = n >>> 1;
  }
  return res >>> 0;
}

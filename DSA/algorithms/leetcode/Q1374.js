/**
 * @link https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts/submissions/
 * @param {number} n
 * @return {string}
 */
export function generateTheString(n) {
  const sb = "";
  if (n % 2 === 1) {
    return sb + "a".repeat(n);
  }
  return sb + "a".repeat(n - 1) + "b";
}

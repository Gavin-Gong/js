/**
 * @link https://leetcode-cn.com/problems/decode-string/submissions/
 * @tag DFS
 * @param {string} s
 * @return {string}
 */
export function decodeString(s) {
  let i = -1;
  function dfs() {
    let count = "";
    let word = "";
    for (++i; i < s.length; i++) {
      let char = s[i];
      if (char === "[") {
        // 向后取到整个单词
        word += dfs().repeat(count);
        count = 0;
      } else if (char === "]") {
        break;
      } else if (char >= "0" && char <= "9") {
        count += char;
      } else {
        word += char;
      }
    }
    return word;
  }
  return dfs();
}

/**
 * @link https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
export function isValidParentheses (s) {
  const array = s.split("")
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ])
  const stack = []
  for (let i = 0; i < array.length; i++) {
    const ele = array[i]
    if (["(", "[", "{"].includes(ele)) {
      stack.push(ele)
    } else if (map.get(ele) === stack[stack.length - 1]) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}
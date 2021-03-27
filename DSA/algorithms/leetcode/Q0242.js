// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram (s, t) {
  if (s.length !== t.length) return false

  const map = new Map
  for (let i = 0; i < s.length; i++) {
    let curCount = map.get(s[i]) || 0
    map.set(s[i], ++curCount)
  }
  for (let i = 0; i < t.length; i++) {
    let curCount = map.get(t[i]) || 0
    if (curCount === 0) {
      return false
    } else {
      map.set(t[i], --curCount)
    }
  }

  for (let value of map.values()) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram1(s, t) {
  // https://jsbench.me/t4kmr9nrom/1  字符串转数组 Array.from bi
  return Array.from(s).sort().join("") === Array.from(t).sort().join("")
}

// https://jsbench.me/0dkmr9mgg1/1
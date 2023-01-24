/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === t) {
    return true;
  }
  const _s = s.split("");
  const _t = t.split("");
  for (const char of _t) {
    if (_s[0] === char) {
      _s.shift();
    }
    if (_s.length === 0) {
      return true;
    }
  }
  return false;
};

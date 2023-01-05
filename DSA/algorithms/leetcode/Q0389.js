/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
export const findTheDifference = function (s, t) {
  const _s = s.split("").sort();
  const _t = t.split("").sort();
  for (let i = 0; i < _t.length; i++) {
    const c = _t[i];
    if (c !== _s[i]) return c;
  }
};

/**
 * @param {string} s
 * @return {string}
 */
export const frequencySort = function (s) {
  const map = new Map();
  for (const char of s) {
    map.set(char, !map.has(char) ? 1 : map.get(char) + 1);
  }
  return Array.from(map)
    .sort((a, z) => z[1] - a[1])
    .map(([k, v]) => k.repeat(v))
    .join("");
};

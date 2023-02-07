/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let res = 0;
  const chars = s.split("");

  for (const char of chars) {
    if (char === "L") count++;
    if (char === "R") count--;
    if (count === 0) res++;
  }
  return res;
};

// LLLRRR
// LLLRRRRL

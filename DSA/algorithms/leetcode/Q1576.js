/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  //
  const l = s.split("");
  l.forEach((char, i) => {
    if (char === "?") {
      const excludes = [];
      if (i >= 1) {
        excludes.push(l[i - 1]);
      }
      if (i < l.length - 1) {
        excludes.push(l[i + 1]);
      }

      const words = set.filter((c) => !excludes.includes(c));
      l[i] = words[0];
    }
  });
  return l.join("");
};

let set = ["a", "b", "c"];

console.log(modifyString("ubv?w"));

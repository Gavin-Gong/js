/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  const list = s.split("|");
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      count = count + list[i].split("").filter((v) => v === "*").length;
    }
  }
  return count;
};

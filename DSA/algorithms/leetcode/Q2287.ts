/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  let strArr = s.split("");
  let charArr = target.split("");
  const map = new Map();
  const charMap = new Map();
  charArr.forEach((c) => {
    if (charMap.get(c)) {
      charMap.set(c, charMap.get(c) + 1);
    } else {
      charMap.set(c, 1);
    }
  });
  strArr.forEach((c) => {
    if (charArr.includes(c)) {
      if (map.get(c)) {
        map.set(c, map.get(c) + 1);
      } else {
        map.set(c, 1);
      }
    }
  });
  return Math.min(
    ...charArr.map((c) => {
      if (map.get(c)) {
        return Math.floor(map.get(c) / charMap.get(c));
      } else {
        return 0;
      }
    })
  );
};

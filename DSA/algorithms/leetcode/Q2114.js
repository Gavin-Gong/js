/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return sentences.reduce((acc, cur) => {
    const count = cur.split(" ").length;
    return count > acc ? count : acc;
  }, 0);
};

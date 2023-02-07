import _ from "lodash";
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let abs = Infinity;
  let pairs = [];
  for (let j = 0; j < arr.length; j++) {
    const base = arr[j];
    // TODO: 只发生在相邻元素之中
    for (let i = j + 1; i < arr.length; i++) {
      const cur = arr[i];
      const v = Math.abs(base - cur);
      const pair = [base, cur];
      if (v < abs) {
        abs = v;
        pairs = [pair];
      } else if (v === abs) {
        pairs.push(pair);
      }
    }
  }
  return pairs;
};

minimumAbsDifference([4, 2, 1, 3]);

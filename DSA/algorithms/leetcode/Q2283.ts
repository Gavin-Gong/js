/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const nums = num.split("");
  const map = new Map();

  for (const n of nums) {
    if (map.get(n) !== undefined) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  console.log(map);
  for (let i = 0; i < nums.length; i++) {
    if (Number(nums[i]) !== (map.get(String(i)) ?? 0)) {
      return false;
    }
  }
  return true;
};

// digitCount("1210");

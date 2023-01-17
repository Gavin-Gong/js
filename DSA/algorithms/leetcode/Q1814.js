const MOD = 1000000007;
/**
 * @param {number[]} nums
 * @return {number}
 */

var countNicePairs = function (nums) {
  let count = 0;
  const map = new Map();
  for (let j = 0; j < nums.length; j++) {
    const revNum = rev(nums[j]);
    count = (count + (map.get(nums[j] - revNum) || 0)) % MOD;
    map.set(nums[j] - revNum, (map.get(nums[j] - revNum) || 0) + 1);
  }
  return count;
};

// 123 -> 321
function rev(num) {
  let temp = num;
  let j = 0;
  while (temp > 0) {
    j = j * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return j;
}

console.log(countNicePairs([42, 11, 1, 97]));

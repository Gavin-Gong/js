/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const nums = String(num).split("");
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (e === "6") {
      nums.splice(i, 1, "9");
      return Number(nums.join(""));
    }
  }

  return Number(nums.join(""));
};

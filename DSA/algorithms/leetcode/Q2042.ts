export function areNumbersAscending(s) {
  const nums = s.match(/\d+/g);
  if (!nums) return true;

  let res = true;
  for (let i = 0; i < nums.length - 1; i++) {
    if (Number(nums[i]) >= Number(nums[i + 1])) {
      return false;
    }
  }
  return res;
}

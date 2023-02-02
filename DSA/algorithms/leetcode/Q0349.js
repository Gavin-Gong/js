/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const map = new Map();
  for (const i of nums1) {
    map.set(i, 1);
  }
  for (const i of nums2) {
    if (map.get(i)) {
      map.set(i, 2);
    }
  }
  return Array.from(map)
    .filter((i) => i[1] > 1)
    .map((i) => i[0]);
};

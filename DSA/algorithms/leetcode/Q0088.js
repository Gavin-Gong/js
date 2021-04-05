/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1, m, nums2, n) {
  let l = m-- + n-- - 1;
  while (n >= 0 && m >= 0) {
    nums1[l--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  while (n >= 0) {
    nums1[l--] = nums2[n--];
  }
  return nums1;
}

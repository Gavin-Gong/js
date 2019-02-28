import mergeSort from '../sort.merge'

test("mergeSort", () => {
  expect(mergeSort([5, 2, 4, 1])).toEqual([1, 2, 4, 5]);
});
test("mergeSort", () => {
  expect(mergeSort([5, 2])).toEqual([2, 5]);
});
test("mergeSort", () => {
  expect(mergeSort([1, 5, 2])).toEqual([1, 2, 5]);
});
test("mergeSort: 空数组", () => {
  expect(mergeSort([])).toEqual([])
});
test("mergeSort: 单个元素", () => {
  expect(mergeSort([1])).toEqual([1])
});
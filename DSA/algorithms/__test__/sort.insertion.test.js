import insertionSort from '../sort.insertion'

test("insertionSort", () => {
  expect(insertionSort([5, 2, 4, 1])).toEqual([1, 2, 4, 5]);
});
test("insertionSort", () => {
  expect(insertionSort([5, 2])).toEqual([2, 5]);
});
test("insertionSort", () => {
  expect(insertionSort([1, 5, 2])).toEqual([1, 2, 5]);
});
test("insertionSort: 重复元素", () => {
  expect(insertionSort([1, 5, 2, 2])).toEqual([1, 2, 2, 5]);
});
test("insertionSort: 空数组", () => {
  expect(insertionSort([])).toEqual([])
});
test("insertionSort: 单个元素", () => {
  expect(insertionSort([1])).toEqual([1])
});
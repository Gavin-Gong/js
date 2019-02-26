import bubbleSort from '../sort.bubble'

test("bubbleSort", () => {
  expect(bubbleSort([5, 2, 4, 1])).toEqual([1, 2, 4, 5]);
});
test("bubbleSort", () => {
  expect(bubbleSort([5, 2])).toEqual([2, 5]);
});
test("bubbleSort", () => {
  expect(bubbleSort([1, 5, 2])).toEqual([1, 2, 5]);
});
test("bubbleSort: 重复元素", () => {
  expect(bubbleSort([1, 5, 2, 2])).toEqual([1, 2, 2, 5]);
});
test("bubbleSort: 空数组", () => {
  expect(bubbleSort([])).toEqual([])
});
test("bubbleSort: 单个元素", () => {
  expect(bubbleSort([1])).toEqual([1])
});
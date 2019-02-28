import countingSort from '../sort.counting'

test("countingSort", () => {
  expect(countingSort([5, 2, 4, 1])).toEqual([1, 2, 4, 5]);
});
test("countingSort", () => {
  expect(countingSort([5, 2])).toEqual([2, 5]);
});
test("countingSort", () => {
  expect(countingSort([1, 5, 2])).toEqual([1, 2, 5]);
});
test("countingSort: 重复元素", () => {
  expect(countingSort([1, 5, 2, 2])).toEqual([1, 2, 2, 5]);
});
test("countingSort: 空数组", () => {
  expect(countingSort([])).toEqual([])
});
test("countingSort: 单个元素", () => {
  expect(countingSort([1])).toEqual([1])
});
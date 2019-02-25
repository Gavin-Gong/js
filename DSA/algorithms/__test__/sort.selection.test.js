import selectionSort from '../sort.selection'

test("selectionSort", () => {
  expect(selectionSort([5, 2, 4, 1])).toEqual([1, 2, 4, 5]);
});
test("selectionSort", () => {
  expect(selectionSort([5, 2])).toEqual([2, 5]);
});
test("selectionSort", () => {
  expect(selectionSort([1, 5, 2])).toEqual([1, 2, 5]);
});
test("selectionSort: 空数组", () => {
  expect(selectionSort([])).toEqual([])
});
test("selectionSort: 单个元素", () => {
  expect(selectionSort([1])).toEqual([1])
});
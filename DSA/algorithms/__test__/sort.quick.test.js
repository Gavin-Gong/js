import quickSort from '../sort.quick'

test("quickSort", () => {
  expect(quickSort([5, 2, 4, 1])).toEqual([1,2,4,5]);
});
test("quickSort", () => {
  expect(quickSort([5, 2])).toEqual([2,5]);
});
test("quickSort", () => {
  expect(quickSort([1, 5, 2])).toEqual([1,2,5]);
});
test("quickSort: 空数组", () => {
  expect(quickSort([])).toEqual([])
});
test("quickSort: 单个元素", () => {
  expect(quickSort([1])).toEqual([1])
});
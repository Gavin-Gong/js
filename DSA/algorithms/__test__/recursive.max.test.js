import sum from '../recursive.sum.js'

test("sum", () => {
  expect(sum([1, 2, 3, 4])).toBe(10)
});
test("sum: 空数组", () => {
  expect(sum([])).toBe(0)
});
test("sum: 单个元素", () => {
  expect(sum([4])).toBe(4)
});
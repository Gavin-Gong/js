import count from '../recursive.count.js'

test("count", () => {
  expect(count([1, 2, 3, 4])).toBe(4)
});
test("count: 空数组", () => {
  expect(count([])).toBe(0)
});
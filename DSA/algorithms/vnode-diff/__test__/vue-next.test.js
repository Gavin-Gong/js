import { diff } from "../vue-next"


describe("vue diff", () => {
  test('resort item', () => {
    expect(diff([1, 2, 3], [3, 2, 1])).toEqual([3, 2, 1])
  })

  test('add item', () => {
    expect(diff([1, 2, 3], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(diff([1, 2, 3], [1, 2, 4, 3])).toEqual([1, 2, 4, 3])
    expect(diff([], [1, 2, 4, 3])).toEqual([1, 2, 4, 3])
  })

  test('remove item', () => {
    expect(diff([1, 2, 3], [1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(diff([1, 2, 3], [1, 2])).toEqual([1, 2])
    expect(diff([1, 2, 3], [])).toEqual([])
  })

  test('multi condition', () => {
    // expect(diff([1, 2, 3, 4, 5], [6, 3, 2, 1])).toEqual([6, 3, 2, 1])
    expect(diff([1, 2, 3, 5], [3, 2, 1, 6])).toEqual([3, 2, 1, 6])
  })
})
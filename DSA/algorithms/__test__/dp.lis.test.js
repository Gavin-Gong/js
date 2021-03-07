import { lis } from "../dp.lis"


describe("lis", () => {
  test('lis fn', () => {
    expect(lis([1, 2, 3, 4])).toEqual([0, 1, 2, 3])
  })
})
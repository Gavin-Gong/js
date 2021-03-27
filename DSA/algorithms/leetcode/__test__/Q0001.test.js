import fns from "../Q0001"
describe("S0001", () => {
  test('S0001 -> 01', () => {
    expect(fns[0]([1, 2, 3], 3)).toEqual([0, 1])
  })
})
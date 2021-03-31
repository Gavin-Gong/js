import { combinationSum } from "../Q0039";

describe("S0039", () => {
  test("S0039", () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    expect(combinationSum([2], 1)).toEqual([]);
    expect(combinationSum([1], 1)).toEqual([[1]]);
  });
});

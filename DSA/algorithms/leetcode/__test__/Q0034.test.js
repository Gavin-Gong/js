import { searchRange } from "../Q0034";

describe("S0034", () => {
  test("S0034", () => {
    expect(searchRange([1, 1, 2, 2, 3], 2)).toEqual([2, 3]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 7)).toEqual([1, 2]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 9)).toEqual([-1, -1]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 5)).toEqual([0, 0]);
    expect(searchRange([], 5)).toEqual([-1, -1]);
  });
});

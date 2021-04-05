import { subsets, subsetsWithBacktrace } from "../Q0078";

describe("S0078", () => {
  test("S0078", () => {
    expect(subsets([1, 2, 3])).toEqual([[], [1], [1, 2], [2], [2, 3], [1, 2, 3], [1, 3], [3]]);
    expect(subsets([0])).toEqual([[], [0]]);
    expect(subsets([])).toEqual([[]]);
  });
  test("S0078 -> backtrace", () => {
    expect(subsetsWithBacktrace([1, 2, 3])).toEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
    expect(subsetsWithBacktrace([0])).toEqual([[], [0]]);
    expect(subsetsWithBacktrace([])).toEqual([[]]);
  });
});

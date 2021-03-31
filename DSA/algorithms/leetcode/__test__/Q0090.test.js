import { subsetsWithDup } from "../Q0090";

describe("S0090", () => {
  test("S0090", () => {
    expect(subsetsWithDup([1, 2, 2])).toEqual([[], [1], [2], [2, 2], [1, 2], [1, 2, 2]]);
    expect(subsetsWithDup([0])).toEqual([[], [0]]);
  });
});

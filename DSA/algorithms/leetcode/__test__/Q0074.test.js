import { searchMatrix } from "../Q0074";

describe("S0074", () => {
  test("S0074", () => {
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        3
      )
    ).toEqual(true);
    expect(
      searchMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 60],
        ],
        13
      )
    ).toEqual(false);
    expect(searchMatrix([[1]], 0)).toEqual(false);
    expect(searchMatrix([[1], [3]], 3)).toEqual(true);
  });
});

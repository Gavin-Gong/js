import { findMin } from "../Q0153";

describe("S0190", () => {
  test("S0190", () => {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1);
    expect(findMin([11, 13, 15, 17])).toEqual(11);
    expect(findMin([3, 1, 2])).toEqual(1);
  });
});

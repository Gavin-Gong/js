import { binarySearch } from "../binarySearch";

describe("binary search", () => {
  test("binary search", () => {
    expect(binarySearch([1, 2, 3, 4], 2)).toEqual(1);
  });
  test("not found", () => {
    expect(binarySearch([1, 2, 3, 4], 9)).toEqual(undefined);
    expect(binarySearch([1, 2, 3, 4], -1)).toEqual(undefined);
    expect(binarySearch([1, 2, 3, 5], 4)).toEqual(undefined);
  });
});

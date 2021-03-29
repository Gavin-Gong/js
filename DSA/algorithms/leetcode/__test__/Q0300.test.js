import { lengthOfLIS } from "../Q0300";

describe("S0300", () => {
  test("S0300", () => {
    expect(lengthOfLIS([73, 74, 75, 71, 69, 72, 76, 73])).toEqual(4);
    expect(lengthOfLIS([3, 3, 2, 1, 0])).toEqual(1);
    expect(lengthOfLIS([3, 3, 2, 1, 0, 4])).toEqual(2);
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toEqual(4);
  });
});

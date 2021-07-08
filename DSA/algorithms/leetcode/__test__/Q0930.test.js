import { numSubarraysWithSum } from "../Q0930";

describe("S0930", () => {
  test("S0930", () => {
    expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).toEqual(4);
    expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).toEqual(15);
  });
});

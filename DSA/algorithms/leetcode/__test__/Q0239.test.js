import { maxSlidingWindow } from "../Q0239";

describe("S0239", () => {
  test("S0239", () => {
    expect(maxSlidingWindow([1, 3, 2, 1, 0, 4], 3)).toEqual([3, 3, 2, 4]);
  });
});

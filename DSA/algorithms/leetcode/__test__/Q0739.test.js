import { dailyTemperatures } from "../Q0739";

describe("S0739", () => {
  test("S0739", () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
    expect(dailyTemperatures([3, 2, 1, 0])).toEqual([0, 0, 0, 0]);
    expect(dailyTemperatures([3, 2, 1, 0, 4])).toEqual([4, 3, 2, 1, 0]);
  });
});

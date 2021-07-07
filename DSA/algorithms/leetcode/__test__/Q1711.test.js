import { countPairs } from "../Q1711";

describe("S1711", () => {
  test("S1711", () => {
    expect(countPairs([1, 3, 5, 7, 9])).toEqual(4);
    expect(countPairs([1, 1, 1, 3, 3, 3, 7])).toEqual(15);
    expect(
      countPairs([149, 107, 1, 63, 0, 1, 6867, 1325, 5611, 2581, 39, 89, 46, 18, 12, 20, 22, 234])
    ).toEqual(12);
  });
});

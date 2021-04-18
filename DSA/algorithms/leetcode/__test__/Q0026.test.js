import { removeDuplicates } from "../Q0026";

describe("S0026", () => {
  test("S0026", () => {
    expect(removeDuplicates([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  });
});

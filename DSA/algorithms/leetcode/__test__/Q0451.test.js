import { frequencySort } from "../Q0451";

describe("S0451", () => {
  test("S0451", () => {
    expect(frequencySort("tree")).toEqual("eetr");
    expect(frequencySort("cccaaa")).toEqual("cccaaa");
    expect(frequencySort("Aabb")).toEqual("bbAa");
  });
});

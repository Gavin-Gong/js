import { reverseBits } from "../Q0190";

describe("S0190", () => {
  test("S0190", () => {
    expect(reverseBits(4294967293)).toEqual(3221225471);
    expect(reverseBits(43261596)).toEqual(964176192);
  });
});

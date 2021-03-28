import { pow } from "../Q0050";
describe("S0050", () => {
  test("S0050 -> 01", () => {
    expect(pow(2, 3)).toEqual(8);
    expect(pow(2, -2)).toEqual(1 / 4);
    expect(pow(2, 0)).toEqual(1);
    expect(pow(2, 2)).toEqual(4);
    expect(pow(2, 4)).toEqual(16);
    expect(pow(2, 10)).toEqual(1024);
  });
});

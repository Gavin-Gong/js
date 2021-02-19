import { inesertBefore, removeChild } from "../_util"

describe("vnode-diff util fn", () => {
  test("util.insertBefore", () => {
    expect(inesertBefore([1, 2, 3], 3, 2)).toEqual([1, 3, 2]);
    expect(inesertBefore([1, 2, 3], 4, 2)).toEqual([1, 4, 2, 3]);
    expect(inesertBefore([1, 2, 3], 4, 5)).toEqual([1, 2, 3, 4]);
    expect(inesertBefore([1, 2, 3], 4, 1)).toEqual([4, 1, 2, 3]);

    expect(inesertBefore([1, 2, 3], 4, null)).toEqual([1, 2, 3, 4]);
    expect(inesertBefore([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
});


describe("vnode-diff util fn", () => {
  test("util.removeChild", () => {
    expect(removeChild([1, 2, 3], 3)).toEqual([1, 2]);
    expect(removeChild([1, 2, 3], 4)).toEqual([1, 2, 3]);
  });
});
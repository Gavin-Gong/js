import { decodeString } from "../Q0394";

describe("S0393", () => {
  test("S0394", () => {
    expect(decodeString("3[a]2[bc]")).toEqual("aaabcbc");
    expect(decodeString("3[a2[c]]")).toEqual("accaccacc");
    expect(decodeString("2[abc]3[cd]ef")).toEqual("abcabccdcdcdef");
    expect(decodeString("abc3[cd]xyz")).toEqual("abccdcdcdxyz");
  });
});

import { compose, compose1 } from "../compose";

function triple(x) {
  return 3 * x;
}
function pow(x) {
  return Math.pow(x, 2);
}

describe("compose", () => {
  test("compose order", () => {
    expect(
      compose(
        pow,
        triple
      )(2)
    ).toBe(36);
  });
  test("compose reverse order", () => {
    expect(
      compose(
        triple,
        pow
      )(2)
    ).toBe(12);
  });
  test("compose one fn", () => {
    expect(compose(pow)(2)).toBe(4);
  });
});

describe("compose redux", () => {
  test("compose order", () => {
    expect(compose1(pow, triple)(2)).toBe(36);
  });
  test("compose reverse order", () => {
    expect(compose1(triple, pow)(2)).toBe(12);
  });
  test("compose one fn", () => {
    expect(compose1(pow)(2)).toBe(4);
  });
});

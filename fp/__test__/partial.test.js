import { partial } from "../partial";

function add(x, y, z) {
  return x + y + z;
}

// test("partial", () => {
//   const partialAdd = partial(add, 2, 8, 10);
//   expect(partialAdd(10)).toBe(20);
// });

/**
 Do not return anything, modify s in-place instead.
 */
export function reverseString(s: string[]): void {
  let left = 0
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    let list = ["h", "e", "l", "l", "o"]
    reverseString(list)
    expect(list).toEqual(["o", "l", "l", "e", "h"])
  })
}
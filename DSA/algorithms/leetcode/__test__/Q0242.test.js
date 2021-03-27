import { isAnagram, isAnagram1 } from "../Q0242"

describe("S0242", () => {
  test('S0242', () => {
    expect(isAnagram("anagram", "nagaram")).toEqual(true)
    expect(isAnagram("rat", "cat")).toEqual(false)
    expect(isAnagram("at", "cat")).toEqual(false)

    expect(isAnagram1("anagram", "nagaram")).toEqual(true)
    expect(isAnagram1("rat", "cat")).toEqual(false)
    expect(isAnagram1("at", "cat")).toEqual(false)
  })
})
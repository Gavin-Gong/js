import { isValidParentheses } from "../Q0020"

describe("S0242", () => {
  test('S0242', () => {
    expect(isValidParentheses("()[()][]{}")).toEqual(true)
    expect(isValidParentheses("()[()][]{{}")).toEqual(false)
    expect(isValidParentheses("[")).toEqual(false)
    expect(isValidParentheses("}}")).toEqual(false)
  })
})
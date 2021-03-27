import { isValidParentheses } from "../Q0020"

describe("S0020", () => {
  test('S0020', () => {
    expect(isValidParentheses("()[()][]{}")).toEqual(true)
    expect(isValidParentheses("()[()][]{{}")).toEqual(false)
    expect(isValidParentheses("[")).toEqual(false)
    expect(isValidParentheses("}}")).toEqual(false)
  })
})
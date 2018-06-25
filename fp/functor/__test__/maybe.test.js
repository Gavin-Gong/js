import { Maybe } from '../maybe'

describe('maybe functor', () => {
  test('success', () => {
    expect(Maybe.of('x').map(v => v.toUpperCase()).value).toBe("X")
  })
  test('fail', () => {
    expect(Maybe.of().map(v => v.toUpperCase()).value).toBe(null)
  })
})
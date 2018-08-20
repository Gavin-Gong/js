import { TestScheduler } from "rxjs/testing"

describe("test for test", () => {
  let scheduler = new TestScheduler((a, b) => expect(a).toStrictEqual(b) )
  test("pass my first test", () => {
    const source = '--a--b--|'
    const expected = '--a--b--|'

    const source$ = scheduler.createColdObservable(source)
    scheduler.expectObservable(source$).toBe(expected);
    scheduler.flush()
  })
})
import { TestScheduler } from "rxjs/testing"

import { of$ } from '../of'

let scheduler = new TestScheduler((actual, expected) => {
  expect(actual).toStrictEqual(expected)
})
describe("test for test", () => {
  test("pass my first test", () => {
    // const source = '--a--b--|'
    const expected = '--1|'
    scheduler.run(helpers => {
      const { cold, hot, expectObservable, expectSubscriptions } = helpers
      expectObservable(of$).toBe(expected)
    })

    // const source$ = scheduler.createColdObservable(source)
    // scheduler.expectObservable(of$).toBe(expected);
    // scheduler.flush()
  })
})
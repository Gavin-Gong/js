import {
  decorator,
  decoratorFn,
  prop,
  log
} from '../decorator'


describe("decorator", () => {
  test("注入一个静态属性", () => {
    @decorator
    class Test {}

    expect(Test.useDecorator).toBe(true)
  })

  test("自定义参数注入", () => {
    @decoratorFn(false)
    class Test{}

    expect(Test.useDecorator).toBe(false)
  })

  test("注入属性和属性值", () => {
    @prop("prop", "value")
    class Test{}
    const test = new Test()

    expect(test.prop).toBe("value")
  })
  test("多重注入属性和属性值", () => {
    // 倒序执行 先2 再 1
    @prop("prop", "1")
    @prop("prop", "2")
    class Test{}
    const test = new Test()

    expect(test.prop).toBe("1")
  })
  test("注入属性和属性值", () => {
    @prop("prop", "value")
    class Test{
      constructor() {
        this.prop = "v"
      }
    }

    const test = new Test()
    expect(test.prop).toBe("v")
  })
  test("修饰函数", () => {
    class Test{
      @log("gg")
      say() {
        return "Hello"
      }
    }

    const test = new Test()
    expect(test.say()).toBe("Hello")
  })
})
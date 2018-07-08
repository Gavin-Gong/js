// 添加静态属性
export const decorator = target => {
  target.useDecorator = true;
};

// 自定义参数
export const decoratorFn = (bool) => {
  return (target) => {
    target.useDecorator = bool
  }
}

// 添加原型属性 和 值
export const prop = (key, value) => {
  return (target) => {
    Object.assign(target.prototype, {
      [key]: value
    })
  }
}

// 修饰类的属性
/**
 * target {}
 * name 属性名
 * descriptor {
   value: [Function: say],
   writable: true,
   enumerable: false,
   configurable: true
 }
 */
export const log = (text) => {
  return (target, name, descriptor) => {
    console.log(target, name, descriptor)
    return descriptor
  }
}
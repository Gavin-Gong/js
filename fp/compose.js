export const compose = (...args) => {
  let len = args.length;
  let start = len - 1;
  return (...args1) => {
    let result = args[start].apply(this, args1); // 初始参数
    let i = start;
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
};

/**
 * @desc redux 版本 compose
 */
export const compose1 = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

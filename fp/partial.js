export const partial = (fn, ...args) => (args2) => fn.apply(this, [...args, ...args2]);

export const partialPlaceholder = (fn) => {};

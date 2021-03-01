import { inesertBefore, removeChild, nextSibling } from "./_util.js";

/**
 * @desc inferno & vue3 中采用的最长子序列算法
 * @param {[number]} oldChildren
 * @param {[number]} newChildren
 */
export function diff(oldChildren, newChildren) {
  const _oldChildren = oldChildren.map((v) => v); // clone

  let oldIndex = _oldChildren.length - 1;
  let newIndex = newChildren.length - 1;

  let i = 0;
  let oldNode = _oldChildren[i];
  let newNode = _oldChildren[i];

  // 类似双端算法, 
  outer: {
    // 更新前置元素
    while (oldNode === newNode) {
      // patch
      i++;
      if (i > oldIndex || i > newIndex) {
        break outer;
      }
      oldNode = oldNode[i];
      newNode = newNode[i];
    }

    // 更新后置元素
    oldNode = oldChildren[oldIndex];
    newNode = newChildren[newIndex];
    while (oldNode === newNode) {
      // patch
      newIndex--;
      oldIndex--;
      if (i > oldIndex || i > newIndex) {
        break outer;
      }
      oldNode = _oldChildren[oldIndex];
      newNode = _oldChildren[newIndex];
    }
  }
  if (i > oldIndex && i <= newIndex) {
    // 新增元素
  } else if (i > newIndex) {
    // 移除元素
    while(i <= oldIndex) {
      // TODO:
      i++
    }
  } else {
    // 遍历中间数组
    const newRemaining = newIndex - i + 1
    const source = new Array(newRemaining).fill(-1)
    const oldStartIdx = i
    const newStartIdx = i
    let hasMoved = false
    let position = 0
    for (let i = oldStartIdx; i < oldIndex; i++) {
      const oldNode = oldChildren[i]
      for (let k = newStartIdx; k < newIndex; k++) {
        const newNode = newChildren[k]
        if (oldNode === newNode) {
          source[k - newStartIdx] = i

          // 判断是否需要移动
          if(k < position) {
            hasMoved = true
          } else {
            position = k
          }
        }
      }
    }
  }
  return oldChildren;
}

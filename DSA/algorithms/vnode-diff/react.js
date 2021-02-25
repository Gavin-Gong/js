import { inesertBefore, removeChild, nextSibling } from "./_util.js"

/**
 * @desc React diff 算法
 * 进行双层循环, 一旦遇到相同的节点, 
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  const _oldChildren = oldChildren.map(v => v);
  let lastIndex = 0;

  if (newChildren.length === 0) {
    oldChildren = []
  }
  
  for (let n = 0; n < newChildren.length; n++) {
    const newNode = newChildren[n]
    // 暂存上一个节点的的最大 index, 
    // 如果后续节点相同且 index < lastIndex, 则说明该节点需要向后移动
    let hasFind = false; // 是否找到元素
    let o = 0; 
    for(o; o < _oldChildren.length; o++) {
      const oldNode = _oldChildren[o]
      if (newNode === oldNode) {
        hasFind = true
        if (o < lastIndex) {
          // 当前节点和后面节点顺序错位, 需要向前移动一位, 
          const refNode = nextSibling(oldChildren, newChildren[n - 1]) // TODO:
          inesertBefore(oldChildren, oldNode, refNode)
        } else {
          lastIndex = o
        }
        // 一旦有节点相同, 中断本次循环, 防止 o 继续更新下去 & 浪费性能
        break
      }
    }

    // oldChildren 里面找不到 newChildren 的元素 说明要新增
    // i 为 0 ,说明遍历的是第一个元素, 插入到 _oldChildren 的第一个节点即可
    // i >= 1, 直接插入到该元素前面
    if (!hasFind) {
      const refNode = n - 1 < 0 ? _oldChildren[0] : nextSibling(oldChildren, newChildren[n - 1])  // TODO:
      inesertBefore(oldChildren, newChildren[n], refNode)
    }

    // newChildren 里面找不到 oldChildren 里面的元素说明要移除
    for (let i = 0; i < _oldChildren.length; i++) {
      const item = _oldChildren[i];
      const hasFind = newChildren.find(v => v === item)
      if (!hasFind) {
        removeChild(oldChildren, item)
      }
    }
  }
  return oldChildren
}
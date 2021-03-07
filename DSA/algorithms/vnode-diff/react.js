import { inesertBefore, removeChild, nextSibling } from "./_util.js"

/**
 * @desc React diff 算法
 * 核心思想：进行双层循环, 一旦遇到相同的节点, 
 * 与上次记录的 oldChildren 中的最大 index 进行比较，
 * 如果本次 index >  lastIndex 则说明顺序新旧一致，无需移动，只需记录本次 index 到 lastIndex
 * 否则说明需要将本节点移动到上一个节点之后
 * 由于始终使用后移的方式来调整顺序，
 * 这种场景下 [1, 2, 3, ..., 100] -> [100, 1, 2, ..., 99]，需要将 1-99 向后移动，共计需要99次操作。
 * 而不是将 100 插入到 1 前面，这样只需一次操作
 * 操作指使用提供的 DOM API
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  let UIChildren = oldChildren.map(v => v);
  let lastIndex = 0;

  if (newChildren.length === 0) {
    UIChildren = []
  }
  
  for (let n = 0; n < newChildren.length; n++) {
    const newNode = newChildren[n]
    // 暂存上一个节点的的最大 index, 
    // 如果后续节点相同且 index < lastIndex, 则说明该节点需要向后移动
    let hasFind = false; // 是否找到元素
    let o = 0; 
    for(o; o < oldChildren.length; o++) {
      const oldNode = oldChildren[o]
      if (newNode === oldNode) {
        hasFind = true
        if (o < lastIndex) {
          // 当前节点和 n-1 节点顺序错位, 需要将当前节点插入到 n-1 后一位（的前面）, 
          const refNode = nextSibling(UIChildren, newChildren[n - 1])
          inesertBefore(UIChildren, oldNode, refNode)
        } else {
          lastIndex = o
        }
        // 一旦有节点相同, 中断内层循环, 防止继续更新下去浪费性能
        break
      }
    }

    // oldChildren 里面找不到 newChildren 的元素 说明要新增
    // i 为 0 ,说明遍历的是第一个元素, 插入到 UIChildren 的第一个节点即可
    // i >= 1, 直接插入到该元素前面
    if (!hasFind) {
      const refNode = n - 1 < 0 ? oldChildren[0] : nextSibling(UIChildren, newChildren[n - 1])
      inesertBefore(UIChildren, newChildren[n], refNode)
    }

    // newChildren 里面找不到 oldChildren 里面的元素说明要移除
    for (let i = 0; i < oldChildren.length; i++) {
      const item = oldChildren[i];
      const hasFind = newChildren.find(v => v === item)
      if (!hasFind) {
        removeChild(UIChildren, item)
      }
    }
  }
  return UIChildren
}
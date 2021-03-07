import { inesertBefore, removeChild, nextSibling } from "./_util.js"

/**
 * @desc snabbdom & vue2 中采用的双端比较算法
 * 一层循环同时遍历两个数组, 通过组合 oldStart, oldEnd 和 newStart，newEnd 进行双端比较
 * 一共会有四种情况，直到某一个数组遍历完成
 * 然后处理未遍历到的区间
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  let UIChildren = oldChildren.map(v => v) // 模拟 UI 元素
  let oldStartIdx = 0
  let newStartIdx = 0

  let oldEndIdx = oldChildren.length - 1
  let newEndIdx = newChildren.length - 1

  let oldStartNode = oldChildren[0]
  let newStartNode = newChildren[0]

  let oldEndNode = oldChildren[oldEndIdx]
  let newEndNode = newChildren[newEndIdx]

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!oldStartNode) {
      oldStartNode = oldChildren[++oldStartIdx]
    } else if(!oldEndNode) {
      oldEndNode = oldChildren[--oldEndIdx]
    } else  if (oldStartNode === newStartNode) {
      oldStartNode = oldChildren[++oldStartIdx]
      newStartNode = newChildren[++newStartIdx]
    } else if (oldEndNode === newEndNode) {
      oldEndNode = oldChildren[--oldEndIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldStartNode === newEndNode) {
      // 后移
      // 将节点移动到剩余遍历区域最后一个节点之后
      inesertBefore(UIChildren, oldStartNode, nextSibling(UIChildren, oldEndNode))
      oldStartNode = oldChildren[++oldStartIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldEndNode === newStartNode) {
      // 前移
      // 将节点移动到遍历区域最第一个节点之前
      inesertBefore(UIChildren, oldEndNode, oldStartNode)
      oldEndNode = oldChildren[--oldEndIdx]
      newStartNode = newChildren[++newStartIdx]
    } else {
      // 其他情况
      // 拿 newChildren 中的起始节点尝试去 oldChildren 中寻找
      const newEle = newChildren[newStartIdx]
      const oldIdx = oldChildren.indexOf(newEle)
      if (oldIdx === -1) {
        // 找不到说明是新元素，插入 oldStartNode 之前
        inesertBefore(UIChildren, newEle, oldStartNode)
      } else {
        // 能找到执行插入操作
        inesertBefore(UIChildren, oldChildren[oldIdx], oldStartNode)

        // 此时oldChildren[oldIdx] 一定处于非边缘位置
        // 而且未通过 while 循环遍历过
        // 所以置空， 再结合对空元素的判断，跳过这个已经被移动的节点
        oldChildren[oldIdx] = undefined 
      }
      // newChildren 的第一个元素处理过了，向右移动
      newStartNode = newChildren[++newStartIdx]
    }
  }

  // 上面循环并不能保证完整遍历两个数组的所有元素
  // 当一个数组遍历完之后，另一个数组可能残留一段区间，尚未遍历到
  // 当 oldChildren 残留区间未遍历 说明要删除这些元素
  // 当 newChildren 残留区间未遍历 说明要新增这些元素
  // 这段区间之内不可能存在可以复用的元素
  if (oldStartIdx > oldEndIdx) {
    // 新增
    // 始终插入到 newChildren[newEndIdx + 1] 之前能维持新插入的元素，从前到后的顺序
    // null 默认插入到最后面
    const before = newChildren[newEndIdx + 1] == null ? null : newChildren[newEndIdx + 1]
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      inesertBefore(UIChildren, newChildren[i], before)
    }
  } else if (newEndIdx < newStartIdx) {
    // 移除
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      removeChild(UIChildren, oldChildren[i])
    }
  }
  return UIChildren
}
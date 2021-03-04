import { inesertBefore, removeChild, nextSibling } from "./_util.js"

/**
 * @desc snabbdom & vue2 中采用的双端比较算法
 * 遍历两个数组的时候，对真正渲染的数组进行操作
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  const UIChildren = oldChildren.map(v => v) // 模拟 UI 元素
  let oldStartIdx = 0
  let newStartIdx = 0

  let oldEndIdx = oldChildren.length - 1
  let newEndIdx = newChildren.length - 1

  let oldStartNode = oldChildren[0]
  let newStartNode = newChildren[0]

  let oldEndNode = oldChildren[oldEndIdx]
  let newEndNode = newChildren[newEndIdx]

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 空元素，减少 idx，跳出双指针循环
    if (!oldStartNode) {
      oldStartNode = oldChildren[++oldStartIdx]
    } else if(!oldEndNode) {
      oldEndNode = oldChildren[--oldEndIdx]
    } else if (!newStartNode) {
      newStartNode = newChildren[++newStartIdx]
    } else if (!newEndNode) {
      newEndNode = newChildren[--newEndIdx]
    } else  if (oldStartNode === newStartNode) {
      oldStartNode = oldChildren[++oldStartIdx]
      newStartNode = newChildren[++newStartIdx]
    } else if (oldEndNode === newEndNode) {
      oldEndNode = oldChildren[--oldEndIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldStartNode === newEndNode) {
      inesertBefore(UIChildren, oldStartNode, nextSibling(UIChildren, oldEndNode))
      // 后移
      oldStartNode = oldChildren[++oldStartIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldEndNode === newStartNode) {
      // 前移
      inesertBefore(UIChildren, oldEndNode, oldStartNode)
      // 前移
      oldEndNode = oldChildren[--oldEndIdx]
      newStartNode = newChildren[++newStartIdx]
    } else {
      // 其他情况
      // 拿新 children 中的第一个节点尝试去旧 children 中寻找
      const newEle = newChildren[newStartIdx]
      const oldIdx = oldChildren.indexOf(newEle)
      if (oldIdx === -1) {
        // 找不到说明是新元素，执行 add
        inesertBefore(UIChildren, newEle, oldStartNode)
      } else {
        // 能找到执行 move
        inesertBefore(UIChildren, oldChildren[oldIdx], oldStartNode)
        oldChildren[oldIdx] = undefined
      }
      // 新 children 的第一个元素处理过了，向右移动
      newStartNode = newChildren[++newStartIdx]
    }
  }
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // 新增
      for (let i = newStartIdx; i <= newEndIdx; i++) {
        const before = newChildren[newEndIdx + 1] == null ? null : newChildren[newEndIdx + 1]
        inesertBefore(UIChildren, newChildren[i], before)
      }
    } else if (newEndIdx < newStartIdx) {
      // 移除
      for (let i = oldStartIdx; i <= oldEndIdx; i++) {
        removeChild(UIChildren, oldChildren[i])
      }
    }
  }
  return UIChildren
}
import { inesertBefore, removeChild, nextSibling } from "./_util.js"

/**
 * @desc snabbdom & vue2 中采用的双端比较算法
 * 遍历两个数组的时候，对真正渲染的数组进行操作
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  console.log("--------------------------------------")
  const _oldChildren = oldChildren.map(v => v) // clone
  let oldStartIdx = 0
  let newStartIdx = 0

  let oldEndIdx = _oldChildren.length - 1
  let newEndIdx = newChildren.length - 1

  let oldStartNode = _oldChildren[0]
  let newStartNode = newChildren[0]

  let oldEndNode = _oldChildren[oldEndIdx]
  let newEndNode = newChildren[newEndIdx]

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 空元素，减少 idx，跳出双指针循环
    if (!newStartNode) {
      newStartNode = newChildren[++newStartIdx]
    } else if (!newEndNode) {
      newEndNode = newChildren[--newEndIdx]
    } else if (!oldStartNode) {
      oldStartNode = _oldChildren[--oldStartIdx]
    } else if(!oldEndNode) {
      oldEndNode = _oldChildren[++oldEndIdx]
    } if (oldStartNode === newStartNode) {
      oldStartNode = _oldChildren[++oldStartIdx]
      newStartNode = newChildren[++newStartIdx]
    } else if (oldEndNode === newEndNode) {
      oldEndNode = _oldChildren[--oldEndIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldStartNode === newEndNode) {
      inesertBefore(oldChildren, oldStartNode, nextSibling(oldChildren, oldEndNode))
      console.log("后移", oldChildren)
      oldStartNode = _oldChildren[++oldStartIdx]
      newEndNode = newChildren[--newEndIdx]
    } else if (oldEndNode === newStartNode) {
      // 前移
      inesertBefore(oldChildren, oldEndNode, oldStartNode)
      console.log("前移", oldChildren)
      oldEndNode = _oldChildren[--oldEndIdx]
      newStartNode = newChildren[++newStartIdx]
    } else {
      // 其他情况
      // 拿新 children 中的第一个节点尝试去旧 children 中寻找
      const newEle = newChildren[newStartIdx]
      const oldIdx = oldChildren.indexOf(newEle)
      if (oldIdx === -1) {
        // 找不到说明是新元素，执行 add
        inesertBefore(oldChildren, newEle,oldStartNode)
        console.log("新增", oldChildren)
      } else {
        // 能找到执行 move
        inesertBefore(oldChildren, _oldChildren[oldIdx], oldStartNode)
        _oldChildren[oldIdx] = undefined
        console.log("移动", oldChildren)
      }
      // 新 children 的第一个元素处理过了，向右移动
      newStartNode = newChildren[++newStartIdx]
    }
  }
  
  if (oldStartIdx > oldEndIdx) {
    // 新增
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      const before = newChildren[newEndIdx + 1] == null ? null : newChildren[newEndIdx + 1]
      inesertBefore(oldChildren, newChildren[i], before)
      console.log("新增", oldChildren)
    }
  } else if (newEndIdx < newStartIdx) {
    // 移除
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      removeChild(oldChildren, _oldChildren[i])
      console.log("移除", oldChildren)
    }
  }
  return oldChildren
}
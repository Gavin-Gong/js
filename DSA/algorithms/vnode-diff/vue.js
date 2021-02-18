import { remove, move, add } from "./_util.js"

/**
 * @desc snabbdom & vue2 中采用的双端比较算法
 * 遍历两个数组的时候，对真正渲染的数组进行操作
 * @param {[number]} oldChildren 
 * @param {[number]} newChildren 
 */
export function diff(oldChildren, newChildren) {
  // const _oldChildren = oldChildren
  const _oldChildren = oldChildren.map(v => v) // clone
  let oldStartIdx = 0
  let newStartIdx = 0

  let oldEndIdx = _oldChildren.length - 1
  let newEndIdx = newChildren.length - 1

  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 空元素，减少 idx，跳出双指针循环
    if (!newChildren[newStartIdx]) {
      newStartIdx++
    } else if (!newChildren[newEndIdx]) {
      newEndIdx--
    } else if (!oldChildren[oldStartIdx]) {
      oldStartIdx --
    } else if(!oldChildren[oldEndIdx]) {
      oldEndIdx ++
    } if (_oldChildren[oldStartIdx] === newChildren[newStartIdx]) {
      oldStartIdx ++;
      newStartIdx ++
    } else if (_oldChildren[oldEndIdx] === newChildren[newEndIdx]) {
      oldEndIdx --
      newEndIdx --
    } else if (_oldChildren[oldStartIdx] === newChildren[newEndIdx]) {
      // 后移
      move(oldChildren, oldStartIdx, newEndIdx)
      console.log("后移", oldChildren)
      oldStartIdx ++
      newEndIdx --
    } else if (_oldChildren[oldEndIdx] === newChildren[newStartIdx]) {
      // 前移
      move(oldChildren, oldStartIdx, newEndIdx)
      console.log("前移", oldChildren)
      oldEndIdx --
      newStartIdx ++
    } else {
      // 其他情况
      // 拿新 children 中的第一个节点尝试去旧 children 中寻找
      const newEle = newChildren[newStartIdx]
      const oldIdx = oldChildren.indexOf(newEle)
      if (oldIdx === -1) {
        // 找不到说明是新元素，执行 add
        add(oldChildren, oldStartIdx, [newEle]) // TODO: 插入位置
        console.log("新增", oldChildren)
      } else {
        // 能找到执行 move
        move(oldChildren, oldIdx, oldStartIdx)
        console.log("移动", oldChildren)
      }
      // 新 children 的第一个元素处理过了，向右移动
      newStartIdx ++
    }
  }
  
  if (oldEndIdx < oldStartIdx) {
    // 新增
    for (let i = newStartIdx; i <= newEndIdx; i++) {
      add(oldChildren, i, [ newChildren[i] ])
      console.log("新增", oldChildren)
    }
  } else if (newEndIdx < newStartIdx) {
    // 移除
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      remove(oldChildren, i, 1)
      console.log("移除", oldChildren)
    }
  }
  return oldChildren
}
// TODO:
let x = [1, 2, 3]
let y = [3, 2, 1]

// TODO:

// let x = [1, 2, 3]
// let y = [1, 2, 4]

// let x = [1, 2, 3]
// let y = [1, 2, 3, 4, 5, 6]

// let x = [1, 2, 3]
// let y = [4, 5, 1, 2, 3]

// let x = [1, 2, 3, 4, 5]
// let y = [4, 5, 1, 2, 3]

console.log("diff", x, y)
let a = diff(x, y)
console.log(a)
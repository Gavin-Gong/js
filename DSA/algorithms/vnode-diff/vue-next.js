import { lis } from "../dp.lis"
import { inesertBefore, removeChild } from "./_util.js";
/**
 * @desc inferno & vue3 中采用的最长子序列算法
 * 糅合了前两个算法的一些技巧，再加上最长子序列算法来减少节点的移动操作
 * @param {[number]} oldChildren
 * @param {[number]} newChildren
 */
export function diff(oldChildren, newChildren) {
  const UIChildren = oldChildren.map((v) => v); // clone

  let oldEndIndex = oldChildren.length - 1;
  let newEndIndex = newChildren.length - 1;

  let i = 0;
  let oldEndNode = oldChildren[i];
  let newEndNode = newChildren[i];

  // 类似 vue 2 的算法，进行双向比较
  outer: {
    // 从数组前面开始比对
    while (oldEndNode === newEndNode) {
      i++;
      // 一旦有一个数组遍历完成，跳出执行块
      if (i > oldEndIndex || i > newEndIndex) {
        break outer;
      }
      oldEndNode = oldChildren[i];
      newEndNode = newChildren[i];
    }

    // 从数组后面开始比对
    oldEndNode = oldChildren[oldEndIndex];
    newEndNode = newChildren[newEndIndex];
    while (oldEndNode === newEndNode) {
      newEndIndex--;
      oldEndIndex--;
      // 一旦有一个数组遍历完成，跳出执行块
      if (i > oldEndIndex || i > newEndIndex) {
        break outer;
      }
      oldEndNode = oldChildren[oldEndIndex];
      newEndNode = newChildren[newEndIndex];
    }
  }

  if (i > oldEndIndex && i <= newEndIndex) {
    // i > oldIndex 说明 oldChildren 已经遍历完成
    // i <= newIndex 说明 newChildren 尚未遍历完
    // 此时，这些遍历完的 newChildren 元素一定是需要新增的
    // 新增操作
    const refNode = newChildren[newEndIndex + 1] == null ? null: newChildren[newEndIndex + 1]
    while(i <= newEndIndex) {
      inesertBefore(UIChildren, newChildren[i++] ,refNode)
    }
  } else if (i > newEndIndex) {
    // newChildren 已经遍历完
    // oldChildren 已经暂未遍历完成
    // 此时，这些未遍历完的oldChildren 元素一定是需要移除的
    // 移除操作
    while(i <= oldEndIndex) {
      removeChild(UIChildren, oldChildren[i++])
    }
  } else {
    // 上边处理了比较简单的情况

    const newRemaining = newEndIndex - i + 1 // newChildren 中未处理节点数量
    const source = new Array(newRemaining).fill(-1) // 用来保存未处理的 newChildren 区间元素对应的元素在 oldChildren 的 index

    const oldStartIdx = i
    const newStartIdx = i
    let shouldMove = false
    let lastIndex = 0
    const keyIndexMap = {} // { value/key: index } newChildren未处理区间索引表
    for (let k = newStartIdx; k <= newEndIndex; k++) {
      keyIndexMap[newChildren[k]] = k
    }
    let patched = 0
    
    // 遍历 oldChildren 剩余节点
    for (let i = oldStartIdx; i <= oldEndIndex; i++) {
      const oldNode = oldChildren[i]
      if (patched < newRemaining) {
        const k = keyIndexMap[oldNode] // 找到 oldNode 在 newChildren 中的 index
        if (typeof k !== 'undefined') {
          patched ++
          source[k - newStartIdx] = i

          // 判断是否需要移动，类似 React 的 diff 的思路
          if (k < lastIndex) {
            shouldMove = true
          } else {
            lastIndex = k
          }
        } else {
          // 在 newChildren 中找不到了，移除
          removeChild(UIChildren, oldNode)
        }
      } else {
        // 此时的 oldChildren 未遍历完成， newChildren 已经遍历完成
        // 剩余的oldChildren 中的元素未出现在 newChildren，应当被移除
        removeChild(UIChildren, oldNode)
      }
    }

    if (shouldMove) {
      const seq = lis(source) // 返回最长增长子序列 index 数组
      let j = seq.length - 1

      // 处理未处理的 newChildren 区间
      for(let i = newRemaining - 1; i>= 0; i --) {
        if (source[i] === -1) {
          // 不存在说明是新节点，直接插入到上一个节点处理好的节点即可
          const curIndex = i + newStartIdx
          const newNode = newChildren[curIndex]
          const refNode = newChildren[curIndex + 1] == null ? null : newChildren[curIndex + 1]
          inesertBefore(UIChildren, newNode, refNode)
        } else if (i !== seq[j]) {
          // 说明该节点需要移动
          // 其实和上面的 if 处理逻辑一致
          const curIndex = i + newStartIdx
          const newNode = newChildren[curIndex]
          const refNode = newChildren[curIndex + 1] == null ? null : newChildren[curIndex + 1]
          inesertBefore(UIChildren, newNode, refNode)
        } else {
          // i === seq[j] 说明当前节点在增长子序列中，无需移动
          // j 往前移动
          j--
        }
      }
    }
  }
  return UIChildren;
}
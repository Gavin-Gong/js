/**
 * 鉴于数组现有方法和浏览器 DOM 操作之间存在差异, 且设计风格之间存在较大差异
 * 比如数组方法 splice(index, count, item), 数组方法 api 倾向于使用 index
 * 而 DOM 操作则偏向于使用 元素本身 inesertBefore(parentElment, childElement, refElement)
 * 所以封装成了和 DOM 操作相对一致的 API
 */

/**
 * @desc 模拟 DOM 操作中的 insertBefore
 * @param {[number]} input 
 * @param {number} item 
 * @param {number} refItem 
 */
export function inesertBefore(input, item, refItem) {
  if (item === refItem) return input
  const itemIdx = input.indexOf(item)
  if (itemIdx > -1) {
    input.splice(itemIdx, 1); // 删除
  }

  let refItemIdx = input.indexOf(refItem)
  refItemIdx = (refItem == null || refItemIdx === -1) ? input.length : refItemIdx
  input.splice(refItemIdx, 0, item); // 增加

  return input
}

/**
 * @desc 模拟 DOM 操作中 removeChild
 * @param {[number]} input 
 * @param {number} from 
 */
export function removeChild(input, item) {
  const idx = input.indexOf(item)
  if (idx > -1) {
    input.splice(idx, 1)
  }
  return input
}


/**
 * @desc 模拟 DOM 操作中的 sibling
 * @param {[number]} input 
 * @param {*} item 
 */
export function nextSibling(input, item) {
  const idx = input.indexOf(item)
  return idx === -1 ? null : input[idx + 1]
}
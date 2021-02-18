/**
 * 鉴于数组现有方法和浏览器 DOM 操作之间存在差异,
 * inesertBefore 会将现有节点移除并插入新的位置即为移动,
 * 但是数组方法中不存在对应 api
 * 所以单独封装移动数组元素的方法. 且该次操作算一次操作
 */

/**
 * @desc
 * @param {*} input 
 * @param {*} from 
 * @param {*} to 
 * @param {*} count 
 */
export function move(input, from, to, count = 1) {
  const elm = input.splice(from, count)[0];
  input.splice(to, 0, elm);
  return input
}

export function remove(input, from, count = 1) {
  input.splice(from, count)
  return input
}

/**
 * 
 * @param {[any]} input 
 * @param {number} from 
 * @param {[any]} args 
 */
export function add(input, from, args) {
  input.splice(from, 0, ...args);
  return input
}
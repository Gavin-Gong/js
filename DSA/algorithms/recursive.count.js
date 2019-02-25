/**
 * @desc 递归计算数组个数
 * @param {Array<number>} arr 
 */
export default function count(arr,  total = 0) {
  if (arr.length === 0) {
    return total
  } else {
    return count(arr.slice(1), total + 1)
  }
}
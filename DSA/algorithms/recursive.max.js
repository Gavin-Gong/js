
/**
 * @desc 递归查找最大值
 * @param {Array<number>} arr 
 */
export default function max(arr, curMax) {
  if (arr.length === 0) {
    return arr[0] > curMax ? arr[0] : curMax
  } else {
    if (curMax === undefined) {
      return max(arr.slice(1), arr[0])
    }
    return max(arr.slice(1), arr[0] > curMax ? arr[0] : curMax)
  }
}
/**
 * @desc 递归求和
 * @param {*} arr 
 */
export default function sum(arr = []) {
  let len = arr.length

  if (len === 0) {
    return 0
  } else if (len === 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
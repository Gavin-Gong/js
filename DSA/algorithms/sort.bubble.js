/**
 * @desc bubble sort
 * @param {number[]} arr 
 */
export default function bubbleSort(arr) {
  let swapped;
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    swapped = false;
    for (let j = 0; j < len - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // 一旦某次中没有出现交换元素就意味着整个数组已经排序完成
    if (!swapped) {
      break;
    }
  }
  return arr
}
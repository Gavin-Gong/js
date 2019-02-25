/**
 * @desc 选择排序
 * @param {Arrary<number>}} arr 
 */
export default function selectionSort(arr = []) {
  let res = []
  let curArr = arr.slice();
  for (let i = 0; i < arr.length; i++) {
    let index = minIndex(curArr)
    res.push(curArr[index])
    curArr = curArr.filter((_, idx) => idx !== index)
  }

  return res
}

/**
 * @desc 最小元素的 index
 * @param {*} arr 
 */
function minIndex(arr) {
  let curIdx = 0;
  let curVal = arr[0];
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < curVal) {
      curVal = arr[index];
      curIdx = index;
    }
  }
  return curIdx
}
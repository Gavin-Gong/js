/**
 * @desc 快速排序
 * @param {Array<number>} arr 
 */
export default  function qucikSort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    let pivot = arr[0];
    let less = arr.slice(1).filter(i => i <= pivot);
    let great = arr.slice(1).filter(i => i > pivot);
    return qucikSort(less).concat([pivot], qucikSort(great));
  }
}
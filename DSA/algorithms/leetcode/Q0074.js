/**
 * @link https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export function searchMatrix(matrix, target) {
  const len = matrix.length;
  let startRow = 0;
  let endRow = len - 1;
  while (startRow <= endRow) {
    const mid = startRow + Math.floor((endRow - startRow) / 2);
    const cur = matrix[mid][0];
    const next = mid + 1 > len - 1 ? null : matrix[mid + 1][0];
    if (target >= cur) {
      if (next === null || target < next) {
        return binarySearch(matrix[mid], target);
      } else {
        startRow = mid + 1;
      }
    } else {
      endRow = mid - 1;
    }
  }
  return false;
}

function binarySearch(list, target) {
  const len = list.length;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    const cur = list[mid];
    if (cur < target) {
      start = mid + 1;
    } else if (cur > target) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

const searchMatrix1 = function (matrix, target) {
  return new RegExp(String.raw`\[${target},|\[${target}\]|,${target},|,${target}]`, "gi").test(
    JSON.stringify(matrix)
  );
};

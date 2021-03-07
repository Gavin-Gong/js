
/**
 * @desc 最长子串算法
 * @link https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
 * @link https://segmentfault.com/a/1190000012829866
 * @link https://github.com/vuejs/vue-next/blob/master/packages/runtime-core/src/renderer.ts#L2294-L2333
 * @param {Array<bumber>} arr 
 */
export function lis(arr){
  const p = arr.slice() // 存储单个向后最长子串个数
  const result = [0] 
  let i, j, u, v, c
  const len = arr.length

  for (i = 0; i < len; i++) {
    const arrI = arr[i]
    if (arrI !== 0) {
      j = result[result.length - 1] // last result item
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      u = 0
      v = result.length - 1
      while (u < v) {
        c = ((u + v) / 2) | 0
        if (arr[result[c]] < arrI) {
          u = c + 1
        } else {
          v = c
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
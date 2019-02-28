/**
 * @desc counting sort 计数排序
 * @param {number[]} arr 
 */
export default function countingSort(arr) {
	// 统计每个数字个数
	// Note: 这里的数组会变成一个稀疏数组。
	// 这里利用了 js 的动态数组的特性， Rust 可能要填充 vec
	let c = []
	for (let i = 0; i < arr.length; i++) {
		const key = arr[i]
		if (c[key] >= 1) {
			c[key] ++
		} else {
			c[key] = 1
		}
	}

	// 按照对应值得个数进行排序
	
	let d = []
	for (let i = 0; i < c.length; i++) {
		if (c[i]) {
			while(c[i] > 0) {
				d.push(i)
				c[i] --
			}
		}
	}
	return d
}
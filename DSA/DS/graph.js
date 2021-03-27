/**
 * @description 图
 * @refer https: //github.com/wengjq/Blog/issues/9
 * [x: string] -> []string
 */

export default class Graph {
	constructor() {
		this.vertices = {}; // 利用 js 对象字典特性
	}
	addEdge(v, w) {
		if (this.vertices[v]) {
			this.vertices[v].push(w)
		} else {
			this.vertices[v] = [w]
		}
		if (this.vertices[w]) {
			this.vertices[w].push(v)
		} else {
			this.vertices[w] = [v]
		}
	}
	addVertice(v) {
		this.vertices[v] = [];
	}
	toString() {
		return Object.keys(this.vertices).map(key => {
			return `${key} -> ${this.vertices[key].join(" ")}`
		}).join("\n")
	}
}
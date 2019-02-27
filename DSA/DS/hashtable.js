/**
 * @desc hash table 
 */
export default class HashTable {
  constructor(params) {
    this.data = []     
  }
  set(k, v) {
    this.data = [...this.data.filter(ele => ele[0] !== k), [k, v]]
    console.log(this.data)
  }
  get(k) {
    let res = this.data.find(ele => ele[0] === k)
    return res ? res[1] : undefined
  }
}
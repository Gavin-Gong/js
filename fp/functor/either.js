const Nothing = function (val) {
  this.value = val
}
Nothing.of = function (val) {
  return new Nothing(val)
}
Nothing.prototype.map = function () {
  return this //注意这里返回 this 
}

const Some = function(val) {
  this.value = val
}
Some.of = function(val) {
  return new Some(val)
}
Some.prototype.map = function (fn) {
  return Some.of(fn(this.value))
} 


export {
  Nothing,
  Some
}
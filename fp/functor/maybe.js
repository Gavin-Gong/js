const Maybe = function (value) {
  this.value = value
}
Maybe.of = function (val) {
  return new Maybe(val)
}
Maybe.prototype.isNothing = function () {
  return (this.value === null || this.value === undefined)
}
Maybe.prototype.map = function (fn) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value))
}

export {
  Maybe
}
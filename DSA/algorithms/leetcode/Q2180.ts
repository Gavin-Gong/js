/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    let sum = 0;
    let n = i;
    while (n !== 0) {
      sum = sum + (n % 10);
      n = ~~(n / 10);
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countEven(4));
console.log(countEven(30));

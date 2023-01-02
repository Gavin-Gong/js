function isPalindrome(x) {
  const s = String(x);
  return s === Array.from(s).reverse().join("");
}

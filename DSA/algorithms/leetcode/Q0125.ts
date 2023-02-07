/**
 *
 * @param {string} s
 */
function isPalindrome(s) {
  const list = s
    .toLowerCase()
    .split("")
    .filter((c) => {
      return /^[a-zA-Z0-9]$/.test(c);
    });
  return list.join("") === list.reverse().join("");
}

/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  if (password.length < 8) {
    return false;
  }
  let hasAZ = false;
  let hasaz = false;
  let hasNum = false;
  let hasSpecChar = false;
  let isSeq = true;
  const specChars = "!@#$%^&*()-+".split("");
  const chars = password.split("");
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const charCode = char.charCodeAt();
    if (charCode >= 97 && charCode <= 122) {
      hasaz = true;
    } else if (charCode >= 65 && charCode <= 90) {
      hasAZ = true;
    } else if (specChars.includes(char)) {
      hasSpecChar = true;
    } else if (typeof parseInt(char) === "number") {
      hasNum = true;
    }
    if (chars[i] === chars[i + 1]) {
      isSeq = false;
    }
    //
  }
  if (hasAZ && hasaz && hasNum && hasSpecChar && isSeq) {
    return true;
  } else {
    return false;
  }
};

// console.log(strongPasswordCheckerII("11A!A!Aa"));
// console.log(strongPasswordCheckerII("IloveLe3tcode!"));

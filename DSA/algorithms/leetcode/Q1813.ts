/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  if (sentence1 === sentence2) {
    return true;
  }
  const baseSentence = sentence1.length > sentence2.length ? sentence2 : sentence1;
  const fullSentence = sentence1.length > sentence2.length ? sentence1 : sentence2;

  if (fullSentence.startsWith(`${baseSentence} `)) {
    return true;
  }
  if (fullSentence.endsWith(` ${baseSentence}`)) {
    return true;
  }
  const words = baseSentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    const left = words.slice(0, i).join(" ");
    const right = words.slice(i, words.length).join(" ");
    if (left.length && right.length) {
      if (fullSentence.startsWith(`${left} `) && fullSentence.endsWith(` ${right}`)) {
        return true;
      }
    }
  }
  return false;
};

areSentencesSimilar("My name is Haley", "My Haley");

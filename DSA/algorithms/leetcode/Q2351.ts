function repeatedCharacter(s) {
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      return char;
    } else {
      map.set(char, 1);
    }
  }
}

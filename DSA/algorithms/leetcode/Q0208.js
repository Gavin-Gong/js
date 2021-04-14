class Trie {
  constructor() {
    this.map = {};
  }
  insert(word) {
    let node = this.map;
    for (const char of word) {
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
    }
    node._end = true;
  }
  startsWith(prefix) {
    return !!this.match(prefix);
  }
  match(word) {
    let node = this.map;
    for (const char of word) {
      if (!node[char]) return false;
      node = node[char];
    }
    return node;
  }
  search(word) {
    const node = this.match(word);
    return !!(node && node._end);
  }
}
export { Trie };

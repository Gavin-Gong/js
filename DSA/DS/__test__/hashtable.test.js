import HashTable from '../hashtable'

test("hash table -> not found", () => {
  let hashTable = new HashTable();
  expect(hashTable.get("32")).toEqual(undefined)
});
test("hash table -> set value", () => {
  let hashTable = new HashTable();
  hashTable.set(999,2)
  expect(hashTable.get(999)).toEqual(2)
});
test("hash table -> over value", () => {
  let hashTable = new HashTable();
  hashTable.set(2,4)
  hashTable.set(2,10)
  expect(hashTable.get(2)).toEqual(10)
});
test("hash table -> type limit", () => {
  let hashTable = new HashTable();
  hashTable.set("2",4)
  expect(hashTable.get(2)).toEqual(undefined)
});

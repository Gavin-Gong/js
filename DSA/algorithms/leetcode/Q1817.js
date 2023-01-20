/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const map = new Map();

  for (let i = 0; i < logs.length; i++) {
    const id = logs[i][0];
    const value = logs[i][1];
    const hasUser = map.get(id) !== undefined;
    if (!hasUser) {
      const set = new Set();
      set.add(value);
      map.set(id, set);
    } else {
      const set = map.get(id);
      set.add(value);
      map.set(id, set);
    }
  }

  const answer = new Array(k).fill(0);
  for (const [key, value] of map) {
    const size = value.size;
    answer[size - 1] += 1;
  }

  return answer;
};

findingUsersActiveMinutes([
  [0, 5],
  [1, 2],
  [0, 2],
  [0, 5],
  [1, 3],
]);

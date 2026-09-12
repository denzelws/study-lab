/**
 * Q3 — Unique Test IDs (20 min)
 *
 * You are auditing automated test runs. Each entry in `testIds` is a
 * numeric test ID. Some IDs appear multiple times (retries/reruns).
 *
 * Return how many IDs appear EXACTLY ONCE in the array.
 *
 * Examples:
 *   [101, 202, 101, 303, 202, 202] → 1   (only 303 runs once)
 *   [1, 1, 1]                      → 0
 *   []                             → 0
 *   [7, 8, 9]                      → 3
 *
 * Constraints:
 *   - 0 <= testIds.length <= 10^5
 *   - 0 <= testIds[i] <= 10^9
 *   - Expected time:  O(n)
 *   - Expected space: O(n)
 */

function countUniqueOnce(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    // if id is new -> count = 1
    // if id exists -> count + 1
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [id, times] of freq) {
    if (times === 1) count++
  }

  return count
}

// --- Test cases (run with: npm run q3) ---

console.log(countUniqueOnce([101, 202, 101, 303, 202, 202])); // Expected: 1
console.log(countUniqueOnce([1, 1, 1]));                      // Expected: 0
console.log(countUniqueOnce([]));                             // Expected: 0
console.log(countUniqueOnce([7, 8, 9]));                      // Expected: 3

export { countUniqueOnce };

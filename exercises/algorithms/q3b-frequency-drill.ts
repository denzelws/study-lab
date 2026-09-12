/**
 * Q3b — Repeated Test IDs (frequency map drill)
 *
 * Same pattern as Q3, different question:
 *
 * Return how many DISTINCT test IDs appear MORE THAN ONCE
 * (i.e. at least 2 times — reruns/retries).
 *
 * Examples:
 *   [101, 202, 101, 303, 202, 202] → 2   (101 and 202 repeat)
 *   [1, 1, 1]                      → 1   (only ID 1, but it repeats)
 *   []                             → 0
 *   [7, 8, 9]                      → 0   (nothing repeats)
 *   [5, 5, 6, 6, 7]                → 2   (5 and 6 repeat; 7 does not)
 *
 * Constraints:
 *   - 0 <= testIds.length <= 10^5
 *   - Expected time:  O(n)
 *   - Expected space: O(n)
 *
 * Hint: same 2-loop Map pattern as Q3 — only the second-loop condition changes.
 */

function countRepeatedIds(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value > 1) count++
  }

  return count
}

// --- Test cases (run with: npm run q3b) ---

console.log(countRepeatedIds([101, 202, 101, 303, 202, 202])); // Expected: 2
console.log(countRepeatedIds([1, 1, 1]));                      // Expected: 1
console.log(countRepeatedIds([]));                             // Expected: 0
console.log(countRepeatedIds([7, 8, 9]));                      // Expected: 0
console.log(countRepeatedIds([5, 5, 6, 6, 7]));                // Expected: 2

export { countRepeatedIds };

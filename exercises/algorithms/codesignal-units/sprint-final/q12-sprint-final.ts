/**
 * Q12 — First Repeated Scan Id (~15 min)
 * Mode: medium | Topic: sprint-final / bloco-2 | Language: TypeScript
 *
 * A scanner logs `ids` in order. Return the first value that appears a
 * SECOND time (the first repeat as you scan left to right). If every id is
 * unique, or the list is empty, return -1.
 *
 * Nested loops that re-scan the prefix for each id will time out when
 * ids.length is large (up to 10^5). Target O(n) time.
 *
 * Examples:
 * Input: ([3, 1, 4, 1, 5]) -> Output: 1
 * Input: ([7, 8, 9]) -> Output: -1
 * Input: ([2, 2, 2]) -> Output: 2
 *
 * Constraints: 0 <= ids.length <= 10^5; ids[i] is an integer.
 * O(n) time, O(n) space.
 */

function firstRepeatedScanId(ids: number[]): number {
  // Return first value that appears 2 times
  const seen = new Set<number>()

  for (const id of ids) {
    if (seen.has(id)) {
      return id
    } else {
      seen.add(id)
    }
  }

  return -1;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q12-sprint-final.ts
console.log("Test 1:", firstRepeatedScanId([3, 1, 4, 1, 5])); // Expected: 1
console.log("Test 2:", firstRepeatedScanId([7, 8, 9])); // Expected: -1
console.log("Test 3:", firstRepeatedScanId([2, 2, 2])); // Expected: 2

// Hidden — empty, first pair, last pair, negatives, no nested-scan trap on order
console.log("Test 4 (hidden):", firstRepeatedScanId([])); // Expected: -1
console.log("Test 5 (hidden):", firstRepeatedScanId([9])); // Expected: -1
console.log("Test 6 (hidden):", firstRepeatedScanId([5, 6, 5, 6])); // Expected: 5
console.log("Test 7 (hidden):", firstRepeatedScanId([1, 2, 3, 3])); // Expected: 3
console.log("Test 8 (hidden):", firstRepeatedScanId([-2, 0, -2])); // Expected: -2

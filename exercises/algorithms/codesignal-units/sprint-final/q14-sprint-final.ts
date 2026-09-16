/**
 * Q14 — Count One-Shot Ids (~15 min)
 * Mode: medium | Topic: sprint-final / bloco-2 | Language: TypeScript
 *
 * A test runner logs `ids`. Return how many DISTINCT ids appear EXACTLY
 * once (never retried).
 *
 * Nested loops that recount the whole array for each id will time out when
 * ids.length is large (up to 10^5). Target O(n) time.
 * 
 * Examples:
 * Input: ([101, 202, 101, 303, 202, 202]) -> Output: 1
 * Input: ([1, 2, 3]) -> Output: 3
 * Input: ([7, 7, 7]) -> Output: 0
 *
 * Constraints: 0 <= ids.length <= 10^5; ids[i] is an integer.
 * O(n) time, O(n) space.
 */
 
function countOneShotIds(ids: number[]): number {
  const freq = new Map<number, number>()

  for (const id of ids) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0
  for (const [key, value] of freq) {
    if (value === 1) count ++
  }

  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q14-sprint-final.ts
console.log("Test 1:", countOneShotIds([101, 202, 101, 303, 202, 202])); // Expected: 1
console.log("Test 2:", countOneShotIds([1, 2, 3])); // Expected: 3
console.log("Test 3:", countOneShotIds([7, 7, 7])); // Expected: 0

// Hidden — empty, single, unique FIRST in insertion order, two singles + one pair
console.log("Test 4 (hidden):", countOneShotIds([])); // Expected: 0
console.log("Test 5 (hidden):", countOneShotIds([9])); // Expected: 1
console.log("Test 6 (hidden):", countOneShotIds([303, 101, 101])); // Expected: 1
console.log("Test 7 (hidden):", countOneShotIds([1, 2, 2, 3])); // Expected: 2
console.log("Test 8 (hidden):", countOneShotIds([-1, 0, -1])); // Expected: 1

/**
 * Q13 — Count Retry Ids (~15 min)
 * Mode: medium | Topic: sprint-final / bloco-2 | Language: TypeScript
 *
 * A test runner logs `ids`. Some ids are retried (appear more than once).
 * Return how many DISTINCT ids appear at least twice.
 *
 * Nested loops that recount the whole array for each id will time out when
 * ids.length is large (up to 10^5). Target O(n) time.
 *
 * Examples:
 * Input: ([101, 202, 101, 303, 202, 202]) -> Output: 2
 * Input: ([1, 2, 3]) -> Output: 0
 * Input: ([7, 7, 7]) -> Output: 1
 *
 * Constraints: 0 <= ids.length <= 10^5; ids[i] is an integer.
 * O(n) time, O(n) space.
 */

function countRetryIds(ids: number[]): number {
  // Traduction: Return count IDs distinct with MAP
  const freq = new Map<number, number>()

  // metodos Map
  // freq.get(id) -> le a contagem ( undefined se n existir )
  // freq.set(id) -> grava / atualiza
  // freq.get(id) ?? 0 -> se undefined -> trata 0

  for (const id of ids) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [id, values] of freq) {
    if (values >= 2) count++
  }

  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q13-sprint-final.ts
console.log("Test 1:", countRetryIds([101, 202, 101, 303, 202, 202])); // Expected: 2
console.log("Test 2:", countRetryIds([1, 2, 3])); // Expected: 0
console.log("Test 3:", countRetryIds([7, 7, 7])); // Expected: 1

// Hidden — empty, singles, two pairs, negatives, order does not change distinct count
console.log("Test 4 (hidden):", countRetryIds([])); // Expected: 0
console.log("Test 5 (hidden):", countRetryIds([9])); // Expected: 0
console.log("Test 6 (hidden):", countRetryIds([1, 1, 2, 2])); // Expected: 2
console.log("Test 7 (hidden):", countRetryIds([5, 6, 5, 6, 5])); // Expected: 2
console.log("Test 8 (hidden):", countRetryIds([-1, -1, 0])); // Expected: 1

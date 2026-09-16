/**
 * Q15 — Has Pair Sum (~15 min)
 * Mode: medium | Topic: sprint-final / bloco-2 | Language: TypeScript
 *
 * Given `nums` and `target`, return true if two DIFFERENT positions hold
 * values that add up to `target`. Same value twice is allowed only if it
 * appears twice in the array (e.g. [3, 3], target 6 → true).
 *
 * Nested loops that try every pair will time out when nums.length is large
 * (up to 10^5). Target O(n) time.
 *
 * Examples:
 * Input: ([2, 7, 11, 15], 9) -> Output: true
 * Input: ([2, 7, 11, 15], 8) -> Output: false
 * Input: ([3, 3], 6) -> Output: true
 *
 * Constraints: 0 <= nums.length <= 10^5; nums[i] and target are integers.
 * O(n) time, O(n) space.
 */

function hasPairSum(nums: number[], target: number): boolean {
  // TODO: Implemente a lógica aqui
  return false;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q15-sprint-final.ts
console.log("Test 1:", hasPairSum([2, 7, 11, 15], 9)); // Expected: true
console.log("Test 2:", hasPairSum([2, 7, 11, 15], 8)); // Expected: false
console.log("Test 3:", hasPairSum([3, 3], 6)); // Expected: true

// Hidden — empty, single, negatives, pair at ends, need two copies not one
console.log("Test 4 (hidden):", hasPairSum([], 0)); // Expected: false
console.log("Test 5 (hidden):", hasPairSum([9], 9)); // Expected: false
console.log("Test 6 (hidden):", hasPairSum([1, 4, 5], 6)); // Expected: true
console.log("Test 7 (hidden):", hasPairSum([-1, 8, 2], 7)); // Expected: true
console.log("Test 8 (hidden):", hasPairSum([6], 12)); // Expected: false

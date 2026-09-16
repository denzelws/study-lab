/**
 * Q9 — Drop Warmup And Cooldown (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A replay tape must drop its first `warmup` frames and its last `cooldown`
 * frames. Return a NEW array with the remaining middle.
 *
 * Clamp `warmup` and `cooldown`: values below 0 become 0 (floor). There is
 * no extra ceiling on each side — if the clamped drops cover the whole
 * array (or more), return []. Never mutate `tape`.
 *
 * Examples:
 * Input: ([1, 2, 3, 4, 5, 6], 2, 1) -> Output: [3, 4, 5]
 * Input: ([1, 2], 1, 1) -> Output: []
 * Input: ([1, 2, 3], 0, 0) -> Output: [1, 2, 3]
 *
 * Constraints: 0 <= tape.length <= 10^4; warmup, cooldown >= -10^4.
 * O(n) time, O(n) space. No while. Never mutate `tape`.
 */

function dropWarmupAndCooldown(tape: number[], warmup: number, cooldown: number): number[] {
  // Tradiction: Clamp warmup and cooldown -> return middle
  const heads = Math.max(warmup, 0)
  const tails = Math.max(cooldown, 0)

  if (heads + tails >= tape.length) return []
  
  return tape.slice(heads, tape.length - tails)
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q9-sprint-final.ts
console.log("Test 1:", dropWarmupAndCooldown([1, 2, 3, 4, 5, 6], 2, 1)); // Expected: [3, 4, 5]
console.log("Test 2:", dropWarmupAndCooldown([1, 2], 1, 1)); // Expected: []
console.log("Test 3:", dropWarmupAndCooldown([1, 2, 3], 0, 0)); // Expected: [1, 2, 3]

// Hidden — floor negatives, cover-all, empty, use clamped vars not raw params
console.log("Test 4 (hidden):", dropWarmupAndCooldown([8, 9, 10], -3, -1)); // Expected: [8, 9, 10]
console.log("Test 5 (hidden):", dropWarmupAndCooldown([1, 2, 3, 4], -1, 3)); // Expected: [1]
console.log("Test 6 (hidden):", dropWarmupAndCooldown([1, 2, 3], 10, 0)); // Expected: []
console.log("Test 7 (hidden):", dropWarmupAndCooldown([], 2, 2)); // Expected: []
console.log("Test 8 (hidden):", dropWarmupAndCooldown([7], 0, -9)); // Expected: [7]

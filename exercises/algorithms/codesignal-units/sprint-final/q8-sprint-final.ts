/**
 * Q8 — Trim Calibration Window (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A sensor log must drop its first `left` calibration samples and its last
 * `right` cooldown samples. Return a NEW array with the remaining middle.
 *
 * Clamp `left` and `right`: values below 0 become 0 (floor). There is no
 * extra ceiling on each side — if the clamped drops cover the whole array
 * (or more), return []. Never mutate `log`.
 *
 * Examples:
 * Input: ([10, 20, 30, 40, 50], 1, 1) -> Output: [20, 30, 40]
 * Input: ([10, 20], 1, 1) -> Output: []
 * Input: ([10, 20, 30], 0, 0) -> Output: [10, 20, 30]
 *
 * Constraints: 0 <= log.length <= 10^4; left, right >= -10^4.
 * O(n) time, O(n) space. No while. Never mutate `log`.
 */

function trimCalibrationWindow(log: number[], left: number, right: number): number[] {
  // Traduction: Clamp left and right return just middle

  // A -> negative floor -> 0
  const heads = Math.max(left, 0)
  const tails = Math.max(right, 0)

  if (heads + tails >= log.length) return []

  if (heads + tails < log.length) {
    return log.slice(heads, log.length - tails)
  }
  
  return [];
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q8-sprint-final.ts
console.log("Test 1:", trimCalibrationWindow([10, 20, 30, 40, 50], 1, 1)); // Expected: [20, 30, 40]
console.log("Test 2:", trimCalibrationWindow([10, 20], 1, 1)); // Expected: []
console.log("Test 3:", trimCalibrationWindow([10, 20, 30], 0, 0)); // Expected: [10, 20, 30]

// Hidden — floor negatives, cover-all, empty log, use clamped vars not raw left/right
console.log("Test 4 (hidden):", trimCalibrationWindow([1, 2, 3], -1, -1)); // Expected: [1, 2, 3]
console.log("Test 5 (hidden):", trimCalibrationWindow([1, 2, 3, 4], -2, 2)); // Expected: [1, 2]
console.log("Test 6 (hidden):", trimCalibrationWindow([1, 2, 3], 5, 0)); // Expected: []
console.log("Test 7 (hidden):", trimCalibrationWindow([], 1, 1)); // Expected: []
console.log("Test 8 (hidden):", trimCalibrationWindow([9], 0, -4)); // Expected: [9]

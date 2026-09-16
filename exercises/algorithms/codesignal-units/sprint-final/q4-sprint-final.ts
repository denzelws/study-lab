/**
 * Q4 — Count Drain Days (~10 min)
 * Mode: medium | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A sensor buffer holds `bytes` of data. Each day it loses exactly `loss`
 * bytes. Count how many days it can still operate before `bytes` drops
 * BELOW `minimum` (the lowest level that still counts as operational).
 *
 * Use a `while` loop that tracks the changing `bytes` value. If `loss <= 0`,
 * no measurable drain happens — return 0 (also prevents an infinite loop).
 * If `bytes` already starts below `minimum`, return 0.
 *
 * Examples:
 * Input: (100, 30, 10) -> Output: 4
 * Input: (25, 5, 5) -> Output: 5
 * Input: (3, 5, 10) -> Output: 0
 *
 * Constraints: 0 <= bytes <= 10^9; minimum >= 1; loss can be <= 0 (guard it).
 * O(days) time, O(1) space.
 */

function countDrainDays(bytes: number, loss: number, minimum: number): number {
  // Traduction: Return value days of how many loss still
  if ( loss <= 0 ) return 0

  let days = 0;

  while (bytes >= minimum) {
      bytes -= loss
      days++
  }

  return days;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q4-sprint-final.ts
console.log("Test 1:", countDrainDays(100, 30, 10)); // Expected: 4
console.log("Test 2:", countDrainDays(25, 5, 5)); // Expected: 5
console.log("Test 3:", countDrainDays(3, 5, 10)); // Expected: 0

// Hidden — >= vs >, already below, loss guard, exact equality
console.log("Test 4 (hidden):", countDrainDays(30, 10, 10)); // Expected: 3
console.log("Test 5 (hidden):", countDrainDays(0, 5, 1)); // Expected: 0
console.log("Test 6 (hidden):", countDrainDays(50, 0, 1)); // Expected: 0
console.log("Test 7 (hidden):", countDrainDays(7, 3, 1)); // Expected: 3
console.log("Test 8 (hidden):", countDrainDays(10, 10, 10)); // Expected: 1

/**
 * Q7 — Count Growth Steps (~10 min)
 * Mode: medium | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A plant starts at height `level`. Each day it grows exactly `rise` units.
 * Count how many growth days happen before `level` rises ABOVE `ceiling`
 * (the maximum height that still counts as acceptable).
 *
 * Use a `while` loop that tracks the changing `level` value. If `rise <= 0`,
 * no measurable growth happens — return 0 (also prevents an infinite loop).
 * If `level` already starts above `ceiling`, return 0.
 *
 * Examples:
 * Input: (0, 10, 25) -> Output: 3
 * Input: (10, 10, 20) -> Output: 2
 * Input: (30, 5, 25) -> Output: 0
 *
 * Constraints: 0 <= level <= 10^9; ceiling >= 0; rise can be <= 0 (guard it).
 * O(steps) time, O(1) space.
 */

function countGrowthSteps(level: number, rise: number, ceiling: number): number {
  if (rise <= 0) return 0

  let count = 0;

  while (level <= ceiling) {
    level += rise
    count++
  }
  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q7-sprint-final.ts
console.log("Test 1:", countGrowthSteps(0, 10, 25)); // Expected: 3
console.log("Test 2:", countGrowthSteps(10, 10, 20)); // Expected: 2
console.log("Test 3:", countGrowthSteps(30, 5, 25)); // Expected: 0

// Hidden — <= vs <, already above, rise guard, exact equality
console.log("Test 4 (hidden):", countGrowthSteps(25, 5, 25)); // Expected: 1
console.log("Test 5 (hidden):", countGrowthSteps(0, 0, 100)); // Expected: 0
console.log("Test 6 (hidden):", countGrowthSteps(15, 5, 20)); // Expected: 2
console.log("Test 7 (hidden):", countGrowthSteps(0, 1, 0)); // Expected: 1
console.log("Test 8 (hidden):", countGrowthSteps(10, 10, 15)); // Expected: 1

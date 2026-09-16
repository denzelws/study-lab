/**
 * Q6 — Count Fuel Cycles (~10 min)
 * Mode: medium | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A generator starts with `fuel` liters. Each full cycle burns exactly `burn`
 * liters. Count how many FULL cycles run before `fuel` drops BELOW `burn`
 * (not enough left for another full cycle).
 *
 * Use a `while` loop that tracks the changing `fuel` value. If `burn <= 0`,
 * no measurable cycle happens — return 0 (also prevents an infinite loop).
 * If `fuel` already starts below `burn`, return 0.
 *
 * Examples:
 * Input: (10, 3) -> Output: 3
 * Input: (9, 3) -> Output: 3
 * Input: (2, 5) -> Output: 0
 *
 * Constraints: 0 <= fuel <= 10^9; burn can be <= 0 (guard it).
 * O(cycles) time, O(1) space.
 */

function countFuelCycles(fuel: number, burn: number): number {
  // Traduction return n number of full cycle burn
  if (burn <= 0) return 0

  let fullCycle = 0

  while (fuel >= burn) {
    fuel -= burn
    fullCycle++
  }
  
  return fullCycle;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q6-sprint-final.ts
console.log("Test 1:", countFuelCycles(10, 3)); // Expected: 3
console.log("Test 2:", countFuelCycles(9, 3)); // Expected: 3
console.log("Test 3:", countFuelCycles(2, 5)); // Expected: 0

// Hidden — >= vs >, zero fuel, burn guard, exact equality
console.log("Test 4 (hidden):", countFuelCycles(3, 3)); // Expected: 1
console.log("Test 5 (hidden):", countFuelCycles(0, 3)); // Expected: 0
console.log("Test 6 (hidden):", countFuelCycles(10, 0)); // Expected: 0
console.log("Test 7 (hidden):", countFuelCycles(6, 2)); // Expected: 3
console.log("Test 8 (hidden):", countFuelCycles(1, 1)); // Expected: 1

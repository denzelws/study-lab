/**
 * Q5 — Count Stock Withdrawals (~10 min)
 * Mode: medium | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A warehouse holds `stock` units. Each withdrawal removes exactly `box`
 * units. Count how many withdrawals can still happen before `stock` drops
 * BELOW `minimum` (the lowest level that still counts as usable).
 *
 * Use a `while` loop that tracks the changing `stock` value. If `box <= 0`,
 * no measurable withdrawal happens — return 0 (also prevents an infinite loop).
 * If `stock` already starts below `minimum`, return 0.
 *
 * Examples:
 * Input: (100, 25, 10) -> Output: 4
 * Input: (25, 5, 5) -> Output: 5
 * Input: (3, 5, 10) -> Output: 0
 *
 * Constraints: 0 <= stock <= 10^9; minimum >= 1; box can be <= 0 (guard it).
 * O(withdrawals) time, O(1) space.
 */

function countStockWithdrawals(stock: number, box: number, minimum: number): number {
  // Traduction: return n number of withdrawls that still before stock drops the minimum
  if (box <= 0) return 0

  let count = 0

  while (stock >= minimum) {
    stock -= box
    count++
  }
  
  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q5-sprint-final.ts
console.log("Test 1:", countStockWithdrawals(100, 25, 10)); // Expected: 4
console.log("Test 2:", countStockWithdrawals(25, 5, 5)); // Expected: 5
console.log("Test 3:", countStockWithdrawals(3, 5, 10)); // Expected: 0

// Hidden — >= vs >, already below, box guard, exact equality
console.log("Test 4 (hidden):", countStockWithdrawals(30, 10, 10)); // Expected: 3
console.log("Test 5 (hidden):", countStockWithdrawals(0, 5, 1)); // Expected: 0
console.log("Test 6 (hidden):", countStockWithdrawals(50, 0, 1)); // Expected: 0
console.log("Test 7 (hidden):", countStockWithdrawals(7, 3, 1)); // Expected: 3
console.log("Test 8 (hidden):", countStockWithdrawals(10, 10, 10)); // Expected: 1

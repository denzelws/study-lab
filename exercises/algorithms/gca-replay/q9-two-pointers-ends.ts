/**
 * Q9 — Alternate Ends (~20 min)
 * Mode: Semana 0 | Topic: gca-replay | Language: TypeScript
 *
 * Given an array of numbers, return a new array built by taking values
 * in this order: first, last, second, second-last, and so on, until every
 * element has been used exactly once. Do not mutate the input.
 *
 * Examples:
 * Input: [1, 2, 3, 4, 5] -> Output: [1, 5, 2, 4, 3]
 * Input: [1, 2, 3, 4] -> Output: [1, 4, 2, 3]
 * Input: [9, 8] -> Output: [9, 8]
 * Input: [7] -> Output: [7]
 * Input: [] -> Output: []
 *
 * Constraints: 0 <= nums.length <= 10^5. O(n) time, O(n) space.
 */

// *Two pointers: left = 0 right = length - 1, alterna quem empurra no resultado* //

function alternateEnds(nums: number[]): number[] {
  let left = 0 // ponteiro no inicio
  let right = nums.length - 1 // ponteiro no final

  const result: number[] = []
  let fromLeft = true

  while (left <= right) {
    if (fromLeft) {
      result.push(nums[left]!)
      left++
    } else {
      result.push(nums[right]!)
      right-- 
    }

    fromLeft = !fromLeft
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q9-two-pointers-ends.ts
console.log("Test 1:", JSON.stringify(alternateEnds([1, 2, 3, 4, 5]))); // Expected: [1,5,2,4,3]
console.log("Test 2:", JSON.stringify(alternateEnds([1, 2, 3, 4]))); // Expected: [1,4,2,3]
console.log("Test 3:", JSON.stringify(alternateEnds([9, 8]))); // Expected: [9,8]
console.log("Test 4:", JSON.stringify(alternateEnds([7]))); // Expected: [7]
console.log("Test 5:", JSON.stringify(alternateEnds([]))); // Expected: []

/**
 * Q4 — Reverse Halves (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * Split the string at index Math.floor(n / 2). Return the right half followed
 * by the left half (no character swapping inside halves).
 *
 * Examples:
 * Input: ("abcdef") -> Output: "defabc"
 * Input: ("abcde") -> Output: "cdeab"
 * Input: ("ab") -> Output: "ba"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeReverseHalves(s: string): string {
  // Traduction: Return both right half + left half
  const n = s.length
  const mid = Math.floor(n / 2)
  
  const left = s.slice(0, mid)
  const right = s.slice(mid)

  return right + left
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q4-reverse-halves.ts
console.log("Test 1:", rearrangeReverseHalves("abcdef")); // Expected: "defabc"
console.log("Test 2:", rearrangeReverseHalves("abcde")); // Expected: "cdeab"
console.log("Test 3:", rearrangeReverseHalves("ab")); // Expected: "ba"
console.log("Test 4:", rearrangeReverseHalves("a")); // Expected: "a"
console.log("Test 5:", rearrangeReverseHalves("")); // Expected: ""

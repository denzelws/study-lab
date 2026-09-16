/**
 * Q5 — Even Indices Then Odd (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * Build the result by appending all characters at even indices (0, 2, 4, ...)
 * in order, then all characters at odd indices (1, 3, 5, ...) in order.
 *
 * Examples:
 * Input: ("abcdef") -> Output: "acebdf"
 * Input: ("abcde") -> Output: "acedb"
 * Input: ("ab") -> Output: "ab"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeEvenThenOdd(s: string): string {
  // Traduction: Return string append in order - even indice + odd indice
  const n = s.length

  if (n<=0) return ""

  let even = ""
  let odd = ""
  
  // Even case
  for (let i = 0; i < n; i += 2) {
    even += s[i]!
  }

  // ODD case
  for (let j = 1; j < n; j += 2) {
    odd += s[j]!
  }

  return even + odd;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q5-even-then-odd.ts
console.log("Test 1:", rearrangeEvenThenOdd("abcdef")); // Expected: "acebdf"
console.log("Test 2:", rearrangeEvenThenOdd("abcde")); // Expected: "acedb"
console.log("Test 3:", rearrangeEvenThenOdd("ab")); // Expected: "ab"
console.log("Test 4:", rearrangeEvenThenOdd("a")); // Expected: "a"
console.log("Test 5:", rearrangeEvenThenOdd("")); // Expected: ""

/**
 * Q6 — Mirror Reverse (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * Return the string reversed end-to-start (mirror). Index i moves to position n - 1 - i.
 *
 * Examples:
 * Input: ("abcdef") -> Output: "fedcba"
 * Input: ("abcde") -> Output: "edcba"
 * Input: ("ab") -> Output: "ba"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeMirror(s: string): string {
  let result = ""

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i]
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q6-mirror-reverse.ts
console.log("Test 1:", rearrangeMirror("abcdef")); // Expected: "fedcba"
console.log("Test 2:", rearrangeMirror("abcde")); // Expected: "edcba"
console.log("Test 3:", rearrangeMirror("ab")); // Expected: "ba"
console.log("Test 4:", rearrangeMirror("a")); // Expected: "a"
console.log("Test 5:", rearrangeMirror("")); // Expected: ""

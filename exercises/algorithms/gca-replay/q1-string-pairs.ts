/**
 * Q1 — String Pairs Replay (~10 min)
 * Mode: GCA Q1 equivalent | Topic: gca-replay | Language: TypeScript
 *
 * Swap characters within each pair at positions (0,1), (2,3), ...
 * If the length is odd, the last character stays unchanged.
 *
 * Examples:
 * Input: ("abcdef") -> Output: "badcfe"
 * Input: ("abcde") -> Output: "badce"
 * Input: ("ab") -> Output: "ba"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeByPairs(s: string): string {
  // Traduction: Return string in swap characters - if odd -> unchanged
  let result = ""

  for (let i: number = 0; i < s.length; i += 2) {
    if (i + 1 < s.length) {
      result += s[i+1]! + s[i]!
    } else {
      result += s[i]
    }
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q1-string-pairs.ts
console.log("Test 1:", rearrangeByPairs("abcdef")); // Expected: "badcfe"
console.log("Test 2:", rearrangeByPairs("abcde")); // Expected: "badce"
console.log("Test 3:", rearrangeByPairs("ab")); // Expected: "ba"
console.log("Test 4:", rearrangeByPairs("a")); // Expected: "a"
console.log("Test 5:", rearrangeByPairs("")); // Expected: ""

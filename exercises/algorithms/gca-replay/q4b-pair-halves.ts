/**
 * Q4b — Pair-Swap Each Half (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * Split at mid = Math.floor(n / 2). Apply Q1 pair-swap on the left half,
 * then on the right half. Odd tail inside a half stays (guard i+1 < length).
 * Concatenate leftSwapped + rightSwapped (not the original Q4 order).
 *
 * Examples:
 * Input: ("abcdef") -> Output: "bacedf"   // abc→bac, def→edf
 * Input: ("abcde") -> Output: "badce"     // ab→ba, cde→dce
 * Input: ("ab") -> Output: "ab"           // left "a", right "b"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangePairHalves(s: string): string {
  // Traduction: Return both right half + left half
  const n = s.length
  const mid = Math.floor(n / 2)
  let result = ""

  // Split the string
  const left = s.slice(0, mid)
  const right = s.slice(mid)

  for (let i = 0; i < left.length; i += 2) {
    if (i + 1 < left.length) {
      result += left[i + 1]! + left[i]!
    } else {
      result += left[i]!
    }
  }

  for (let j = 0; j < right.length; j += 2) {
    if (j + 1 < right.length) {
      result += right[j + 1]! + right[j]!
    } else {
      result += right[j]!
    }
  }

  return result
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q4b-pair-halves.ts
console.log("Test 1:", rearrangePairHalves("abcdef")); // Expected: "bacedf"
console.log("Test 2:", rearrangePairHalves("abcde")); // Expected: "badce"
console.log("Test 3:", rearrangePairHalves("ab")); // Expected: "ab"
console.log("Test 4:", rearrangePairHalves("a")); // Expected: "a"
console.log("Test 5:", rearrangePairHalves("")); // Expected: ""

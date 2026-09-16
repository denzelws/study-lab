/**
 * Q2 — Middle Anchor Swap (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * Swap characters within each adjacent pair (0,1), (2,3), ...
 * BUT when the length is odd, the middle character (index Math.floor(n/2))
 * never moves. Apply pair swaps only on the left segment and on the right segment.
 *
 * Examples:
 * Input: ("abcdef") -> Output: "badcfe"
 * Input: ("abcde") -> Output: "baced"   // middle "c" stays; NOT "badce" (Q1)
 * Input: ("ab") -> Output: "ba"
 * Input: ("a") -> Output: "a"
 * Input: ("") -> Output: ""
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeKeepMiddle(s: string): string {
  // Traduction: Return string swapped -> if ODD middle never movez
  const n = s.length
  const mid = Math.floor(n/2)
  const isOdd = n % 2 === 1
  let result = ""
  
  // EVEN case -> PAR
  if (!isOdd) {
    for (let i = 0; i < n; i += 2) {
      result += s[i+1]! + s[i]!
    }

    return result
  }

  // ODD case -> Impar
  // esquerda + meio + direita

  // loop left
  for (let i = 0; i < mid; i += 2) {
    result += s[i + 1]! + s[i]!
  }
 
  // mid
  result += s[mid]

  // loop right
  for (let j = mid + 1; j < n; j += 2) {
    result += s[j + 1]! + s[j]!
  }
  
  return result
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q2-middle-anchor.ts
console.log("Test 1:", rearrangeKeepMiddle("abcdef")); // Expected: "badcfe"
console.log("Test 2:", rearrangeKeepMiddle("abcde")); // Expected: "baced"
console.log("Test 3:", rearrangeKeepMiddle("ab")); // Expected: "ba"
console.log("Test 4:", rearrangeKeepMiddle("a")); // Expected: "a"
console.log("Test 5:", rearrangeKeepMiddle("")); // Expected: ""

/**
 * Q3 — Block Pair Swap (~10 min)
 * Mode: GCA string drill | Topic: gca-replay | Language: TypeScript
 *
 * 1. Swap characters at positions 0 and 1.
 * 2. If length >= 4, swap the 2-char block at indices [2,3] with the block at [4,5]
 *    (when length >= 6). For length 4, swap indices 2 and 3. For length 5, index 2
 *    stays fixed and swap indices 3 and 4.
 *
 * Examples:
 * Input: ("abcdef") -> Output: "baefdc"
 * Input: ("abcde") -> Output: "baced"
 * Input: ("abcd") -> Output: "badc"
 * Input: ("ab") -> Output: "ba"
 * Input: ("a") -> Output: "a"
 *
 * Constraints: 0 <= s.length <= 10^5. O(n) time, O(n) space.
 */

function rearrangeBlockPairSwap(s: string): string {
  // Traduction return string swapped based on length
  const n = s.length

  if (n <= 1) return s

  let result = ""
  
  // if exist 2 chars
  // First step -> change 2 blocks [1] - [0]
  if (n >= 2) {
    result += s[1]! + s[0]!
  }

  if (n === 4) {
    result += s[3]! + s[2]!
  }

  if (n === 5) {
    result += s[2]! + s[4]! + s[3]!
  }

  if (n >= 6) {
    result + s[4] + s[5] + s[2] + s[3]
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q3-block-pair-swap.ts
console.log("Test 1:", rearrangeBlockPairSwap("abcdef")); // Expected: "baefdc"
console.log("Test 2:", rearrangeBlockPairSwap("abcde")); // Expected: "baced"
console.log("Test 3:", rearrangeBlockPairSwap("abcd")); // Expected: "badc"
console.log("Test 4:", rearrangeBlockPairSwap("ab")); // Expected: "ba"
console.log("Test 5:", rearrangeBlockPairSwap("a")); // Expected: "a"

/**
 * Q1 — Join Unblocked Path (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A path printer keeps every `part` that is NOT blocked, then joins the
 * keepers with `/` between them (never leading/trailing unless a keeper
 * itself is empty).
 *
 * A part is blocked only when it has a first character AND that first
 * character appears in `blocked`. Empty parts (`""`) are never blocked —
 * they have no first character — and MUST still appear in the join.
 *
 * Empty input list → "". If every part is blocked → "".
 *
 * Examples:
 * Input: (["src", "app", "#tmp", "main"], "#") -> Output: "src/app/main"
 * Input: (["#hidden"], "#") -> Output: ""
 * Input: (["ok"], "-") -> Output: "ok"
 *
 * Constraints: 0 <= parts.length <= 10^4; 0 <= blocked.length <= 64.
 * O(n) time, O(n) space. Loop + accumulator — no join() as the whole solution.
 */

function joinUnblockedPath(parts: string[], blocked: string): string {
  // Traduction: Add / between parts and remove blocked
  let result = ""
  let first = true

  // Iterate items -> separate those who not start with blocked value + accumulator
  for (const part of parts) {
    if (part.length > 0 && blocked.includes(part[0]!)) continue

    if (!first) result += "/"
    result += part
    first = false
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q1-sprint-final.ts
console.log("Test 1:", joinUnblockedPath(["src", "app", "#tmp", "main"], "#")); // Expected: "src/app/main"
console.log("Test 2:", joinUnblockedPath(["#hidden"], "#")); // Expected: ""
console.log("Test 3:", joinUnblockedPath(["ok"], "-")); // Expected: "ok"

// Hidden — empty list, first-item flag, empty keeper, duplicate values
console.log("Test 4 (hidden):", joinUnblockedPath([], "#")); // Expected: ""
console.log("Test 5 (hidden):", joinUnblockedPath(["", "lib"], "#")); // Expected: "/lib"
console.log("Test 6 (hidden):", joinUnblockedPath(["src", "src"], "#")); // Expected: "src/src"
console.log("Test 7 (hidden):", joinUnblockedPath(["#a", "b"], "#")); // Expected: "b"
console.log("Test 8 (hidden):", joinUnblockedPath(["API"], "ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Expected: ""

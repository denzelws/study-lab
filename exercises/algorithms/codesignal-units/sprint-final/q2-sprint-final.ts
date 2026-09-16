/**
 * Q2 — Build Visible Log Line (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A log viewer keeps every `entry` that is NOT suppressed, then joins the
 * keepers with `" | "` between them (never leading/trailing unless a keeper
 * itself is empty).
 *
 * An entry is suppressed only when it has a first character AND that first
 * character appears in `suppressed`. Empty entries (`""`) are never
 * suppressed — they have no first character — and MUST still appear in the join.
 *
 * Empty input list → "". If every entry is suppressed → "".
 *
 * Examples:
 * Input: (["OK", "WARN", "!fail", "DONE"], "!") -> Output: "OK | WARN | DONE"
 * Input: (["!panic"], "!") -> Output: ""
 * Input: (["info"], "x") -> Output: "info"
 *
 * Constraints: 0 <= entries.length <= 10^4; 0 <= suppressed.length <= 64.
 * O(n) time, O(n) space. Loop + accumulator — no join() as the whole solution.
 */

function buildVisibleLogLine(entries: string[], suppressed: string): string {
  // Traduction: Return string + | starting in 2 element
  let result = ""
  let first = true

  for (const entry of entries) {
    if (entry.length > 0 && suppressed.includes(entry[0]!)) continue

    if (!first) result += " | "
    result += entry
    first = false
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q2-sprint-final.ts
console.log("Test 1:", buildVisibleLogLine(["OK", "WARN", "!fail", "DONE"], "!")); // Expected: "OK | WARN | DONE"
console.log("Test 2:", buildVisibleLogLine(["!panic"], "!")); // Expected: ""
console.log("Test 3:", buildVisibleLogLine(["info"], "x")); // Expected: "info"

// Hidden — empty list, first-item flag, empty keeper, duplicate values
console.log("Test 4 (hidden):", buildVisibleLogLine([], "!")); // Expected: ""
console.log("Test 5 (hidden):", buildVisibleLogLine(["", "ready"], "!")); // Expected: " | ready"
console.log("Test 6 (hidden):", buildVisibleLogLine(["go", "go"], "!")); // Expected: "go | go"
console.log("Test 7 (hidden):", buildVisibleLogLine(["!x", "y"], "!")); // Expected: "y"
console.log("Test 8 (hidden):", buildVisibleLogLine(["NODE"], "ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Expected: ""

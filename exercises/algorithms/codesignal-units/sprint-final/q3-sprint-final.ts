/**
 * Q3 — Build Valid Pipeline (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A CI runner keeps every `step` that is NOT banned, then joins the keepers
 * with `" > "` between them (never leading/trailing unless a keeper itself is
 * empty).
 *
 * A step is banned only when it has a first character AND that first
 * character appears in `banned`. Empty steps (`""`) are never banned —
 * they have no first character — and MUST still appear in the join.
 *
 * Empty input list → "". If every step is banned → "".
 *
 * Examples:
 * Input: (["build", "test", "!skip", "deploy"], "!") -> Output: "build > test > deploy"
 * Input: (["!halt"], "!") -> Output: ""
 * Input: (["run"], "z") -> Output: "run"
 *
 * Constraints: 0 <= steps.length <= 10^4; 0 <= banned.length <= 64.
 * O(n) time, O(n) space. Loop + accumulator — no join() as the whole solution.
 */

function buildValidPipeline(steps: string[], banned: string): string {
  // Traduction: return > and spaces between steps
  let result = ""
  let first = true

  for (const step of steps) {
    if (step.length > 0 && banned.includes(step[0]!)) continue

    if (!first) result += " > "
    result += step
    first = false
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q3-sprint-final.ts
console.log("Test 1:", buildValidPipeline(["build", "test", "!skip", "deploy"], "!")); // Expected: "build > test > deploy"
console.log("Test 2:", buildValidPipeline(["!halt"], "!")); // Expected: ""
console.log("Test 3:", buildValidPipeline(["run"], "z")); // Expected: "run"

// Hidden — empty list, first-item flag, empty keeper, duplicate values
console.log("Test 4 (hidden):", buildValidPipeline([], "!")); // Expected: ""
console.log("Test 5 (hidden):", buildValidPipeline(["", "done"], "!")); // Expected: " > done"
console.log("Test 6 (hidden):", buildValidPipeline(["a", "a"], "!")); // Expected: "a > a"
console.log("Test 7 (hidden):", buildValidPipeline(["!x", "y"], "!")); // Expected: "y"
console.log("Test 8 (hidden):", buildValidPipeline(["LINUX"], "ABCDEFGHIJKLMNOPQRSTUVWXYZ")); // Expected: ""

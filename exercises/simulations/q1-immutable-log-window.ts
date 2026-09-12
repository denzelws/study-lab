/**
 * Q1 — Immutable Log Window (~10 min)
 * Mode: Medium  |  Slot: CodeSignal Q1  |  Language: TypeScript
 *
 * Logs are in chronological order (oldest → newest). Return a *new* list
 * after these rules, in this exact order:
 *
 *   1. DROP NOISE — Remove every entry equal to "NOISE".
 *   2. COLLAPSE RUNS — If the same message appears several times in a
 *      row, keep only one. Non-consecutive duplicates stay.
 *   3. WINDOW — If more than `limit` items remain, keep only the last
 *      `limit` (the most recent). If `limit` or fewer remain, return all.
 *
 * Do NOT mutate `logs`.
 *
 * Examples:
 *   ["NOISE", "boot", "boot", "ok", "NOISE", "ok", "fail"], limit = 3
 *   → ["boot", "ok", "fail"]
 *
 *   ["a", "a", "a"], limit = 1
 *   → ["a"]
 *
 *   [], limit = 5
 *   → []
 *
 *   ["NOISE"], limit = 2
 *   → []
 *
 *   ["x", "y"], limit = 10
 *   → ["x", "y"]
 *
 *   ["err", "ok", "err"], limit = 3
 *   → ["err", "ok", "err"]
 *
 * Constraints:
 *   - 0 <= logs.length <= 10^4
 *   - 1 <= limit <= 10^4
 *   - Each log is a non-empty string
 *   - Expected time:  O(n)
 *   - Expected space: O(n) for the result (do not reuse the input array)
 *
 * 💡 How to Decode This Problem
 *   1. Core pattern: transform-by-copy. A → B → C, each step a new list.
 *   2. How to track state: A drops a fixed value; B only cares about the
 *      last message you kept (consecutive run); C cuts from the *end*.
 *   3. The trap: a Set in step B would drop the second "err" in the last
 *      example (not consecutive). splice on `logs` mutates input.
 *      limit larger than what remains means return everything.
 */

function trimLogWindow(logs: string[], limit: number): string[] {
  // Traduction: Return an array with no noise , one word at a time and dont pass the limit

  // ABC
  // A -> Remove every entry equal to noise
  const filteredList = logs.filter((name) => name !== "NOISE")

  // B -> Remove message appearing several times in a row
  const collapsed: string[] = []

  for (const msg of filteredList) {
    // if collapse its empty or msg !== lastCollapse -> add msg
    //if not -> do nothing
    if (collapsed === null || msg !== collapsed[collapsed.length - 1]) {
      collapsed.push(msg)
    }
  }

  return collapsed.length > limit ? collapsed.slice(-limit) : collapsed
}

// --- Test cases (run with: npx tsx exercises/simulations/q1-immutabl  e-log-window.ts) ---

console.log(
  trimLogWindow(["NOISE", "boot", "boot", "ok", "NOISE", "ok", "fail"], 3)
); // Expected: ["boot", "ok", "fail"]

console.log(trimLogWindow(["a", "a", "a"], 1)); // Expected: ["a"]

console.log(trimLogWindow([], 5)); // Expected: []

console.log(trimLogWindow(["NOISE"], 2)); // Expected: []

console.log(trimLogWindow(["x", "y"], 10)); // Expected: ["x", "y"]

console.log(trimLogWindow(["err", "ok", "err"], 3)); // Expected: ["err", "ok", "err"]

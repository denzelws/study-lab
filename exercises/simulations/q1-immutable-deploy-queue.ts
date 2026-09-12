/**
 * Q1/Q2 — Immutable Deploy Queue (~10–12 min)
 * Mode: Medium  |  Slot: CodeSignal Q1 → light Q2  |  Language: TypeScript
 *
 * A deployment queue is an ordered list of service names. Ops wants a
 * *new* queue after three rules, in this exact order:
 *
 *   1. CANCEL — Drop every service whose name appears in `cancelled`
 *      (remove ALL occurrences, not just the first).
 *   2. DEFER LEGACY — Among what remains, move every service whose name
 *      starts with "legacy-" to the end. Relative order inside each
 *      group must stay the same (stable partition).
 *   3. HOTFIX — Append `hotfixes` to the end, in the given order.
 *
 * Return the rebuilt queue. Do NOT mutate `services`, `cancelled`, or
 * `hotfixes`. Callers still need the original lists after you return.
 *
 * Examples:
 *   services  = ["api", "legacy-db", "web", "legacy-cache", "api"]
 *   cancelled = ["api"]
 *   hotfixes  = ["auth", "cdn"]
 *   → ["web", "legacy-db", "legacy-cache", "auth", "cdn"]
 *
 *   services  = []
 *   cancelled = ["x"]
 *   hotfixes  = ["a"]
 *   → ["a"]
 *
 *   services  = ["legacy-a", "legacy-b"]
 *   cancelled = []
 *   hotfixes  = []
 *   → ["legacy-a", "legacy-b"]
 *
 *   services  = ["web"]
 *   cancelled = ["web"]
 *   hotfixes  = []
 *   → []
 *
 *   services  = ["a", "b"]
 *   cancelled = []
 *   hotfixes  = ["c"]
 *   → ["a", "b", "c"]
 *
 * Constraints:
 *   - 0 <= services.length, cancelled.length, hotfixes.length <= 10^4
 *   - Each name is a non-empty string of lowercase letters, digits, and '-'
 *   - Expected time:  O(n + m) with n = services.length, m = cancelled.length
 *     (a nested scan of cancelled for every service is acceptable at this
 *     size, but a Set lookup is cleaner)
 *   - Expected space: O(n) for the result (do not reuse the input arrays)
 *
 * 💡 How to Decode This Problem
 *   1. Core pattern: transform-by-copy. Filter → stable split → concat.
 *      Think slice / filter / concat / spread — not splice on the input.
 *   2. How to track state: two buckets after cancel (current vs deferred),
 *      then one concat for hotfixes. cancelled is a lookup set, not a list
 *      you walk with splice.
 *   3. The trap: mutating `services` (splice, sort in place, push) or
 *      shuffling order inside a group. Also: cancelled names that never
 *      appear, empty queues, and "legacy-" only as a prefix ( "legacy" alone
 *      stays in the current group).
 */

function rebuildDeployQueue(
  services: string[],
  cancelled: string[],
  hotfixes: string[]
): string[] {
  // Traduction: Return another list with services not cancelled with
  // legacy-* end and hotfixes at end
  // A-B-C pattern

  // A -> remove cancelled
  const cancelledSet = new Set<string>(cancelled) 
  const filteredResult = services.filter((name) => !cancelledSet.has(name))

  // B -> move every service whose name starts with legacy-
  const legacyList = filteredResult.filter((name) => name.startsWith("legacy-"))
  const currentList = filteredResult.filter((name) => !name.startsWith("legacy-"))

  // C -> append hotfixes
  const result = [...currentList, ...legacyList, ...hotfixes]
  return result
}

// --- Test cases (run with: npx tsx exercises/simulations/q1-immutable-deploy-queue.ts) ---

console.log(
  rebuildDeployQueue(
    ["api", "legacy-db", "web", "legacy-cache", "api"],
    ["api"],
    ["auth", "cdn"]
  )
); // Expected: ["web", "legacy-db", "legacy-cache", "auth", "cdn"]

console.log(rebuildDeployQueue([], ["x"], ["a"])); // Expected: ["a"]

console.log(rebuildDeployQueue(["legacy-a", "legacy-b"], [], [])); // Expected: ["legacy-a", "legacy-b"]

console.log(rebuildDeployQueue(["web"], ["web"], [])); // Expected: []

console.log(rebuildDeployQueue(["a", "b"], [], ["c"])); // Expected: ["a", "b", "c"]

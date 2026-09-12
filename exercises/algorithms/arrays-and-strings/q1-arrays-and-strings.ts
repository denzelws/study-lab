/**
 * Q1 — Immutable Access Queue (~10 min)
 * Mode: medium | Topic: arrays-and-strings | Language: TypeScript
 *
 * An API gateway receives an ordered list of access requests (strings).
 * Return a *new* queue after these rules, in this exact order:
 *
 *   1. REVOKE — Drop every request whose name appears in `revoked`
 *      (remove ALL occurrences, not just the first).
 *   2. PRIORITIZE BULK — Among what remains, move every request whose name
 *      starts with "bulk-" to the front. Relative order inside each group
 *      must stay the same (stable partition).
 *   3. SCHEDULE — Append `scheduled` to the end, in the given order.
 *
 * Do NOT mutate `requests`, `revoked`, or `scheduled`.
 *
 * Examples:
 *   requests  = ["read", "bulk-export", "write", "bulk-import", "read"]
 *   revoked   = ["read"]
 *   scheduled = ["audit"]
 *   → ["bulk-export", "bulk-import", "write", "audit"]
 *
 *   requests  = []
 *   revoked   = ["x"]
 *   scheduled = ["ping"]
 *   → ["ping"]
 *
 *   requests  = ["api"]
 *   revoked   = ["api"]
 *   scheduled = []
 *   → []
 *
 *   requests  = ["write", "read"]
 *   revoked   = []
 *   scheduled = ["sync"]
 *   → ["write", "read", "sync"]
 *
 * Constraints:
 *   - 0 <= requests.length, revoked.length, scheduled.length <= 10^4
 *   - Each name is a non-empty string of lowercase letters, digits, and '-'
 *   - Expected time:  O(n + m) with n = requests.length, m = revoked.length
 *   - Expected space: O(n) for the result
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Devolver outra lista sem revogados, com bulk-* na frente e agendados no fim.
 * 2. Decomposição: A — filter revogados | B — particionar bulk vs resto, bulk primeiro | C — concat scheduled
 * 3. Ferramentas TS: Set(revoked) + filter; dois filters para partição estável; spread/concat no final
 * 4. Armadilhas: splice no input; sort instável; "bulk" sem hífen não move; revogado que não existe na fila
 */

function rebuildAccessQueue(
  requests: string[],
  revoked: string[],
  scheduled: string[]
): string[] {
  // Traduction: Return a new queue following 3 rules 
  // ABC

  // A -> filter "revoked"
  const revokedSet = new Set<string>(revoked)
  const filteredList = requests.filter((name) => !revokedSet.has(name))

  // B -> partionate bulk
  const bulkList = filteredList.filter((name) => name.startsWith("bulk-"))
  const currentList = filteredList.filter((name) => !name.startsWith("bulk-"))

  // C -> append
  const result = [...bulkList, ...currentList, ...scheduled]

  return result
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/arrays-and-strings/q1-arrays-and-strings.ts

console.log(
  rebuildAccessQueue(
    ["read", "bulk-export", "write", "bulk-import", "read"],
    ["read"],
    ["audit"]
  )
); // Expected: ["bulk-export", "bulk-import", "write", "audit"]

console.log(rebuildAccessQueue([], ["x"], ["ping"])); // Expected: ["ping"]

console.log(rebuildAccessQueue(["api"], ["api"], [])); // Expected: []

console.log(rebuildAccessQueue(["write", "read"], [], ["sync"])); // Expected: ["write", "read", "sync"]

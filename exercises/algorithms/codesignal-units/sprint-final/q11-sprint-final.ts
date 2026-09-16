/**
 * Q11 — Insert Ticket At Gate (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A boarding queue must insert `ticket` at position `index`, shifting the
 * rest right. Return a NEW array. Never mutate `queue`.
 *
 * Clamp `index` into [0, queue.length]: values below 0 become 0 (floor),
 * values above length become length (ceiling — append). Empty queue with
 * any index → `[ticket]`.
 *
 * Examples:
 * Input: (["a", "c", "d"], 1, "b") -> Output: ["a", "b", "c", "d"]
 * Input: (["a"], 0, "z") -> Output: ["z", "a"]
 * Input: (["a"], 9, "z") -> Output: ["a", "z"]
 *
 * Constraints: 0 <= queue.length <= 10^4. O(n) time, O(n) space.
 * No while. Never mutate `queue`.
 */

function insertTicketAtGate(queue: string[], index: number, ticket: string): string[] {
  const pos = Math.min(Math.max(index, 0), queue.length)

  const before = queue.slice(0, pos)
  const after = queue.slice(pos)

  return [...before, ticket, ...after]
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q11-sprint-final.ts
console.log("Test 1:", insertTicketAtGate(["a", "c", "d"], 1, "b")); // Expected: ["a", "b", "c", "d"]
console.log("Test 2:", insertTicketAtGate(["a"], 0, "z")); // Expected: ["z", "a"]
console.log("Test 3:", insertTicketAtGate(["a"], 9, "z")); // Expected: ["a", "z"]

// Hidden — floor, ceiling, empty, use clamped pos not raw index
console.log("Test 4 (hidden):", insertTicketAtGate(["a", "b"], -3, "z")); // Expected: ["z", "a", "b"]
console.log("Test 5 (hidden):", insertTicketAtGate([], 0, "z")); // Expected: ["z"]
console.log("Test 6 (hidden):", insertTicketAtGate([], -5, "x")); // Expected: ["x"]
console.log("Test 7 (hidden):", insertTicketAtGate(["p", "q"], 2, "r")); // Expected: ["p", "q", "r"]
console.log("Test 8 (hidden):", insertTicketAtGate(["p", "q"], 99, "r")); // Expected: ["p", "q", "r"]

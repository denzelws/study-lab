/**
 * Q2 — Trim The Edges (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A scanner must ignore the first and the last reading of a batch (warm-up
 * and cool-down values). Return a NEW array without the first and last
 * items, keeping the middle order. If the batch has 2 or fewer items,
 * nothing reliable remains — return []. Do NOT mutate `readings`.
 *
 * Examples:
 * Input: ([10, 20, 30, 40]) -> Output: [20, 30]
 * Input: ([1, 2]) -> Output: []
 * Input: ([7]) -> Output: []
 * Input: ([]) -> Output: []
 * Input: ([5, 6, 7]) -> Output: [6]
 *
 * Constraints: 0 <= readings.length <= 10^4; O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Devolver cópia só com o miolo, sem a primeira nem a última posição.
 * 2. Decomposição: Passo A -> checar tamanho <= 2 | Passo B -> fatiar do índice 1 até antes do fim
 * 3. Ferramentas TS: `slice(1, -1)` — `slice` copia, nunca muta
 * 4. Armadilhas: `shift`/`pop` no input mutam; `splice(1, len-2)` muta o original — use `slice`; `arr[arr.length]` é out-of-bounds
 */

function trimEdges(readings: number[]): number[] {
  // Translation: Ignore first and last from array return just middle order < 2
  if (readings.length <= 2) {
    return [];
  }

  return readings.slice(1, -1)
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q2-unit1-arrays-strings.ts
console.log("Test 1:", trimEdges([10, 20, 30, 40])); // Expected: [20, 30]
console.log("Test 2:", trimEdges([1, 2])); // Expected: []
console.log("Test 3:", trimEdges([7])); // Expected: []
console.log("Test 4:", trimEdges([])); // Expected: []
console.log("Test 5:", trimEdges([5, 6, 7])); // Expected: [6]

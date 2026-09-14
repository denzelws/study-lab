/**
 * Q4 — Sum Even Indices (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * Sensors at EVEN positions (0, 2, 4, ...) are the calibrated ones. Given
 * `values`, sum only the items at even indexes using a standard `for` with
 * index. Empty list → 0. This drill trains index control (`i += 2`).
 *
 * Examples:
 * Input: ([10, 20, 30, 40]) -> Output: 40
 * Input: ([5]) -> Output: 5
 * Input: ([]) -> Output: 0
 * Input: ([1, 2, 3]) -> Output: 4
 * Input: ([7, 7, 7, 7, 7]) -> Output: 21
 *
 * Constraints: 0 <= values.length <= 10^4. O(n) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Somar só os itens nas posições pares (0, 2, 4...).
 * 2. Decomposição: Passo A -> acumulador `sum = 0` | Passo B -> `for` pulando de 2 em 2 | Passo C -> retornar sum
 * 3. Ferramentas TS: `for (let i = 0; i < values.length; i += 2)`; `sum += values[i]!`
 * 4. Armadilhas: `i <= values.length` (off-by-one, lê undefined); `i++` com `if (i % 2)` funciona mas o salto é mais direto; `noUncheckedIndexedAccess` exige `!` ou checagem
 */

function sumEvenIndices(values: number[]): number {
  // Traduction: Sum even index values inside araay

  // Accumulator 
  let sum = 0

  // For jumping 2 per 2
  for (let i = 0; i < values.length; i += 2) {
    sum += values[i]!
  }

  return sum;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q4-unit2-loops.ts
console.log("Test 1:", sumEvenIndices([10, 20, 30, 40])); // Expected: 40
console.log("Test 2:", sumEvenIndices([5])); // Expected: 5
console.log("Test 3:", sumEvenIndices([])); // Expected: 0
console.log("Test 4:", sumEvenIndices([1, 2, 3])); // Expected: 4
console.log("Test 5:", sumEvenIndices([7, 7, 7, 7, 7])); // Expected: 21

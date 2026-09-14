/**
 * Q8 — Halve Until Below (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A cache shrinks: each day its size halves (rounded down). Given `size`
 * and `threshold`, count how many days until size drops BELOW `threshold`,
 * tracking the changing state with `while`. If size already starts below
 * threshold, return 0.
 *
 * Examples:
 * Input: (100, 10) -> Output: 4
 * Input: (8, 8) -> Output: 1
 * Input: (5, 10) -> Output: 0
 * Input: (1, 1) -> Output: 1
 * Input: (16, 2) -> Output: 4
 *
 * Constraints: 0 <= size <= 10^9; 1 <= threshold <= 10^9. O(log size) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Contar quantas metades até ficar abaixo do limite.
 * 2. Decomposição: Passo A -> `days = 0` | Passo B -> `while (size >= threshold)`: metade + conta | Passo C -> retornar days
 * 3. Ferramentas TS: `while (size >= threshold)`; `size = Math.floor(size / 2)`; `days++`
 * 4. Armadilhas: condição `>` em vez de `>=` (erra (8, 8) e (1, 1)); esquecer de atualizar `size` (loop infinito); divisão sem `Math.floor` gera fração
 */

function halveUntilBelow(size: number, threshold: number): number {
  // Traduction: how many halves until drow below THRESHOLD
  let days = 0

  while (size >= threshold) {
    size = Math.floor(size/2)
    days++
  }

  return days;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q8-unit2-loops.ts
console.log("Test 1:", halveUntilBelow(100, 10)); // Expected: 4
console.log("Test 2:", halveUntilBelow(8, 8)); // Expected: 1
console.log("Test 3:", halveUntilBelow(5, 10)); // Expected: 0
console.log("Test 4:", halveUntilBelow(1, 1)); // Expected: 1
console.log("Test 5:", halveUntilBelow(16, 2)); // Expected: 4

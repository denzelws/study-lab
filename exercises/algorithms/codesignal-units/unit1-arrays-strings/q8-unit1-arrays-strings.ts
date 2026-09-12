/**
 * Q8 — Drop Heads And Tails (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A batch must drop its first `n` calibration items and its last `m`
 * cooldown items. Return a NEW array with the remaining middle. If the
 * drops cover the whole array (or more), return []. Never mutate `batch`;
 * treat negative `n`/`m` as 0.
 *
 * Examples:
 * Input: ([1, 2, 3, 4, 5, 6], 2, 1) -> Output: [3, 4, 5]
 * Input: ([1, 2], 1, 1) -> Output: []
 * Input: ([1, 2, 3], 0, 0) -> Output: [1, 2, 3]
 * Input: ([1, 2, 3], 5, 0) -> Output: []
 * Input: ([1, 2, 3, 4], 1, 2) -> Output: [2]
 *
 * Constraints: 0 <= batch.length <= 10^4; n, m >= -10^4. O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Fatiar o miolo pulando n do início e m do fim.
 * 2. Decomposição: Passo A -> normalizar negativos para 0 | Passo B -> slice(n, length - m) | Passo C -> vazio se o corte cruzar
 * 3. Ferramentas TS: `slice(start, end)` com fim negativo (`slice(n, batch.length - m)` ou `slice(n, -m)` quando m > 0)
 * 4. Armadilhas: `splice` muta o input; `slice(n, -0)` é `slice(n, 0)` = [] — trate m = 0 separado; esquecer n/m negativos
 */

function dropHeadsAndTails(batch: number[], n: number, m: number): number[] {
  // Traduction: Return the array with n first and m last removed

  // A -> Normalize to 0
  const heads = Math.max(n,0)
  const tails = Math.max(m,0)

  // B -> Check if covers all
  if (heads + tails < batch.length) {
    return batch.slice(heads, batch.length - tails)
  }

  return [];
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q8-unit1-arrays-strings.ts
console.log("Test 1:", dropHeadsAndTails([1, 2, 3, 4, 5, 6], 2, 1)); // Expected: [3, 4, 5]
console.log("Test 2:", dropHeadsAndTails([1, 2], 1, 1)); // Expected: []
console.log("Test 3:", dropHeadsAndTails([1, 2, 3], 0, 0)); // Expected: [1, 2, 3]
console.log("Test 4:", dropHeadsAndTails([1, 2, 3], 5, 0)); // Expected: []
console.log("Test 5:", dropHeadsAndTails([1, 2, 3, 4], 1, 2)); // Expected: [2]

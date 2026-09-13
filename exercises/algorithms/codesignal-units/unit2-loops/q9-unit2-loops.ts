/**
 * Q9 — Build Dashed Path (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A route printer joins `stops` with `-` between them (never leading or
 * trailing). Same family as Q2, but with a dash and an explicit
 * first-item flag — the professional way to avoid a trailing separator
 * inside loops. Empty list → "".
 *
 * Examples:
 * Input: (["a", "b", "c"]) -> Output: "a-b-c"
 * Input: (["x"]) -> Output: "x"
 * Input: ([]) -> Output: ""
 * Input: (["2024", "09", "12"]) -> Output: "2024-09-12"
 *
 * Constraints: 0 <= stops.length <= 10^4. O(total characters) time and space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Colar paradas com `-` só entre elas.
 * 2. Decomposição: Passo A -> `result = ""` + flag `first = true` | Passo B -> loop: se não é o primeiro, cola `-` antes; cola a parada; vira flag | Passo C -> retornar result
 * 3. Ferramentas TS: `for (const s of stops)`; `let first = true`; `result += ...`
 * 4. Armadilhas: colar `-` depois de cada item (sobra no fim); `result === ""` falha se uma parada for "" — a flag booleana é mais robusta
 */

function buildDashedPath(stops: string[]): string {
  // TODO: Implemente a lógica aqui
  return "";
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q9-unit2-loops.ts
console.log("Test 1:", buildDashedPath(["a", "b", "c"])); // Expected: "a-b-c"
console.log("Test 2:", buildDashedPath(["x"])); // Expected: "x"
console.log("Test 3:", buildDashedPath([])); // Expected: ""
console.log("Test 4:", buildDashedPath(["2024", "09", "12"])); // Expected: "2024-09-12"

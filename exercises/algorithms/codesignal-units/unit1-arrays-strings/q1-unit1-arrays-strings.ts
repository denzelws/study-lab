/**
 * Q1 — Pack Both Ends (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A queue loader must add one crate to the FRONT and one crate to the BACK
 * of a loading bay list. Return a NEW array with `front` first, then all
 * original items in order, then `back` last. Do NOT mutate `bay`.
 *
 * Examples:
 * Input: (["b", "c"], "a", "d") -> Output: ["a", "b", "c", "d"]
 * Input: ([], "x", "y") -> Output: ["x", "y"]
 * Input: (["m"], "f", "l") -> Output: ["f", "m", "l"]
 * 
 * Constraints: 0 <= bay.length <= 10^4; each item is a non-empty string.
 * O(n) time, O(n) space for the new array.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Devolver cópia nova com um item colado em cada ponta.
 * 2. Decomposição: Passo A -> copiar original | Passo B -> front na frente | Passo C -> back atrás
 * 3. Ferramentas TS: Spread `[...]` (ou `unshift`/`push` apenas numa cópia, nunca no input)
 * 4. Armadilhas: `push`/`unshift` direto em `bay` muta o input; `bay[0] = front` sobrescreve em vez de inserir
 */

function packBothEnds(bay: string[], front: string, back: string): string[] {
  // Traduction: Copy the original list, pull front in the front and back in the back
  return [front, ...bay, back];
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q1-unit1-arrays-strings.ts
console.log("Test 1:", packBothEnds(["b", "c"], "a", "d")); // Expected: ["a", "b", "c", "d"]
console.log("Test 2:", packBothEnds([], "x", "y")); // Expected: ["x", "y"]
console.log("Test 3:", packBothEnds(["m"], "f", "l")); // Expected: ["f", "m", "l"]
console.log("Test 4:", packBothEnds(["only"], "f", "l")); // Expected: ["f", "only", "l"]

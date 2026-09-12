/**
 * Q9 — Insert At Position (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A boarding list must insert passenger `name` at position `index`,
 * shifting the rest right. Return a NEW array. Clamp the index: values
 * below 0 become 0, values above length become length (append). Never
 * mutate `line`.
 *
 * Examples:
 * Input: (["a", "c", "d"], 1, "b") -> Output: ["a", "b", "c", "d"]
 * Input: (["a"], 0, "z") -> Output: ["z", "a"]
 * Input: (["a"], 9, "z") -> Output: ["a", "z"]
 * Input: (["a", "b"], -3, "z") -> Output: ["z", "a", "b"]
 * Input: ([], 0, "z") -> Output: ["z"]
 *
 * Constraints: 0 <= line.length <= 10^4. O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Cópia nova com um item extra encaixado na posição (limitada aos extremos).
 * 2. Decomposição: Passo A -> clampar índice | Passo B -> fatiar antes + depois | Passo C -> antes + nome + depois
 * 3. Ferramentas TS: `slice(0, index)` + `slice(index)` com Spread `[...]` (equivalente imutável do `splice`)
 * 4. Armadilhas: `splice(index, 0, name)` direto em `line` muta o input; índice negativo/cima sem clamp quebra o corte
 */

function insertAtPosition(line: string[], index: number, name: string): string[] {
  // Traduction: Return array insert passenger name at pos index.
  // Values below 0 become 0
  // A -> Clamp : stick index inside [0, length]
  const pos = Math.min(Math.max(index, 0), line.length)

  // B -> Separate before and after using pos
  const before = line.slice(0, pos)
  const after = line.slice(pos)

  // C -> Return array
  return [...before, name, ...after];
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q9-unit1-arrays-strings.ts
console.log("Test 1:", insertAtPosition(["a", "c", "d"], 1, "b")); // Expected: ["a", "b", "c", "d"]
console.log("Test 2:", insertAtPosition(["a"], 0, "z")); // Expected: ["z", "a"]
console.log("Test 3:", insertAtPosition(["a"], 9, "z")); // Expected: ["a", "z"]
console.log("Test 4:", insertAtPosition(["a", "b"], -3, "z")); // Expected: ["z", "a", "b"]
console.log("Test 5:", insertAtPosition([], 0, "z")); // Expected: ["z"]

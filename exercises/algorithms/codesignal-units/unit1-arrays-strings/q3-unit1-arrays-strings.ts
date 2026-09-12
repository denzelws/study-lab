/**
 * Q3 — Replace At Index (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A seat map is an array of names. Seat `index` must be reassigned to
 * `name`. Return a NEW array with only that position changed. If `index`
 * is out of bounds (negative or >= length), return an unchanged copy.
 * Do NOT mutate `seats`.
 *
 * Examples:
 * Input: (["ana", "bob", "cid"], 1, "bea") -> Output: ["ana", "bea", "cid"]
 * Input: (["ana", "bob"], 5, "x") -> Output: ["ana", "bob"]
 * Input: (["ana"], -1, "x") -> Output: ["ana"]
 * Input: ([], 0, "x") -> Output: []
 *
 * Constraints: 0 <= seats.length <= 10^4; O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Copiar a lista e trocar só uma posição válida.
 * 2. Decomposição: Passo A -> copiar | Passo B -> validar índice | Passo C -> trocar na cópia
 * 3. Ferramentas TS: Spread `[...seats]` para copiar; atribuição `copy[index] = name` só na cópia
 * 4. Armadilhas: trocar direto em `seats[index]` muta o input; `seats[seats.length]` é out-of-bounds; esquecer o caso negativo
 */

function replaceAtIndex(seats: string[], index: number, name: string): string[] {
  // Traduction: Return a new array wuth position changed if out of bounds return original copy

  // A -> Copy array
  const newSeats = [...seats]

  // B -> out of bound validation
  if (index < 0 || index >= seats.length) {
    return newSeats
  }

  // C -> Atribuition
  newSeats[index] = name
  return newSeats
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q3-unit1-arrays-strings.ts
console.log("Test 1:", replaceAtIndex(["ana", "bob", "cid"], 1, "bea")); // Expected: ["ana", "bea", "cid"]
console.log("Test 2:", replaceAtIndex(["ana", "bob"], 5, "x")); // Expected: ["ana", "bob"]
console.log("Test 3:", replaceAtIndex(["ana"], -1, "x")); // Expected: ["ana"]
console.log("Test 4:", replaceAtIndex([], 0, "x")); // Expected: []

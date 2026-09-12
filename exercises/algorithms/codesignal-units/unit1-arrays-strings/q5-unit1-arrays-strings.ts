/**
 * Q5 — Patch First Character (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * Product codes must start with a zone letter. Given `code` and `zone`,
 * return a NEW string with the first character replaced by `zone`. If
 * `code` is empty, return it unchanged. Strings are immutable — build a
 * new one, never assign `code[0]`.
 *
 * Examples:
 * Input: ("x123", "B") -> Output: "B123"
 * Input: ("a", "Z") -> Output: "Z"
 * Input: ("", "Z") -> Output: ""
 * Input: ("hello", "H") -> Output: "Hello"
 *
 * Constraints: 0 <= code.length <= 10^4; `zone` is a single character.
 * O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Nova string igual, só com a primeira letra trocada.
 * 2. Decomposição: Passo A -> tratar string vazia | Passo B -> zona + resto a partir do índice 1
 * 3. Ferramentas TS: `slice(1)` ou `substring(1)`; interpolação `` `${zone}${rest}` ``
 * 4. Armadilhas: `code[0] = zone` não funciona (string imutável, falha silenciosa); `slice(0)` manteria a 1ª letra duplicada
 */

function patchFirstChar(code: string, zone: string): string {
  // Traduction: Return a new string replacing first letter by zone
  if (code.length === 0) {
    return code
  }

  return `${zone}${code.slice(1)}`
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q5-unit1-arrays-strings.ts
console.log("Test 1:", patchFirstChar("x123", "B")); // Expected: "B123"
console.log("Test 2:", patchFirstChar("a", "Z")); // Expected: "Z"
console.log("Test 3:", patchFirstChar("", "Z")); // Expected: ""
console.log("Test 4:", patchFirstChar("hello", "H")); // Expected: "Hello"

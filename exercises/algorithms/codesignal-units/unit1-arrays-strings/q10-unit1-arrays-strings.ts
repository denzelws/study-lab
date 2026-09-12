/**
 * Q10 — Join With Separator (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A breadcrumb trail is a list of `parts` joined by `separator` (no leading
 * or trailing separator). Given an array of words, return the single NEW
 * string. An empty list returns "". This is the inverse of `split` — you
 * practiced `split` in the tape drills, now close the loop with `join`.
 *
 * Examples:
 * Input: (["home", "docs", "file"], " > ") -> Output: "home > docs > file"
 * Input: (["a", "b", "c"], "-") -> Output: "a-b-c"
 * Input: (["solo"], ",") -> Output: "solo"
 * Input: ([], ",") -> Output: ""
 * Input: (["2024", "09", "12"], "/") -> Output: "2024/09/12"
 *
 * Constraints: 0 <= parts.length <= 10^4; each part non-empty.
 * O(total characters) time and space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Colar todas as palavras numa string só, com separador entre elas.
 * 2. Decomposição: Passo A -> tratar lista vazia | Passo B -> join com o separador
 * 3. Ferramentas TS: `parts.join(separator)` — separador só aparece ENTRE itens, nunca nas pontas
 * 4. Armadilhas: concatenar com `+` em loop adiciona separador sobrando no fim; spread `[...parts]` sozinho não junta strings; `join()` sem arg usa vírgula
 */

function joinWithSeparator(parts: string[], separator: string): string {
  // Traduction: Join each word element with separator

  // Validate empty list
  if (parts.length === 0) {
    return ""
  }

  // Join all with separator
  return parts.join(separator);
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q10-unit1-arrays-strings.ts
console.log("Test 1:", joinWithSeparator(["home", "docs", "file"], " > ")); // Expected: "home > docs > file"
console.log("Test 2:", joinWithSeparator(["a", "b", "c"], "-")); // Expected: "a-b-c"
console.log("Test 3:", joinWithSeparator(["solo"], ",")); // Expected: "solo"
console.log("Test 4:", joinWithSeparator([], ",")); // Expected: ""
console.log("Test 5:", joinWithSeparator(["2024", "09", "12"], "/")); // Expected: "2024/09/12"

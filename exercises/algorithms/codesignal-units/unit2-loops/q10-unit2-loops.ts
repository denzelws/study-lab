/**
 * Q10 — Count Long Capitalized Tags (~12 min, capstone)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A release gate counts "serious" tags: length >= `minLen` AND first
 * character uppercase (A–Z). Loop once with `for...of`, check both
 * conditions per tag, accumulate. Empty list → 0. Capstone: junta
 * iteração + condicional + acumulador + fronteira de string (Unit 1).
 *
 * Examples:
 * Input: (["API", "web", "Go", "a"], 2) -> Output: 2
 * Input: (["a", "b"], 5) -> Output: 0
 * Input: ([], 3) -> Output: 0
 * Input: (["Z", "xy", "QW"], 1) -> Output: 2
 * Input: (["abc", "Def"], 3) -> Output: 1
 *
 * Constraints: 0 <= tags.length <= 10^4; 1 <= minLen <= 10^4. O(total characters) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Contar tags longas o bastante E começando com maiúscula.
 * 2. Decomposição: Passo A -> `count = 0` | Passo B -> `for...of`: `tag.length >= minLen` e `/^[A-Z]/.test(tag)`? conta | Passo C -> retornar count
 * 3. Ferramentas TS: `for (const tag of tags)`; `tag.length`; Regex `/^[A-Z]/.test(tag)`
 * 4. Armadilhas: checar `tag[0]` sem `!`/guarda em string vazia (regex `^` evita isso); `||` em vez de `&&` (contaria "web" longa); esquecer lista vazia
 */

function countLongCapitalizedTags(tags: string[], minLen: number): number {
  // Traduction: Count long tags that -> length >= `minLen` AND first character uppercase (A–Z)

  let count = 0
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (const tag of tags) {
    if (tag.length >= minLen && letters.includes(tag[0]!)) count++
  }

  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q10-unit2-loops.ts
console.log("Test 1:", countLongCapitalizedTags(["API", "web", "Go", "a"], 2)); // Expected: 2
console.log("Test 2:", countLongCapitalizedTags(["a", "b"], 5)); // Expected: 0
console.log("Test 3:", countLongCapitalizedTags([], 3)); // Expected: 0
console.log("Test 4:", countLongCapitalizedTags(["Z", "xy", "QW"], 1)); // Expected: 2
console.log("Test 5:", countLongCapitalizedTags(["abc", "Def"], 3)); // Expected: 1

/**
 * Q6 — Strip Vowels (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A license-plate normalizer must remove every vowel (a, e, i, o, u, both
 * cases) from `text`. Build the result with a loop and a string
 * accumulator, keeping all other characters in order. No vowels → same
 * string; only vowels → "".
 *
 * Examples:
 * Input: ("hello") -> Output: "hll"
 * Input: ("aei") -> Output: ""
 * Input: ("AbC") -> Output: "bC"
 * Input: ("") -> Output: ""
 * Input: ("rhythm") -> Output: "rhythm"
 *
 * Constraints: 0 <= text.length <= 10^5. O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Copiar a string pulando as vogais.
 * 2. Decomposição: Passo A -> acumulador `result = ""` | Passo B -> `for...of`: é vogal? pula (`continue`) senão cola | Passo C -> retornar result
 * 3. Ferramentas TS: `for (const ch of text)`; `'aeiouAEIOU'.includes(ch)`; `continue`
 * 4. Armadilhas: tentar deletar por índice (string imutável); checar só minúsculas e deixar "A" passar; `filter`/`replace` com regex global fogem do drill (o treino é o loop)
 */

function stripVowels(text: string): string {
  // TODO: Implemente a lógica aqui
  return "";
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q6-unit2-loops.ts
console.log("Test 1:", stripVowels("hello")); // Expected: "hll"
console.log("Test 2:", stripVowels("aei")); // Expected: ""
console.log("Test 3:", stripVowels("AbC")); // Expected: "bC"
console.log("Test 4:", stripVowels("")); // Expected: ""
console.log("Test 5:", stripVowels("rhythm")); // Expected: "rhythm"

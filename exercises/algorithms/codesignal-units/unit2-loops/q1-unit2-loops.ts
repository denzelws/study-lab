/**
 * Q1 — Count Uppercase (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A log scanner must count how many characters in `text` are uppercase
 * English letters (A–Z). Scan with `for...of`, test each char, accumulate
 * the count in a variable. Digits, spaces and symbols never count.
 *
 * Examples:
 * Input: ("HeLLo") -> Output: 3
 * Input: ("abc") -> Output: 0
 * Input: ("ABC") -> Output: 3
 * Input: ("") -> Output: 0
 * Input: ("A1 b2!") -> Output: 1
 *
 * Constraints: 0 <= text.length <= 10^5. O(n) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Percorrer cada letra e contar quantas são maiúsculas.
 * 2. Decomposição: Passo A -> acumulador `count = 0` | Passo B -> `for...of` testando cada char | Passo C -> retornar count
 * 3. Ferramentas TS: `for (const ch of text)`; Regex `/[A-Z]/.test(ch)`; `let count = 0`
 * 4. Armadilhas: `for` com índice quando `for...of` basta; esquecer string vazia (retorna 0, não erro)
 */

function countUppercase(text: string): number {
  // Traduction: Count all uppercase letters

  let count = 0;

  for (const char of text) {
    let upperChar = char.toUpperCase()
    let lowerChar = char.toLowerCase()

    if (char === upperChar && char !== lowerChar) {
      count++
    }
  }

  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q1-unit2-loops.ts
console.log("Test 1:", countUppercase("HeLLo")); // Expected: 3
console.log("Test 2:", countUppercase("abc")); // Expected: 0
console.log("Test 3:", countUppercase("ABC")); // Expected: 3
console.log("Test 4:", countUppercase("")); // Expected: 0
console.log("Test 5:", countUppercase("A1 b2!")); // Expected: 1

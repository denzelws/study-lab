/**
 * Q3 — Count Non-Vowels (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A phonetics tool must count the consonant letters in `text` (English
 * letters that are NOT a, e, i, o, u in either case). Loop char by char,
 * skip vowels and non-letters, count the rest.
 *
 * Examples:
 * Input: ("hello") -> Output: 3
 * Input: ("aei") -> Output: 0
 * Input: ("AbC") -> Output: 2
 * Input: ("") -> Output: 0
 * Input: ("h3y!") -> Output: 2
 *
 * Constraints: 0 <= text.length <= 10^5. O(n) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Contar letras que não são vogais.
 * 2. Decomposição: Passo A -> acumulador | Passo B -> `for...of`: é letra? é vogal? | Passo C -> contar só consoante
 * 3. Ferramentas TS: `for (const ch of text)`; `'aeiouAEIOU'.includes(ch)`; Regex `/[a-z]/i.test(ch)`
 * 4. Armadilhas: contar dígitos/espaços como consoante; checar só minúsculas e perder "ABC"; `continue` ajuda a pular cedo
 */

function countNonVowels(text: string): number {
  // Traduction: Return count consonant values
  let count = 0;

  for (const char of text) {
    const lowerChar = char.toLowerCase()
    const upperChar = char.toUpperCase()
    
    // A -> Check if its not letter
    if (lowerChar === upperChar) {
      continue
    }

    // B -< Check if its vowel
    if ('aeiouAEIOU'.includes(lowerChar)) {
      continue
    }

    count++
  }

  return count;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q3-unit2-loops.ts
console.log("Test 1:", countNonVowels("hello")); // Expected: 3
console.log("Test 2:", countNonVowels("aei")); // Expected: 0
console.log("Test 3:", countNonVowels("AbC")); // Expected: 2
console.log("Test 4:", countNonVowels("")); // Expected: 0
console.log("Test 5:", countNonVowels("h3y!")); // Expected: 2

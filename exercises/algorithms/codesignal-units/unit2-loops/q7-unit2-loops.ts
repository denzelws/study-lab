/**
 * Q7 — First Uppercase Index (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A parser must find the FIRST uppercase letter (A–Z) in `text` and return
 * its index. Use a standard `for` with index so you can `break` early.
 * If there is none (or text is empty), return -1. This trains
 * loop-selection: `for` with index beats `for...of` when you need to stop.
 *
 * Examples:
 * Input: ("abCd") -> Output: 2
 * Input: ("abc") -> Output: -1
 * Input: ("A") -> Output: 0
 * Input: ("") -> Output: -1
 * Input: ("ab1Z") -> Output: 3
 *
 * Constraints: 0 <= text.length <= 10^5. O(n) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Achar a posição da primeira maiúscula ou -1.
 * 2. Decomposição: Passo A -> `for` com índice | Passo B -> achou? `return i` na hora | Passo C -> terminou o loop? `return -1`
 * 3. Ferramentas TS: `for (let i = 0; i < text.length; i++)`; `/[A-Z]/.test(text[i]!)`
 * 4. Armadilhas: `for...of` sem índice (perde a posição); `<= text.length` (off-by-one); esquecer o `-1` final
 */

function firstUppercaseIndex(text: string): number {
  // Traduction: Find index FIRST capital letter or -1
  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (char === char!.toUpperCase() && char !== char!.toLowerCase()) {
      return i
    }
  }
  return -1;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q7-unit2-loops.ts
console.log("Test 1:", firstUppercaseIndex("abCd")); // Expected: 2
console.log("Test 2:", firstUppercaseIndex("abc")); // Expected: -1
console.log("Test 3:", firstUppercaseIndex("A")); // Expected: 0
console.log("Test 4:", firstUppercaseIndex("")); // Expected: -1
console.log("Test 5:", firstUppercaseIndex("ab1Z")); // Expected: 3

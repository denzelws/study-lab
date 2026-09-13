/**
 * Q2 — Join Words With Spaces (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A label printer receives an array of `words` and must build ONE string
 * with a single space between words — no leading, trailing or double
 * spaces. Build it with a loop and a string accumulator. Empty list → "".
 *
 * Examples:
 * Input: (["red", "green", "blue"]) -> Output: "red green blue"
 * Input: (["solo"]) -> Output: "solo"
 * Input: ([]) -> Output: ""
 * Input: (["a", "b"]) -> Output: "a b"
 *
 * Constraints: 0 <= words.length <= 10^4. O(total characters) time and space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Colar palavras com um espaço entre elas, sem sobrar nas pontas.
 * 2. Decomposição: Passo A -> acumulador `result = ""` | Passo B -> loop adicionando espaço SÓ antes do 2º item em diante | Passo C -> retornar result
 * 3. Ferramentas TS: `for (const w of words)`; `let result = ""`; checar `result === ""` para o primeiro item
 * 4. Armadilhas: somar `" "` sempre no fim (sobra espaço no final); usar `join` (vale, mas o drill é o loop)
 */

function joinWordsWithSpaces(words: string[]): string {
  // TODO: Implemente a lógica aqui
  return "";
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q2-unit2-loops.ts
console.log("Test 1:", joinWordsWithSpaces(["red", "green", "blue"])); // Expected: "red green blue"
console.log("Test 2:", joinWordsWithSpaces(["solo"])); // Expected: "solo"
console.log("Test 3:", joinWordsWithSpaces([])); // Expected: ""
console.log("Test 4:", joinWordsWithSpaces(["a", "b"])); // Expected: "a b"

/**
 * Chunk Drill A — Split Tape (~5 min)
 * Mode: easy | Topic: arrays-and-strings | Prerequisite for Q2
 *
 * ONLY step A of the Chunk Mirror pattern.
 *
 * Given a lowercase string `tape` and a positive `chunkSize`, return a NEW
 * array of consecutive chunks. Each chunk has length `chunkSize`, except
 * the last one which may be shorter. Do NOT mutate `tape`.
 *
 * Examples:
 *   "abcdef", 2  → ["ab", "cd", "ef"]
 *   "hello",  3  → ["hel", "lo"]
 *   "a",      5  → ["a"]
 *   "",       3  → []
 *   "abcd",   4  → ["abcd"]
 *
 * Constraints:
 *   - 0 <= tape.length <= 10^5
 *   - 1 <= chunkSize <= 10^5
 *   - Expected time: O(tape.length) | space: O(tape.length)
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Cortar a string em pedaços de tamanho fixo e devolver o array.
 * 2. Decomposição: loop com i += chunkSize → slice(i, i + chunkSize) → push
 * 3. Ferramentas TS: for (let i = 0; ...; i += chunkSize), slice, push em array novo
 * 4. Armadilhas: slice(chunkSize) com 1 arg (errado); i++ (pedaços sobrepostos)
 */

function splitTapeIntoChunks(tape: string, chunkSize: number): string[] {
  // TODO: só o passo A
  const chunks: string[] = []

  for (let i = 0; i < tape.length; i += chunkSize) {
    const current = tape.slice(i, i + chunkSize)
    chunks.push(current)
  }

  return chunks;
}

// --- Manual Test Logs ---
// npx tsx exercises/algorithms/arrays-and-strings/chunk-drill-a-split.ts

console.log(splitTapeIntoChunks("abcdef", 2)); // Expected: ["ab", "cd", "ef"]

console.log(splitTapeIntoChunks("hello", 3)); // Expected: ["hel", "lo"]

console.log(splitTapeIntoChunks("a", 5)); // Expected: ["a"]

console.log(splitTapeIntoChunks("", 3)); // Expected: []

console.log(splitTapeIntoChunks("abcd", 4)); // Expected: ["abcd"]

/**
 * Chunk Drill B — Mirror Each Chunk (~5 min)
 * Mode: easy | Topic: arrays-and-strings | Prerequisite for Q2
 *
 * ONLY step B of the Chunk Mirror pattern.
 *
 * You already have an array of string chunks. Return a NEW array where each
 * chunk has its characters reversed. Order of chunks stays the same — only
 * the inside of each chunk flips. Do NOT mutate the input array or its strings.
 *
 * Examples:
 *   ["ab", "cd", "ef"]  → ["ba", "dc", "fe"]
 *   ["hel", "lo"]       → ["leh", "ol"]
 *   ["a"]               → ["a"]
 *   []                  → []
 *   ["xy"]              → ["yx"]
 *
 * Constraints:
 *   - 0 <= chunks.length <= 10^4
 *   - Each chunk is a non-empty lowercase string
 *   - Expected time: O(total characters) | space: O(total characters)
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Inverter os caracteres dentro de cada pedaço, sem mudar a ordem dos pedaços.
 * 2. Decomposição: para cada chunk → split → reverse → join
 * 3. Ferramentas TS: chunks.map((chunk) => chunk.split("").reverse().join(""))
 * 4. Armadilhas: inverter o array inteiro de chunks (ordem errada); mutar chunk in-place
 */

function mirrorEachChunk(chunks: string[]): string[] {
  //Traduction: invert chunk of strings and return
  return chunks.map((chunk) => chunk.split("").reverse().join(""))
}

// --- Manual Test Logs ---
// npx tsx exercises/algorithms/arrays-and-strings/chunk-drill-b-reverse.ts

console.log(mirrorEachChunk(["ab", "cd", "ef"])); // Expected: ["ba", "dc", "fe"]

console.log(mirrorEachChunk(["hel", "lo"])); // Expected: ["leh", "ol"]

console.log(mirrorEachChunk(["a"])); // Expected: ["a"]

console.log(mirrorEachChunk([])); // Expected: []

console.log(mirrorEachChunk(["xy"])); // Expected: ["yx"]

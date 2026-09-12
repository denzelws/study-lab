/**
 * Chunk Drill C — Stitch Chunks (~3 min)
 * Mode: easy | Topic: arrays-and-strings | Prerequisite for Q2
 *
 * ONLY step C of the Chunk Mirror pattern.
 *
 * Given an array of string chunks, return ONE string by concatenating them
 * in order with no separator. Do NOT mutate the input array.
 *
 * Examples:
 *   ["ba", "dc", "fe"]  → "badcfe"
 *   ["leh", "ol"]       → "lehol"
 *   ["a"]               → "a"
 *   []                  → ""
 *   ["x", "y", "z"]     → "xyz"
 *
 * Constraints:
 *   - 0 <= chunks.length <= 10^4
 *   - Expected time: O(total characters) | space: O(total characters)
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Colar todos os pedaços numa única string.
 * 2. Decomposição: uma linha — join
 * 3. Ferramentas TS: chunks.join("")
 * 4. Armadilhas: spread sozinho não junta strings; join(",") adiciona vírgulas
 */

function stitchChunks(chunks: string[]): string {
  return chunks.join("")
}

// --- Manual Test Logs ---
// npx tsx exercises/algorithms/arrays-and-strings/chunk-drill-c-join.ts

console.log(stitchChunks(["ba", "dc", "fe"])); // Expected: "badcfe"

console.log(stitchChunks(["leh", "ol"])); // Expected: "lehol"

console.log(stitchChunks(["a"])); // Expected: "a"

console.log(stitchChunks([])); // Expected: ""

console.log(stitchChunks(["x", "y", "z"])); // Expected: "xyz"

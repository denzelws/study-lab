/**
 * Chunk Drill FULL — Mirror Tape (A + B + C) (~8 min)
 * Mode: easy → medium | Topic: arrays-and-strings | Capstone after A, B, C drills
 *
 * Same logic as Q2, slightly simpler framing. Compose the three steps you
 * practiced separately:
 *
 *   A — splitTapeIntoChunks logic (loop + slice)
 *   B — mirrorEachChunk logic (map + split/reverse/join)
 *   C — stitchChunks logic (join)
 *
 * Do NOT mutate `tape`.
 *
 * Examples:
 *   "abcdef", 2  → "badcfe"
 *   "hello",  3  → "lehol"
 *   "cat",    2  → "act"
 *   "",       2  → ""
 *   "z",      10 → "z"
 *
 * Constraints:
 *   - 0 <= tape.length <= 10^5
 *   - 1 <= chunkSize <= 10^5
 *   - Expected time: O(tape.length) | space: O(tape.length)
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: A depois B depois C — você já fez cada peça isolada.
 * 2. Decomposição: chunks = A | mirrored = B(chunks) | return C(mirrored)
 * 3. Ferramentas TS: reutilize o mesmo código dos 3 drills (pode copiar as 3 funções ou inline)
 * 4. Armadilhas: pular um passo; inverter a string inteira; esquecer return
 *
 * Suggested order: solve chunk-drill-a → b → c → then this file without re-reading Q2.
 */

function mirrorTape(tape: string, chunkSize: number): string {
  // TODO: A → B → C (compor os 3 drills)
  // Tradcution: Split the char in chunks, reverse and them join

  // A -> split in chunks
  let chunks = []
  for (let i = 0; i < tape.length; i += chunkSize) {
    chunks.push(tape.slice(i, i + chunkSize))
  }

  // B -> .map + split + join
  const result = chunks.map((chunk) => chunk.split("").reverse().join(""))

  // C -> join all
  return result.join("")
}

// --- Manual Test Logs ---
// npx tsx exercises/algorithms/arrays-and-strings/chunk-drill-full.ts

console.log(mirrorTape("abcdef", 2)); // Expected: "badcfe"

console.log(mirrorTape("hello", 3)); // Expected: "lehol"

console.log(mirrorTape("cat", 2)); // Expected: "act"

console.log(mirrorTape("", 2)); // Expected: ""

console.log(mirrorTape("z", 10)); // Expected: "z"

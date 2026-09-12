/**
 * Q2 — Chunk Mirror Tape (~10 min)
 * Mode: medium | Topic: arrays-and-strings | Language: TypeScript
 *
 * A backup tape stores lowercase letters as a single string. To verify
 * integrity, each consecutive chunk of `chunkSize` characters must be
 * mirrored (reversed) independently, then stitched back together.
 *
 * Rules:
 *   - Split `tape` into consecutive chunks of length `chunkSize`.
 *     The last chunk may be shorter if `tape.length` is not divisible.
 *   - Reverse the characters inside each chunk.
 *   - Join all chunks back into one string.
 *   - Do NOT mutate `tape` (build new strings/arrays only).
 *
 * Examples:
 *   tape = "abcdef", chunkSize = 2  → "badcfe"
 *   tape = "hello",  chunkSize = 3  → "lehol"
 *   tape = "a",      chunkSize = 5  → "a"
 *   tape = "",       chunkSize = 3  → ""
 *   tape = "abcd",   chunkSize = 4  → "dcba"
 *
 * Constraints:
 *   - 0 <= tape.length <= 10^5
 *   - 1 <= chunkSize <= 10^5
 *   - tape contains only lowercase English letters a-z
 *   - Expected time:  O(tape.length)
 *   - Expected space: O(tape.length) for the result
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Cortar a string em pedaços de tamanho fixo, inverter cada pedaço, juntar de novo.
 * 2. Decomposição: A — fatiar em chunks | B — inverter cada chunk | C — join
 * 3. Ferramentas TS: slice/substring para chunks; split("") + reverse() + join("") por chunk; ou loop com índices
 * 4. Armadilhas: inverter a string inteira (errado); chunkSize > length (um chunk só); string vazia; mutar tape com métodos in-place
 */

function mirrorTapeChunks(tape: string, chunkSize: number): string {
  // Traduction: Splice each chunk of string in a fixed size, invert and join

  // A -> slice chunks
  const chunks: string[] = []

  for (let i = 0; i < tape.length; i += chunkSize) {
    const chunk = tape.slice(i, i + chunkSize)
    chunks.push(chunk)
  }

  // B -> invert chunk
  const mirrored = chunks.map((chunk) => chunk.split("").reverse().join(""))

  // C -> Add elements for the array in a string
  return mirrored.join("")
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/arrays-and-strings/q2-arrays-and-strings.ts

console.log(mirrorTapeChunks("abcdef", 2)); // Expected: "badcfe"

console.log(mirrorTapeChunks("hello", 3)); // Expected: "lehol"

console.log(mirrorTapeChunks("a", 5)); // Expected: "a"

console.log(mirrorTapeChunks("", 3)); // Expected: ""

console.log(mirrorTapeChunks("abcd", 4)); // Expected: "dcba"

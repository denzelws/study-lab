/**
 * Q4 — Swap The Ends (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A playlist glitch put the first and last tracks in each other's place.
 * Return a NEW array with the first and last items swapped, middle kept in
 * order. If the list has fewer than 2 items, return an unchanged copy.
 * Do NOT mutate `tracks`.
 *
 * Examples:
 * Input: (["intro", "mid", "outro"]) -> Output: ["outro", "mid", "intro"]
 * Input: (["a", "b"]) -> Output: ["b", "a"]
 * Input: (["solo"]) -> Output: ["solo"]
 * Input: ([]) -> Output: []
 *
 * Constraints: 0 <= tracks.length <= 10^4; O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Cópia nova com primeiro e último trocados de lugar.
 * 2. Decomposição: Passo A -> copiar | Passo B -> guardar pontas em variáveis | Passo C -> escrever cruzado na cópia
 * 3. Ferramentas TS: Spread `[...]`; índices `0` e `arr.length - 1`
 * 4. Armadilhas: mutar o input; `arr[arr.length]` (undefined) em vez de `arr[arr.length - 1]`; esquecer lista com 0/1 item
 */

function swapEnds(tracks: string[]): string[] {
  // Traduction: Copy array, persist sides in variables and verify length
  const newTracks = [...tracks]

  if (newTracks.length < 2) {
    return newTracks
  }

  const end = newTracks[newTracks.length - 1]!
  const start = newTracks[0]!

  newTracks[0] = end
  newTracks[newTracks.length - 1] = start

  return newTracks;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q4-unit1-arrays-strings.ts
console.log("Test 1:", swapEnds(["intro", "mid", "outro"])); // Expected: ["outro", "mid", "intro"]
console.log("Test 2:", swapEnds(["a", "b"])); // Expected: ["b", "a"]
console.log("Test 3:", swapEnds(["solo"])); // Expected: ["solo"]
console.log("Test 4:", swapEnds([])); // Expected: []

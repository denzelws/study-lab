/**
 * Q7 — Wrap With Markers (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * A formatter must wrap `core` with a `left` marker at the start and a
 * `right` marker at the end, touching BOTH string boundaries at once.
 * Return the wrapped NEW string. If `core` is empty, just join the markers.
 *
 * Examples:
 * Input: ("core", "<", ">") -> Output: "<core>"
 * Input: ("", "[", "]") -> Output: "[]"
 * Input: ("x", "(", ")") -> Output: "(x)"
 * Input: ("hi", "--", "--") -> Output: "--hi--"
 *
 * Constraints: 0 <= core.length <= 10^4; markers are non-empty strings.
 * O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Colar um marcador em cada ponta da string.
 * 2. Decomposição: Passo A -> tratar core vazio (marcadores se tocam) | Passo B -> left + core + right
 * 3. Ferramentas TS: Interpolação `` `${left}${core}${right}` `` (ou `+`)
 * 4. Armadilhas: tentar `core[0] = left` / anexar por índice (string imutável); inverter a ordem dos marcadores
 */

function wrapWithMarkers(core: string, left: string, right: string): string {
  // Traduction: Return a new string if left right positionate at sides
  if (core.length === 0) {
    return `${left}${right}`
  }

  return `${left}${core}${right}`;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q7-unit1-arrays-strings.ts
console.log("Test 1:", wrapWithMarkers("core", "<", ">")); // Expected: "<core>"
console.log("Test 2:", wrapWithMarkers("", "[", "]")); // Expected: "[]"
console.log("Test 3:", wrapWithMarkers("x", "(", ")")); // Expected: "(x)"
console.log("Test 4:", wrapWithMarkers("hi", "--", "--")); // Expected: "--hi--"

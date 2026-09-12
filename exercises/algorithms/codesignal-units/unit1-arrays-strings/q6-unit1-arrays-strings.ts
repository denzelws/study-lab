/**
 * Q6 — Patch Last Character (~10 min)
 * Mode: medium | Topic: unit1-arrays-strings | Language: TypeScript
 *
 * Serial numbers must end with a check digit. Given `serial` and `digit`,
 * return a NEW string with the last character replaced by `digit`. If
 * `serial` is empty, return it unchanged. Build a new string — never
 * assign by index.
 *
 * Examples:
 * Input: ("AB12x", "9") -> Output: "AB129"
 * Input: ("q", "7") -> Output: "7"
 * Input: ("", "7") -> Output: ""
 * Input: ("data!", "?") -> Output: "data?"
 *
 * Constraints: 0 <= serial.length <= 10^4; `digit` is a single character.
 * O(n) time, O(n) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Nova string igual, só com a última letra trocada.
 * 2. Decomposição: Passo A -> tratar string vazia | Passo B -> tudo menos o último + dígito
 * 3. Ferramentas TS: `slice(0, -1)` ou `substring(0, serial.length - 1)`; interpolação
 * 4. Armadilhas: `serial[serial.length]` é undefined/out-of-bounds — o último é `length - 1`; `slice(0)` manteria o último duplicado
 */

function patchLastChar(serial: string, digit: string): string {
  // Traduction: new string, replace last char by digit and check empty
  // B -> Check empty
  if (serial.length === 0) {
    return serial
  }
  
  // A -> New string
  const newSerial = serial.slice(0, -1)


  // C -> Interpolate and return
  return newSerial + digit
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit1-arrays-strings/q6-unit1-arrays-strings.ts
console.log("Test 1:", patchLastChar("AB12x", "9")); // Expected: "AB129"
console.log("Test 2:", patchLastChar("q", "7")); // Expected: "7"
console.log("Test 3:", patchLastChar("", "7")); // Expected: ""
console.log("Test 4:", patchLastChar("data!", "?")); // Expected: "data?"

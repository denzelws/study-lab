/**
 * Q10 — Slice Packet Payload (~10 min)
 * Mode: easy | Topic: sprint-final / bloco-1 | Language: TypeScript
 *
 * A packet string must drop its first `prefix` header chars and its last
 * `suffix` checksum chars. Return a NEW string with the remaining payload.
 *
 * Clamp `prefix` and `suffix`: values below 0 become 0 (floor). There is no
 * extra ceiling on each side — if the clamped drops cover the whole string
 * (or more), return "". Never mutate `packet` (strings are immutable anyway).
 *
 * Examples:
 * Input: ("HELLO", 1, 1) -> Output: "ELL"
 * Input: ("AB", 1, 1) -> Output: ""
 * Input: ("XYZ", 0, 0) -> Output: "XYZ"
 *
 * Constraints: 0 <= packet.length <= 10^4; prefix, suffix >= -10^4.
 * O(n) time, O(n) space. No while.
 */

function slicePacketPayload(packet: string, prefix: number, suffix: number): string {
  const heads = Math.max(prefix, 0)
  const tails = Math.max(suffix, 0)

  if (heads + tails >= packet.length) return ""
  return packet.slice(heads, packet.length - tails);
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/sprint-final/q10-sprint-final.ts
console.log("Test 1:", slicePacketPayload("HELLO", 1, 1)); // Expected: "ELL"
console.log("Test 2:", slicePacketPayload("AB", 1, 1)); // Expected: ""
console.log("Test 3:", slicePacketPayload("XYZ", 0, 0)); // Expected: "XYZ"

// Hidden — floor negatives, cover-all, empty string, use clamped vars not raw params
console.log("Test 4 (hidden):", slicePacketPayload("ok", -2, -2)); // Expected: "ok"
console.log("Test 5 (hidden):", slicePacketPayload("CODE", -1, 2)); // Expected: "CO"
console.log("Test 6 (hidden):", slicePacketPayload("hi", 9, 0)); // Expected: ""
console.log("Test 7 (hidden):", slicePacketPayload("", 1, 1)); // Expected: ""
console.log("Test 8 (hidden):", slicePacketPayload("Z", 0, -5)); // Expected: "Z"

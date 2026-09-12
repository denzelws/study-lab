/**
 * Lab — O que split(""), reverse() e join("") fazem dentro do .map
 *
 * Rode: npx tsx exercises/practice/map-split-reverse-join-lab.ts
 *
 * Objetivo: ver passo a passo, com for, o que cada método faz em UM chunk.
 * Depois compare com o .map que aplica os 3 de uma vez.
 */

const chunks = ["ab", "cd", "ef"]

console.log("=== FOR: cada chunk, cada passo ===\n")

for (const chunk of chunks) {
  console.log(`--- chunk original: "${chunk}" ---`)

  const letters = chunk.split("")
  console.log(`  1. split("")  → array de letras:`, letters)
  // split: string → array. "" separa caractere por caractere.
  // "ab" → ["a", "b"]

  const reversed = letters.reverse()
  console.log(`  2. reverse()  → inverte o array:`, reversed)
  // reverse: inverte o array IN-PLACE e devolve o mesmo array.
  // ["a", "b"] → ["b", "a"]
  // ⚠️ letters e reversed são o MESMO array (mutação)

  const mirrored = reversed.join("")
  console.log(`  3. join("")   → cola letras numa string:`, `"${mirrored}"`)
  // join: array → string. "" = sem separador entre letras.
  // ["b", "a"] → "ba"

  console.log(`  resultado final deste chunk: "${mirrored}"\n`)
}

console.log("=== MAP: mesmo efeito, forma curta ===\n")

const mirroredChunks = chunks.map((chunk) => {
  const step1 = chunk.split("")
  const step2 = step1.reverse()
  const step3 = step2.join("")
  console.log(`"${chunk}" → split →`, step1, `→ reverse →`, step2, `→ join → "${step3}"`)
  return step3
})

console.log("\narray final:", mirroredChunks)
console.log('string final (join dos chunks):', mirroredChunks.join(""))

console.log("\n=== Uma linha (como no drill B) ===")
console.log(chunks.map((chunk) => chunk.split("").reverse().join("")))

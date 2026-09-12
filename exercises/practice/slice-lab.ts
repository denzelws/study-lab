/**
 * Lab — O que slice(1, -1) faz, passo a passo
 *
 * Rode: npx tsx exercises/practice/slice-lab.ts
 *
 * Objetivo: ver como início inclusivo + fim exclusivo (negativo = conta do fim)
 * produzem o "miolo" do array sem mutar o original.
 */

const batches: number[][] = [
  [10, 20, 30, 40],
  [5, 6, 7],
  [1, 2],
  [7],
  [],
]

console.log("=== slice(1, -1): do segundo até antes do último ===\n")

for (const batch of batches) {
  console.log(`--- original: [${batch}] (length ${batch.length}) ---`)

  const start = 1
  const endNegative = -1
  const endResolved = batch.length + endNegative
  console.log(
    `  slice(${start}, ${endNegative}) → início inclusivo ${start}, fim exclusivo resolve para ${endResolved}`
  )

  const middle = batch.slice(start, endNegative)
  console.log(`  resultado: [${middle}]`)
  console.log(`  original intacto: [${batch}]\n`)
}

console.log("=== Uma linha (como no Q2) ===")
console.log([10, 20, 30, 40].slice(1, -1)) // [20, 30]

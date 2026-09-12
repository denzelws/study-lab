/**
 * Lab — Clamp + before/after + spread (padrão do Q9)
 *
 * Rode: npx tsx exercises/practice/clamp-insert-lab.ts
 *
 * Objetivo: ver, caso a caso, como o índice vira `pos`,
 * como o array se parte em before/after e como o return remonta.
 */

type Case = { line: string[]; index: number; name: string }

const cases: Case[] = [
  { line: ["a", "c", "d"], index: 1, name: "b" }, // meio
  { line: ["a"], index: 0, name: "z" }, // início exato
  { line: ["a"], index: 9, name: "z" }, // estouro -> append
  { line: ["a", "b"], index: -3, name: "z" }, // negativo -> início
  { line: [], index: 0, name: "z" }, // vazio
]

console.log("=== 1. PISO + TETO (clamp) ===\n")

for (const c of cases) {
  console.log(`--- line=[${c.line}] index=${c.index} name="${c.name}" ---`)

  // Passo A1: piso — nada abaixo de 0
  const floored = Math.max(c.index, 0)
  console.log(`  piso:  Math.max(${c.index}, 0) = ${floored}`)

  // Passo A2: teto — nada acima de length
  const pos = Math.min(floored, c.line.length)
  console.log(`  teto:  Math.min(${floored}, ${c.line.length}) = ${pos}  ← pos final`)

  // Passo B: partir em before / after
  const before = c.line.slice(0, pos)
  const after = c.line.slice(pos)
  console.log(`  before = slice(0, ${pos}) → [${before}]`)
  console.log(`  after  = slice(${pos}) → [${after}]`)

  // Passo C: remontar
  const result = [...before, c.name, ...after]
  console.log(`  return [...before, "${c.name}", ...after] → [${result}]\n`)
}

console.log("=== 2. Quando usar esse padrão ===")
console.log("Use clamp quando um número precisa caber num intervalo fechado:")
console.log("  - posição de inserção em [0, length] (este lab)")
console.log("  - página em [1, totalPages], volume em [0, 100], slider, offset")
console.log("Fórmula: Math.min(Math.max(valor, MIN), MAX)")
console.log("  - Math.max impõe o PISO (não passa de MIN para baixo)")
console.log("  - Math.min impõe o TETO (não passa de MAX para cima)")

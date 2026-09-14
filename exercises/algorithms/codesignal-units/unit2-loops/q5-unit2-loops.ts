/**
 * Q5 — Fuel Cycles (~10 min)
 * Mode: medium | Topic: unit2-loops | Language: TypeScript
 *
 * A generator starts with `fuel` liters. Each full cycle burns `burn`
 * liters. Count how many FULL cycles run before fuel drops below `burn`
 * using a `while` loop that tracks the changing fuel state. If `burn <= 0`,
 * no cycle can be measured — return 0 (also prevents an infinite loop).
 *
 * Examples:
 * Input: (10, 3) -> Output: 3
 * Input: (9, 3) -> Output: 3
 * Input: (2, 5) -> Output: 0
 * Input: (0, 3) -> Output: 0
 * Input: (10, 0) -> Output: 0
 *
 * Constraints: 0 <= fuel <= 10^9; burn can be <= 0 (guard it). O(cycles) time, O(1) space.
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Quantas vezes dá para subtrair `burn` de `fuel` até faltar.
 * 2. Decomposição: Passo A -> guardar `burn <= 0` → 0 | Passo B -> `while (fuel >= burn)` subtraindo e contando | Passo C -> retornar ciclos
 * 3. Ferramentas TS: `while (condição)`; `fuel -= burn`; `let cycles = 0`
 * 4. Armadilhas: esquecer de decrementar dentro do `while` (loop infinito); condição `>` em vez de `>=` (perde o ciclo exato de (9, 3)); `burn = 0` sem guarda trava tudo
 */

function countFuelCycles(fuel: number, burn: number): number {
  // Traduction: Return n value of how many can run before fuel drops
  // A -> Storage value
  if (burn <= 0) return 0

  let cycles = 0

  // B -> While subtract
  while (fuel >= burn ) {
    fuel -= burn
    cycles++
  }

  return cycles;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/codesignal-units/unit2-loops/q5-unit2-loops.ts
console.log("Test 1:", countFuelCycles(10, 3)); // Expected: 3
console.log("Test 2:", countFuelCycles(9, 3)); // Expected: 3
console.log("Test 3:", countFuelCycles(2, 5)); // Expected: 0
console.log("Test 4:", countFuelCycles(0, 3)); // Expected: 0
console.log("Test 5:", countFuelCycles(10, 0)); // Expected: 0

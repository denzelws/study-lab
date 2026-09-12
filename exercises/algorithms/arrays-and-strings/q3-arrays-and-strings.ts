/**
 * Q3 — Unique Tag Cap (~12 min)
 * Mode: medium | Topic: arrays-and-strings | Language: TypeScript
 *
 * A CI pipeline collects flaky test tags. Return a *new* tag list after
 * these rules, in this exact order:
 *
 *   1. NORMALIZE — Convert every tag to lowercase (new values, not in-place).
 *   2. DEDUPE — Keep only the first occurrence of each tag while scanning
 *      left → right. Later duplicates are dropped (case-insensitive after step 1).
 *   3. CAP — If more than `maxTags` tags remain, keep only the FIRST
 *      `maxTags` (earliest seen). If `maxTags` or fewer remain, return all.
 *
 * Do NOT mutate `tags`.
 *
 * Examples:
 *   tags = ["API", "web", "api", "Web", "mobile"], maxTags = 3
 *   → ["api", "web", "mobile"]
 *
 *   tags = ["A", "B", "C", "D"], maxTags = 2
 *   → ["a", "b"]
 *
 *   tags = ["dup", "dup", "dup"], maxTags = 5
 *   → ["dup"]
 *
 *   tags = [], maxTags = 3
 *   → []
 *
 *   tags = ["Zeta"], maxTags = 10
 *   → ["zeta"]
 *
 * Constraints:
 *   - 0 <= tags.length <= 10^4
 *   - 1 <= maxTags <= 10^4
 *   - Each tag is a non-empty string of letters and digits
 *   - Expected time:  O(n)
 *   - Expected space: O(n) for the result
 *
 * 💡 How to Decode This Problem:
 * 1. Tradução Limpa: Lista nova em minúsculas, sem repetir (primeira ocorrência), cortada nos primeiros maxTags.
 * 2. Decomposição: A — map toLowerCase | B — scan com Set de vistos | C — slice(0, maxTags) se passar do limite
 * 3. Ferramentas TS: map; Set para lookup O(1) de já vistos; slice(0, maxTags) — NÃO slice(-n), cap é no início
 * 4. Armadilhas: Set no passo B para remover tudo (errado — só pula repetidos na ordem); cap dos últimos em vez dos primeiros; mutar tags com sort/toLowerCase in-place
 */

function capUniqueTags(tags: string[], maxTags: number): string[] {
  // Traduction: New list with lowecase, without repeating respecting maxTags
  // A -> Convert every tag to lowercase
  const newTags: string[] = []

  for ( let char of tags) {
    const lowerChar = char.toLowerCase()
    newTags.push(lowerChar)
  }

  // B -> Scan left-right and only maintain 
  const hasSeen = new Set<string>()
  const result: string[] = []

  for (let tag of newTags) {
    if (!hasSeen.has(tag)) {
      hasSeen.add(tag)
      result.push(tag)
    }
  }
  
  // C -> if more than maxTags remain + keep the first
  if (result.length > maxTags) {
    return result.slice(0, maxTags)
  }

  return result
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/arrays-and-strings/q3-arrays-and-strings.ts

console.log(capUniqueTags(["API", "web", "api", "Web", "mobile"], 3)); // Expected: ["api", "web", "mobile"]

console.log(capUniqueTags(["A", "B", "C", "D"], 2)); // Expected: ["a", "b"]

console.log(capUniqueTags(["dup", "dup", "dup"], 5)); // Expected: ["dup"]

console.log(capUniqueTags([], 3)); // Expected: []

console.log(capUniqueTags(["Zeta"], 10)); // Expected: ["zeta"]

/**
 * Q8 — Shift Queries (~20 min) | Janela 18:00–19:20
 * Mode: GCA Q3 equivalent | Topic: gca-replay | Language: TypeScript
 *
 * Process `queries` in order. Maintain two arrays `a` and `b`.
 *
 * Query formats:
 *   [0, t]     — rotate `a` to the RIGHT by t positions (cyclic)
 *   [1, t]     — rotate `b` to the RIGHT by t positions (cyclic)
 *   [2, i, j]  — push a[i] + b[j] into the answer list
 *
 * Always use t = t % n for the array being rotated (n = that array's length).
 * If n === 0, skip the rotate (do nothing).
 * Return only the answers from type-2 queries, in the order they ran.
 *
 * Rotate right example: [1, 2, 3] with t=1 -> [3, 1, 2]
 *
 * Examples:
 * Input: ([1, 2, 3], [10, 20, 30], [[2, 0, 0], [0, 1], [2, 0, 0]])
 *   -> Output: [11, 13]
 *   (1+10=11; a becomes [3,1,2]; 3+10=13)
 * Input: ([1, 2], [3, 4], [[0, 5], [2, 0, 0]])
 *   -> Output: [5]
 *   (t=5, n=2, t%n=1; a becomes [2,1]; 2+3=5)
 * Input: ([7], [8], [[2, 0, 0]])
 *   -> Output: [15]
 * Input: ([1, 2, 3], [4, 5, 6], [[1, 1], [2, 0, 0]])
 *   -> Output: [7]
 *   (b becomes [6,4,5]; 1+6=7)
 * Input: ([], [9], [[0, 3], [2, 0, 0]])
 *   -> Output: []  (rotate on empty a skipped; a[0] does not exist — skip invalid type-2)
 *
 * Constraints: 0 <= n, m, queries.length <= 10^4. Prefer O(n) per rotate or offset % n.
 */

function solution(a: number[], b: number[], queries: number[][]): number[] {
  const ans: number[] = []

  for (const q of queries) {
    const type = q[0]
    
    if (type === 2) {
      const i = q[1]
      const j = q[2]

      if (a[i!] === undefined || b[j!] === undefined) continue
      ans.push(a[i!]! + b[j!]!)
    }

    if (type === 0) {
      const t = q[1]
      if (a.length === 0) continue
      const k = t! % a.length

      if (k === 0) continue

      a = [...a.slice(-k), ...a.slice(0, a.length - k)]
    }
  }

  return ans;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q8-shift-queries.ts
console.log(
  "Test 1:",
  solution([1, 2, 3], [10, 20, 30], [[2, 0, 0], [0, 1], [2, 0, 0]]),
); // Expected: [11, 13]
console.log(
  "Test 2:",
  solution([1, 2], [3, 4], [[0, 5], [2, 0, 0]]),
); // Expected: [5]
console.log("Test 3:", solution([7], [8], [[2, 0, 0]])); // Expected: [15]
console.log(
  "Test 4:",
  solution([1, 2, 3], [4, 5, 6], [[1, 1], [2, 0, 0]]),
); // Expected: [7]
console.log("Test 5:", solution([], [9], [[0, 3], [2, 0, 0]])); // Expected: []

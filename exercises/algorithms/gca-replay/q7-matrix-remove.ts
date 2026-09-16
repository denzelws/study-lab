/**
 * Q7 — Matrix Remove + Pad 0 (~15 min) | Janela 18:00–19:20
 * Mode: GCA Q2 equivalent | Topic: gca-replay | Language: TypeScript
 *
 * For each row independently: remove every cell equal to `value`,
 * shift the remaining cells to the left, then pad with 0 until the
 * row length equals the original column count.
 *
 * Do not change the number of rows. Process rows in order.
 *
 * Examples:
 * Input: ([[1, 2, 3], [4, 2, 5]], 2) -> Output: [[1, 3, 0], [4, 5, 0]]
 * Input: ([[2, 2], [2, 2]], 2) -> Output: [[0, 0], [0, 0]]
 * Input: ([[1, 3], [4, 5]], 2) -> Output: [[1, 3], [4, 5]]
 * Input: ([[7]], 7) -> Output: [[0]]
 * Input: ([[1, 2, 2, 3]], 2) -> Output: [[1, 3, 0, 0]]
 *
 * Constraints: 0 <= rows, cols <= 500. O(rows * cols) time.
 */

function removeValuePad(matrix: number[][], value: number): number[][] {
  /* matrix = [
    [1,2,3], linha 0 ( 3 colunas )
    [4,2,5]  linha 1
  ]
          col 0 col1 col3
  linha 0 : 1 2 3
  linha 1: 4 2 5

  matrix[0][1] -> linha 0 e coluna 1
  //
    row -> linha inteira
    row [o] -> so uma celula 1
  */ 
  const result: number[][] = []

  for (const row of matrix) {
    const next: number[] = []
    const cols = row.length

    for (const cell of row) {
      if (cell !== value) next.push(cell)
    }

    while (next.length < cols) {
      next.push(0)
    }
    
    result.push(next)
  }

  return result;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/q7-matrix-remove.ts
console.log("Test 1:", JSON.stringify(removeValuePad([[1, 2, 3], [4, 2, 5]], 2))); // Expected: [[1,3,0],[4,5,0]]
console.log("Test 2:", JSON.stringify(removeValuePad([[2, 2], [2, 2]], 2))); // Expected: [[0,0],[0,0]]
console.log("Test 3:", JSON.stringify(removeValuePad([[1, 3], [4, 5]], 2))); // Expected: [[1,3],[4,5]]
console.log("Test 4:", JSON.stringify(removeValuePad([[7]], 7))); // Expected: [[0]]
console.log("Test 5:", JSON.stringify(removeValuePad([[1, 2, 2, 3]], 2))); // Expected: [[1,3,0,0]]

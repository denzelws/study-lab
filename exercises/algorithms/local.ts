/**
 * Matrix Practice — Column Zigzag (trace by hand first!)
 *
 * Same rules as matrix-column-traverse.ts:
 *   - Start bottom-right, direction "up"
 *   - UP column → hit top → go left → DOWN column
 *   - Hit bottom → go left → UP column → repeat
 *
 * Predict the outputs BEFORE running:
 *   npm run local
 */

function columnTraverse(matrix: number[][]): number[] {
  // TODO: implement (copy your working logic from matrix-column-traverse.ts
  //       or rewrite from scratch to test your understanding)
  const rows = matrix.length
  const cols = matrix[0].length
  let direction: 'up' | 'down' = 'up'

  let row = rows - 1
  let col = cols - 1

  const output: number[] = []

  for (let i = 0; i < rows * cols; i++) {
    output[i] = matrix[row][col]

    if (direction === 'up') {
      if (row - 1 < 0) {
        direction = "down"
        col -= 1;
      } else {
        row -= 1;
      }
    } else {
      if (row + 1 === rows) {
        direction = "up"
        col -= 1;
      } else {
        row += 1;
      }
    }
  }

  return output;
}

// --- Test case 1: 3x3 ---
const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(columnTraverse(matrix3x3));
// Expected: [9, 6, 3, 2, 5, 8, 7, 4, 1]

// --- Test case 2: 1x3 (single row — tricky edge case) ---
const matrix1x3 = [[10, 20, 30]];
console.log(columnTraverse(matrix1x3));
// Expected: [30, 20, 10]

// --- Test case 3: 2x2 (quick sanity check) ---
const matrix2x2 = [
  [1, 2],
  [3, 4],
];
console.log(columnTraverse(matrix2x2));
// Expected: [4, 2, 1, 3]

export { columnTraverse };

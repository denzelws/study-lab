/**
 * Matrix Drill — Reverse Traverse (decreasing loops)
 *
 * Traverse a matrix starting at BOTTOM-RIGHT, reading each row
 * right-to-left, moving up row by row.
 *
 * Pattern:
 *   for row from bottom → top
 *     for col from right → left
 *       output.push(matrix[row][col])
 *
 * Example 3x4:
 *   [1,  2,  3,  4 ]
 *   [5,  6,  7,  8 ]
 *   [9,  10, 11, 12]
 *
 * Expected: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 *
 * Hint: use output.push(matrix[row][col]) — no index counter needed.
 */

function reverseTraverse(matrix: number[][]): number[] {
  const rows = matrix.length
  const cols = matrix[0].length
  
  let output: number[] = []

  for (let row = rows - 1; row >= 0; --row) {
    for (let col = cols - 1; col >= 0; --col) {
      output.push(matrix[row][col])
    }
  }

  return output
}

// --- Test cases (run with: npm run matrix-reverse) ---

const matrix3x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(reverseTraverse(matrix3x4));
// Expected: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const matrix2x2 = [
  [1, 2],
  [3, 4],
];
console.log(reverseTraverse(matrix2x2));
// Expected: [4, 3, 2, 1]

const matrix1x3 = [[10, 20, 30]];
console.log(reverseTraverse(matrix1x3));
// Expected: [30, 20, 10]

const matrix3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(reverseTraverse(matrix3x3));
// Expected: [9, 8, 7, 6, 5, 4, 3, 2, 1]

export { reverseTraverse };

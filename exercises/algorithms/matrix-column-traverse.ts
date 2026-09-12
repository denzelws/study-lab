/**
 * Matrix Drill — Column Zigzag Traverse
 *
 * Traverse a matrix starting at the BOTTOM-RIGHT cell.
 *
 * Pattern (column by column, moving LEFT):
 *   1. Go UP to the top of the current column
 *   2. Move LEFT one column
 *   3. Go DOWN to the bottom of that column
 *   4. Move LEFT one column
 *   5. Repeat until all cells visited
 *
 * Example matrix:
 *   [1,  2,  3,  4 ]
 *   [5,  6,  7,  8 ]
 *   [9,  10, 11, 12]
 *
 * Expected: [12, 8, 4, 3, 7, 11, 10, 6, 2, 1, 5, 9]
 *
 * Constraints:
 *   - 1 <= rows, cols <= 100
 *   - All values are unique integers
 *   - Expected time:  O(rows * cols)
 *   - Expected space: O(rows * cols) for output array
 */
function columnTraverse(matrix: number[][]): number[] {
  const rows: number = matrix.length
  const cols: number = matrix[0].length
  let direction: "up" | "down" = "up"

  let row = rows - 1
  let col = cols - 1

  const output: number[] = []

  for (let index: number = 0; index < rows * cols; index++) {
    output[index] = matrix[row][col]

    if (direction === "up") {
      if (row - 1 < 0) {
        direction = "down";
        col -= 1;
      } else {
        row -= 1;
      }
    } else {
      if (row + 1 === rows) {
        direction = "up";
        col -= 1;
      } else {
        row += 1;
      }
    }
  }

  return output
}

// --- Test cases (run with: npm run matrix-zigzag) ---

const matrix3x4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(columnTraverse(matrix3x4));
// Expected: [12, 8, 4, 3, 7, 11, 10, 6, 2, 1, 5, 9]

const matrix1x1 = [[42]];
console.log(columnTraverse(matrix1x1)); // Expected: [42]

const matrix2x2 = [
  [1, 2],
  [3, 4],
];
console.log(columnTraverse(matrix2x2)); // Expected: [4, 2, 1, 3]

export { columnTraverse };

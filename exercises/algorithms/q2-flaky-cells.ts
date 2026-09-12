/**
 * Q2 — Flaky Cells (10 min)
 *
 * You are analyzing a CI grid. Each cell is:
 *   1 — that job failed
 *   0 — that job passed
 *
 * A cell is "flaky" if:
 *   - it is a failure (1), AND
 *   - at least one orthogonal neighbor (up, down, left, right)
 *     is also a failure (1).
 *
 * Diagonals do NOT count. Neighbors outside the grid do not exist.
 *
 * Given a rectangular matrix `grid`, return how many flaky cells there are.
 *
 * Examples:
 *   [[1, 0, 1],
 *    [1, 1, 0],
 *    [0, 0, 1]]  → 3
 *   // (0,0), (1,0), (1,1) are flaky. (0,2) and (2,2) are isolated fails.
 *
 *   [[0, 0],
 *    [0, 0]]  → 0
 *
 *   [[1]]  → 0
 *
 *   [[1, 1]]  → 2
 *
 * Constraints:
 *   - 1 <= grid.length <= 100
 *   - 1 <= grid[0].length <= 100
 *   - grid[i][j] is 0 or 1
 *   - Expected time:  O(rows * cols)
 *   - Expected space: O(1) (excluding input)
 */

function countFlakyCells(grid: number[][]): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== 1) continue;
    }
  }
}

// --- Test cases (run with: npx tsx q2-flaky-cells.ts) ---

console.log(
  countFlakyCells([
    [1, 0, 1],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // Expected: 3

console.log(
  countFlakyCells([
    [0, 0],
    [0, 0],
  ])
); // Expected: 0

console.log(countFlakyCells([[1]])); // Expected: 0

console.log(countFlakyCells([[1, 1]])); // Expected: 2

/**
 * Mode 2 — Mixed Drill Set 2 (Q1 → Q4)
 *
 * Full GCA simulation. Attempt SOLO — ask for hints only when stuck.
 * No inline hints (Mode 2). Type "submit" when done for grading.
 *
 * Run: npm run mode2-2
 *
 * Suggested order if matrix is weak: Q1 → Q3 → Q4 → Q2
 * Suggested time budget:
 *   Q1 ~10 min | Q2 ~10 min | Q3 ~20 min | Q4 ~30 min  (total ~70 min)
 */

// ═══════════════════════════════════════════════════════════════
// Q1 — Longest Pass Streak (~10 min)
// CI results string uses 'P' (pass) and 'F' (fail).
// Return the length of the longest contiguous run of 'P'.
//
// "PPFFPPP" → 3
// "FFFF"    → 0
// ""        → 0
// "P"       → 1
// ═══════════════════════════════════════════════════════════════
function longestPassStreak(results: string): number {
  let currentStreak = 0
  let maxStreak = 0

  for (const char of results) {
    if (char === "P") {
      currentStreak++
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q2 — Border Cell Sum (~10 min)
// Sum every value on the matrix border (top row, bottom row,
// left column, right column). Do not double-count corners.
//
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]  → 40
//
// [[5]]       → 5
// [[1,2,3,4]] → 10
// ═══════════════════════════════════════════════════════════════
function sumBorder(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0].length === 0) return 0
  
  const rows = matrix.length
  const cols = matrix[0].length
  let sum = 0

  // top row
  for (let c = 0; c < cols; c++) sum += matrix[0][c]

  // bottom row
  if (rows > 1) {
    for (let c = 0; c < cols; c++) sum += matrix[rows-1][c]
  }

  // left + right (skip corners)
  for (let r = 1; r < rows - 1; r++) {
    sum += matrix[r][0]
    if (cols > 1) sum += matrix[r][cols-1]
  }

  return sum
}

// ═══════════════════════════════════════════════════════════════
// Q3 — Most Frequent Test ID (~20 min)
// Return the test ID that appears most often.
// Tie-break: return the smaller numeric ID.
//
// [1, 2, 2, 3, 3, 3] → 3
// [5, 5, 4, 4]       → 4
// [7]                → 7
// []                 → -1
// ═══════════════════════════════════════════════════════════════
function mostFrequentId(testIds: number[]): number {
  const freq = new Map<number, number>()
  let bestCount = 0
  let bestId = -1

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  for (const [key,value] of freq) {
    if (value > bestCount || (value === bestCount && key < bestId)) {
      bestCount = value
      bestId = key
    }
  }

  return bestId
}

// ═══════════════════════════════════════════════════════════════
// Q4 — Max Tree Depth (~30 min)
// Each node is a subtask in a pipeline tree.
// Return maximum depth. Single node → depth 1. Empty → 0.
//
//        1
//       / \
//      2   3
//     /
//    4           → 3  (path 1 → 2 → 4)
//
// null           → 0
// single node    → 1
// right-skewed: 1 → 2 → 3  → 3
// ═══════════════════════════════════════════════════════════════
class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(
    value: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function maxTreeDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const leftDepth = maxTreeDepth(root.left)
  const rightDepth = maxTreeDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// ─── Tests ────────────────────────────────────────────────────

console.log("── Q1: longest pass streak ──");
console.log(longestPassStreak("PPFFPPP")); // Expected: 3
console.log(longestPassStreak("FFFF"));    // Expected: 0
console.log(longestPassStreak(""));        // Expected: 0
console.log(longestPassStreak("P"));        // Expected: 1

console.log("── Q2: border sum ──");
console.log(
  sumBorder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected: 40
console.log(sumBorder([[5]]));          // Expected: 5
console.log(sumBorder([[1, 2, 3, 4]])); // Expected: 10

console.log("── Q3: most frequent id ──");
console.log(mostFrequentId([1, 2, 2, 3, 3, 3])); // Expected: 3
console.log(mostFrequentId([5, 5, 4, 4]));       // Expected: 4
console.log(mostFrequentId([7]));                // Expected: 7
console.log(mostFrequentId([]));                   // Expected: -1

console.log("── Q4: max tree depth ──");
const q4Tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);
console.log(maxTreeDepth(q4Tree)); // Expected: 3
console.log(maxTreeDepth(null));   // Expected: 0
console.log(maxTreeDepth(new TreeNode(42))); // Expected: 1

const rightSkewed = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3))
);
console.log(maxTreeDepth(rightSkewed)); // Expected: 3

export {
  longestPassStreak,
  sumBorder,
  mostFrequentId,
  TreeNode,
  maxTreeDepth,
};

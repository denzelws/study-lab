/**
 * Mode 2 — Mixed Drill (Q1 → Q4)
 *
 * One exercise per GCA slot. Attempt solo; ask for hints only when stuck.
 * Run all: npm run mode2
 *
 * Suggested time budget:
 *   Q1 ~10 min | Q2 ~10 min | Q3 ~20 min | Q4 ~30 min
 */

// ═══════════════════════════════════════════════════════════════
// Q1 — Longest Fail Streak (~10 min)
// String of 'P' (pass) and 'F' (fail). Return longest contiguous
// streak of 'F'. Same family as Q1 streak counter.
//
// "PPFFFP" → 3
// "PPPP"   → 0
// ""       → 0
// "F"      → 1
// ═══════════════════════════════════════════════════════════════
function longestFailStreak(results: string): number {
  let currentStreak = 0
  let maxStreak = 0

  for (const char of results) {
    if (char === "F") {
      currentStreak++
      maxStreak = Math.max(maxStreak, currentStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q2 — Border Cell Sum (~10 min)
// Sum all values on the matrix border (outermost row/col).
// Do not double-count corner cells.
//
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]  → 40
//   top: 1+2+3, bottom: 7+8+9, sides: 4+6 → 6+18+10=40
//
// [[5]]       → 5
// [[1,2,3,4]] → 10  (single row — all border)
// ═══════════════════════════════════════════════════════════════
function sumBorder(matrix: number[][]): number {
}

// ═══════════════════════════════════════════════════════════════
// Q3 — First Duplicate ID (~20 min)
// Return the first test ID that appears a second time while
// scanning left → right. If no duplicate, return -1.
//
// [101, 202, 303, 202, 101] → 202
// [1, 2, 3]                 → -1
// []                        → -1
// [9, 9]                    → 9
// ═══════════════════════════════════════════════════════════════
function firstDuplicate(testIds: number[]): number {
  const seen = new Set<number>()

  for (const id of testIds) {
    if (seen.has(id)) {
      return id
    }
    seen.add(id)
  }

  return -1
}

// ═══════════════════════════════════════════════════════════════
// Q4 — Count Leaf Nodes (~30 min)
// A leaf has no left or right child. Return total leaf count.
//
//     1
//    / \
//   2   3
//  /
// 4        → 2 leaves (nodes 4 and 3)
//
// null     → 0
// single   → 1
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

function countLeaves(root: TreeNode | null): number {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 1

  return countLeaves(root.left) + countLeaves(root.right)
}

// ─── Tests ────────────────────────────────────────────────────

console.log("── Q1: longest fail streak ──");
console.log(longestFailStreak("PPFFFP")); // Expected: 3
console.log(longestFailStreak("PPPP"));   // Expected: 0
console.log(longestFailStreak(""));       // Expected: 0
console.log(longestFailStreak("F"));        // Expected: 1

console.log("── Q2: border sum ──");
console.log(
  sumBorder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected: 40
console.log(sumBorder([[5]]));              // Expected: 5
console.log(sumBorder([[1, 2, 3, 4]]));     // Expected: 10

console.log("── Q3: first duplicate ──");
console.log(firstDuplicate([101, 202, 303, 202, 101])); // Expected: 202
console.log(firstDuplicate([1, 2, 3]));                 // Expected: -1
console.log(firstDuplicate([]));                          // Expected: -1
console.log(firstDuplicate([9, 9]));                      // Expected: 9

console.log("── Q4: count leaves ──");
const q4Tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);
console.log(countLeaves(q4Tree));           // Expected: 2
console.log(countLeaves(null));             // Expected: 0
console.log(countLeaves(new TreeNode(7)));  // Expected: 1

export {
  longestFailStreak,
  sumBorder,
  firstDuplicate,
  TreeNode,
  countLeaves,
};

/**
 * Tree Recursion Drill — 5 exercises, one skeleton
 *
 * Same pattern every time:
 *   1. base case: root === null → ?
 *   2. recurse left + right
 *   3. combine — THIS is what changes per problem
 *
 * Run: npm run tree-recursion
 *
 * Shared example tree:
 *        1
 *       / \
 *      2   3
 *     /
 *    4
 */

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

const exampleTree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);

// ═══════════════════════════════════════════════════════════════
// T1 — Max Tree Depth
// Longest root-to-node path. Single node → 1. null → 0.
//
// HINT: null → 0. Combine: 1 + Math.max(left, right)
//
// example tree → 3 | null → 0 | single(7) → 1
// ═══════════════════════════════════════════════════════════════
function maxTreeDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const leftDepth = maxTreeDepth(root.left)
  const rightDepth = maxTreeDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// ═══════════════════════════════════════════════════════════════
// T2 — Count Leaf Nodes
// A leaf has no left AND no right child.
//
// HINT: null → 0. If leaf → 1. Else: left + right (SUM, not max!)
//
// example tree → 2 (nodes 4 and 3) | null → 0 | single(7) → 1
// ═══════════════════════════════════════════════════════════════
function countLeaves(root: TreeNode | null): number {
  if (root === null) return 0

  if (root.left === null && root.right === null) return 1

  return countLeaves(root.left) + countLeaves(root.right)
}

// ═══════════════════════════════════════════════════════════════
// T3 — Count All Nodes
// Return total number of nodes in the tree.
//
// HINT: null → 0. Combine: 1 + left + right (count yourself + both subtrees)
//
// example tree → 4 | null → 0 | single(7) → 1
// ═══════════════════════════════════════════════════════════════
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0

  const left = countNodes(root.left)
  const right = countNodes(root.right)

  return 1 + left + right
}

// ═══════════════════════════════════════════════════════════════
// T4 — Sum All Values
// Return sum of every node.value in the tree.
//
// HINT: null → 0. Combine: root.value + left + right
//
// example tree → 10 (1+2+3+4) | null → 0 | single(7) → 7
// ═══════════════════════════════════════════════════════════════
function sumTreeValues(root: TreeNode | null): number {
  if (root === null) return 0

  const left = sumTreeValues(root.left)
  const right = sumTreeValues(root.right)

  return root.value + left + right
}

// ═══════════════════════════════════════════════════════════════
// T5 — Min Tree Depth
// Shortest root-to-leaf path. Single node → 1. null → 0.
//
// HINT: Same as max depth but Math.min instead of Math.max
//
// example tree → 2 (path 1→3) | null → 0 | single(7) → 1
// right-skewed 1→2→3 → 3
// ═══════════════════════════════════════════════════════════════
function minTreeDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const left = minTreeDepth(root.left)
  const right = minTreeDepth(root.right)

  if (root.left === null) return 1 + right
  if (root.right === null) return 1 + left

  return 1 + Math.min(left, right)
}

// ─── Tests ────────────────────────────────────────────────────

console.log("── T1: max depth ──");
console.log(maxTreeDepth(exampleTree)); // Expected: 3
console.log(maxTreeDepth(null)); // Expected: 0
console.log(maxTreeDepth(new TreeNode(7))); // Expected: 1

console.log("── T2: count leaves ──");
console.log(countLeaves(exampleTree)); // Expected: 2
console.log(countLeaves(null)); // Expected: 0
console.log(countLeaves(new TreeNode(7))); // Expected: 1

console.log("── T3: count nodes ──");
console.log(countNodes(exampleTree)); // Expected: 4
console.log(countNodes(null)); // Expected: 0
console.log(countNodes(new TreeNode(7))); // Expected: 1

console.log("── T4: sum values ──");
console.log(sumTreeValues(exampleTree)); // Expected: 10
console.log(sumTreeValues(null)); // Expected: 0
console.log(sumTreeValues(new TreeNode(7))); // Expected: 7

console.log("── T5: min depth ──");
console.log(minTreeDepth(exampleTree)); // Expected: 2
console.log(minTreeDepth(null)); // Expected: 0
console.log(minTreeDepth(new TreeNode(7))); // Expected: 1
const rightSkewed = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3))
);
console.log(minTreeDepth(rightSkewed)); // Expected: 3

export {
  TreeNode,
  maxTreeDepth,
  countLeaves,
  countNodes,
  sumTreeValues,
  minTreeDepth,
};

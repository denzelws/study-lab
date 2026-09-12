/**
 * Tree Memory Drill — 3 exercises only
 *
 * Write from memory. No peeking at tree-recursion-drill.ts.
 *
 * Same skeleton every time:
 *   1. if root === null → return 0
 *   2. left  = recurse(root.left)
 *   3. right = recurse(root.right)
 *   4. combine — ONLY this line changes
 *
 * Run: npm run tree-memory
 *
 * Example tree:
 *        1
 *       / \
 *      2   3
 *     /
 *    4
 *
 * Expected: max depth → 3 | leaves → 2 | nodes → 4
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

// T1 — Max Tree Depth
// Longest root-to-node path. Single node → 1. null → 0.
function maxTreeDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const leftDepth = maxTreeDepth(root.left)
  const rightDepth = maxTreeDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// T2 — Count Leaf Nodes
// Leaf = no left AND no right child.
function countLeaves(root: TreeNode | null): number {
  if (root === null) return 0

  if (root.left === null && root.right === null) return 1

  return countLeaves(root.left) + countLeaves(root.right)
}

// T3 — Count All Nodes
// Total nodes in the tree.
function countNodes(root: TreeNode | null): number {
  if (root === null) return 0
  
  const left = countNodes(root.left)
  const right = countNodes(root.right)

  return 1 + left + right
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

export { TreeNode, maxTreeDepth, countLeaves, countNodes };

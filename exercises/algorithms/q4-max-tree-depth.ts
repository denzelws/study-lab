/**
 * Q4 — Max Tree Depth (30 min) | Mode 2
 *
 * Each node is a subtask in a test pipeline tree.
 * Return the maximum depth of the tree.
 *
 * A single node (root only) has depth 1.
 * An empty tree has depth 0.
 *
 * Example tree:
 *        1
 *       / \
 *      2   3
 *     /
 *    4
 *
 * Max depth: 3  (path 1 → 2 → 4)
 *
 * Examples:
 *   tree above     → 3
 *   null           → 0
 *   single node    → 1
 *   right-skewed 3 → 3  (1 → 2 → 3)
 *
 * Constraints:
 *   - 0 <= number of nodes <= 10^4
 *   - Expected time:  O(n)
 *   - Expected space: O(h)
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

function maxTreeDepth(root: TreeNode | null): number {
  if (root === null) return 0

  const leftDepth = maxTreeDepth(root.left)
  const rightDepth = maxTreeDepth(root.right)

  return 1 + Math.max(leftDepth, rightDepth)
}

// --- Test cases (run with: npm run q4) ---

const exampleTree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3)
);
console.log(maxTreeDepth(exampleTree)); // Expected: 3

console.log(maxTreeDepth(null)); // Expected: 0

console.log(maxTreeDepth(new TreeNode(42))); // Expected: 1

const rightSkewed = new TreeNode(
  1,
  null,
  new TreeNode(2, null, new TreeNode(3))
);
console.log(maxTreeDepth(rightSkewed)); // Expected: 3

export { TreeNode, maxTreeDepth };

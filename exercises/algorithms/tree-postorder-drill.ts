/**
 * Tree Drill — Postorder Snapshot (final postorder drill)
 *
 * Each node is a subtask (value + status). Status does NOT affect traversal —
 * visit every node in POSTORDER (left → right → root) and collect all task IDs.
 *
 * Tree for Example 1:
 *          1 (finished)
 *         / \
 *   2 (stuck)  3 (trying)
 *    / \
 * 4 (stuck)  5 (finished)
 *
 * Postorder: [4, 5, 2, 3, 1]
 *
 * Examples:
 *   Example 1 tree above  → [4, 5, 2, 3, 1]
 *   null root               → []
 *   single node value 7     → [7]
 *   right-skewed: 1→3→2     → [2, 3, 1]
 *
 * Constraints:
 *   - 0 <= number of nodes <= 10^4
 *   - Expected time:  O(n)
 *   - Expected space: O(h) recursion stack
 */

type TaskStatus = "stuck" | "trying" | "finished";

class TaskNode {
  value: number;
  status: TaskStatus;
  left: TaskNode | null;
  right: TaskNode | null;

  constructor(
    value: number,
    status: TaskStatus,
    left: TaskNode | null = null,
    right: TaskNode | null = null
  ) {
    this.value = value;
    this.status = status;
    this.left = left;
    this.right = right;
  }
}

function postorderSnapshot(root: TaskNode | null): number[] {
  const result: number[] = []

  function dfs(node: TaskNode | null) {
    if (node === null ) return
    dfs(node.left)
    dfs(node.right)

    result.push(node.value)
  }

  dfs(root)
  return result
}

// --- Test cases (run with: npm run tree-postorder) ---

const example1 = new TaskNode(
  1,
  "finished",
  new TaskNode(
    2,
    "stuck",
    new TaskNode(4, "stuck"),
    new TaskNode(5, "finished")
  ),
  new TaskNode(3, "trying")
);
console.log(postorderSnapshot(example1)); // Expected: [4, 5, 2, 3, 1]

console.log(postorderSnapshot(null)); // Expected: []

console.log(postorderSnapshot(new TaskNode(7, "stuck"))); // Expected: [7]

// Right-skewed: 1 → right 3 → right 2
const rightSkewed = new TaskNode(
  1,
  "finished",
  null,
  new TaskNode(3, "trying", null, new TaskNode(2, "stuck"))
);
console.log(postorderSnapshot(rightSkewed)); // Expected: [2, 3, 1]

export { TaskNode, postorderSnapshot, TaskStatus };

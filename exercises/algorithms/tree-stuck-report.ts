/**
 * Tree Drill — Report Stuck Tasks (Postorder)
 *
 * Each node in the tree is a subtask with:
 *   value  — task ID (number)
 *   status — 'stuck' | 'trying' | 'finished'
 *
 * Walk the entire tree in POSTORDER (left → right → root).
 * Collect the task IDs (values) of every node whose status is 'stuck'.
 * Return them in the order you visit them (postorder among all nodes,
 * skipping non-stuck nodes without changing traversal order).
 *
 * Tree for Example 1:
 *          1 (finished)
 *         / \
 *   2 (stuck)  3 (trying)
 *    / \
 * 4 (stuck)  5 (finished)
 *
 * Postorder visit order of ALL nodes: 4, 5, 2, 3, 1
 * Only 'stuck' nodes kept:            4, 2
 *
 * Examples:
 *   Example 1 tree above  → [4, 2]
 *   null root               → []
 *   single node stuck(7)    → [7]
 *   single node trying(9)   → []
 *
 * Constraints:
 *   - 0 <= number of nodes <= 10^4
 *   - status is always 'stuck', 'trying', or 'finished'
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

function reportStuckTasks(root: TaskNode | null): number[] {
  // TODO: implement postorder traversal — collect values where status === 'stuck'
  const result: number[] = [];

  function dfs(node: TaskNode | null): void {
    if (node === null) return
    dfs(node.left)
    dfs(node.right)

    if (node.status === 'stuck') {
      result.push(node.value)
    }
  }

  dfs(root)
  return result
}

// --- Test cases (run with: npm run tree-stuck) ---

// Example 1
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
console.log(reportStuckTasks(example1)); // Expected: [4, 2]

// Empty tree
console.log(reportStuckTasks(null)); // Expected: []

// Single stuck node
console.log(reportStuckTasks(new TaskNode(7, "stuck"))); // Expected: [7]

// Single trying node (no stuck tasks)
console.log(reportStuckTasks(new TaskNode(9, "trying"))); // Expected: []

export { TaskNode, reportStuckTasks, TaskStatus };

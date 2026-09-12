/**
 * Q1b — Longest Uptime Streak (10 min)
 *
 * You are monitoring server health. Each hourly check is recorded as an
 * integer in an array:
 *   1 — server is up
 *   0 — server is down
 *
 * Given an array `status` representing checks in chronological order,
 * return the length of the longest contiguous streak of uptime (1s).
 * If the server was never up, return 0.
 *
 * Examples:
 *   [1, 1, 0, 1, 1, 1, 0] → 3
 *   [0, 0, 0]              → 0
 *   [1]                    → 1
 *   []                     → 0
 *
 * Constraints:
 *   - 0 <= status.length <= 10^5
 *   - Each element is either 0 or 1
 *   - Expected time:  O(n)
 *   - Expected space: O(1) (excluding input)
 */

function longestUptimeStreak(status: number[]): number {
  let currentStreak = 0;
  let maxStreak = 0;

  for ( const statusCheck of status) {
    if (statusCheck === 1) {
      // increment statusCheck
      currentStreak++;
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// --- Test cases (run with: npx tsx q1b-uptime-streak.ts) ---

console.log(longestUptimeStreak([1, 1, 0, 1, 1, 1, 0])); // Expected: 3
console.log(longestUptimeStreak([0, 0, 0]));              // Expected: 0
console.log(longestUptimeStreak([1]));                    // Expected: 1
console.log(longestUptimeStreak([]));                     // Expected: 0

/**
 * Q1 — Streak Counter (10 min)
 *
 * You are analyzing automated test run results. Each run is recorded as a
 * single character in a string:
 *   'P' — passed
 *   'F' — failed
 *   'S' — skipped
 *
 * Given a string `results` representing a test run in chronological order,
 * return the length of the longest contiguous streak of passes ('P').
 * If there are no passes, return 0.
 *
 * Examples:
 *   "PPFPPP" → 3   (longest streak is "PPP")
 *   "SSSFFF" → 0
 *   "P"      → 1
 *   ""       → 0
 *
 * Constraints:
 *   - 0 <= results.length <= 10^5
 *   - results contains only 'P', 'F', and 'S'
 *   - Expected time:  O(n)
 *   - Expected space: O(1) (excluding input)
 */

function longestPassStreak(results: string): number {
  let currentStreak = 0;
  let maxStreak = 0;

  for (const char of results) {
    if (char === 'P') {
      // increment currentStreak
      currentStreak++;
      // update maxStreak if currentStreak is bigger
      let verify = currentStreak > maxStreak ? currentStreak : maxStreak;
      maxStreak = verify;
    } else  {
      // reset currentStreak to 0
      currentStreak = 0;
    }
  }

  return maxStreak;
}

function longestPassStreakMathMax(results: string): number {
  let currentStreak = 0;
  let maxStreak = 0;

  for (const char of results) {
    if (char === 'P') {
      // increment currentStreak
      currentStreak++;
      // update maxStreak if currentStreak is bigger
      maxStreak = Math.max(currentStreak, maxStreak);
    } else  {
      // reset currentStreak to 0
      currentStreak = 0;
    }
  }

  return maxStreak;
}

// --- Test cases (run with: npx tsx q1-streak-counter.ts) ---

console.log(longestPassStreak("PPFPPP")); // Expected: 3
console.log(longestPassStreak("SSSFFF")); // Expected: 0
console.log(longestPassStreak("P"));       // Expected: 1
console.log(longestPassStreak(""));        // Expected: 0

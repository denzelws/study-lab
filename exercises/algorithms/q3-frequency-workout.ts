/**
 * Q3 Frequency Map Workout — 5 drills, one file
 *
 * Every exercise uses the SAME loop 1:
 *   build freq Map with (freq.get(id) ?? 0) + 1
 *
 * Only loop 2 (the question) changes. Run all:
 *   npm run q3-workout
 */

// ─────────────────────────────────────────────────────────────
// 1. Exactly Twice
// Return how many DISTINCT IDs appear exactly 2 times.
// [1, 2, 1, 3, 2, 2] → 2  (IDs 1 and 2 appear exactly twice; 3 appears 3x)
// ─────────────────────────────────────────────────────────────
function countExactlyTwice(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value === 2) count++
  }

  return count
}

// ─────────────────────────────────────────────────────────────
// 2. At Least Three (flaky threshold)
// Return how many DISTINCT IDs appear 3 or more times.
// [1, 1, 1, 2, 2, 3] → 1  (only ID 1 hits 3+)
// ─────────────────────────────────────────────────────────────
function countAtLeastThree(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value >= 3) count++
  }

  return count
}

// ─────────────────────────────────────────────────────────────
// 3. Total Extra Runs
// Each repeat beyond the first counts as an "extra run".
// Sum all extras: for each ID, add (frequency - 1) if frequency > 1.
// [10, 10, 10, 20, 20] → 3  (10 has 2 extras, 20 has 1 extra → 2+1=3)
// ─────────────────────────────────────────────────────────────
function totalExtraRuns(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value > 1) {
      count += value - 1
    }
  }

  return count
}

// ─────────────────────────────────────────────────────────────
// 4. Max Frequency
// Return the highest frequency any single ID reaches.
// [5, 5, 5, 1, 1] → 3  (ID 5 appears 3 times)
// [] → 0
// ─────────────────────────────────────────────────────────────
function maxFrequency(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let max = 0

  for (const [key, value] of freq) {
    max = Math.max(max, value)
  }

  return max
}

// ─────────────────────────────────────────────────────────────
// 5. Distinct ID Count
// Return how many UNIQUE test IDs exist (regardless of how often).
// [1, 2, 1, 3, 3, 3] → 3  (distinct: 1, 2, 3)
// [] → 0
// ─────────────────────────────────────────────────────────────
function distinctIdCount(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  return freq.size
}

// ─── Tests ──────────────────────────────────────────────────

console.log("1. exactly twice");
console.log(countExactlyTwice([1, 2, 1, 3, 2, 2])); // Expected: 2
console.log(countExactlyTwice([7, 7]));             // Expected: 1
console.log(countExactlyTwice([1, 2, 3]));          // Expected: 0

console.log("2. at least three");
console.log(countAtLeastThree([1, 1, 1, 2, 2, 3])); // Expected: 1
console.log(countAtLeastThree([4, 4, 4, 5, 5, 5])); // Expected: 2
console.log(countAtLeastThree([1, 1]));             // Expected: 0

console.log("3. total extra runs");
console.log(totalExtraRuns([10, 10, 10, 20, 20]));  // Expected: 3
console.log(totalExtraRuns([1, 2, 3]));             // Expected: 0
console.log(totalExtraRuns([9, 9]));                // Expected: 1

console.log("4. max frequency");
console.log(maxFrequency([5, 5, 5, 1, 1]));         // Expected: 3
console.log(maxFrequency([]));                      // Expected: 0
console.log(maxFrequency([8]));                     // Expected: 1

console.log("5. distinct count");
console.log(distinctIdCount([1, 2, 1, 3, 3, 3]));   // Expected: 3
console.log(distinctIdCount([]));                   // Expected: 0
console.log(distinctIdCount([42]));                 // Expected: 1

export {
  countExactlyTwice,
  countAtLeastThree,
  totalExtraRuns,
  maxFrequency,
  distinctIdCount,
};

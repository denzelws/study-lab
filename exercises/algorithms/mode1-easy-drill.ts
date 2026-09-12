/**
 * Mode 1 — Easy Drill (Q1 + Q3 only)
 *
 * High-collaboration practice. Ask for help anytime.
 * Master these before Mode 2 (mode2-mixed-drill.ts).
 *
 * Run: npm run mode1
 *
 * Path:
 *   Mode 1 (this file) → Mode 2 → Q4 trees → Matrix last
 */

// ═══════════════════════════════════════════════════════════════
// Q1-1: Longest Pass Streak
// Return longest contiguous run of 'P' in a results string.
//
// HINT: Two counters — currentStreak + maxStreak.
//       Grow on 'P', reset on anything else. Same as q1-streak-counter.ts.
//
// "PPFP" → 2 | "FFFF" → 0 | "" → 0
// ═══════════════════════════════════════════════════════════════
function longestPassStreak(results: string): number {
  let currentStreak = 0
  let maxStreak = 0

  for (const char of results) {
    if (char === 'P') {
      currentStreak++
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q1-2: Longest Zero Streak
// Array of 0 (down) and 1 (up). Return longest contiguous run of 0.
//
// HINT: Same template as Q1-1 — swap 'P' for 1 → check n === 0.
//
// [1,0,0,1,0] → 2 | [1,1,1] → 0
// ═══════════════════════════════════════════════════════════════
function longestZeroStreak(status: number[]): number {
  let currentStreak = 0
  let maxStreak = 0

  for (const n of status) {
    if (n === 0) {
      currentStreak++
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q1-3: Count Fails
// Count total 'F' characters in the string (simple loop — no Map).
//
// HINT: Loop each char, if char === 'F' then count++.
//
// "PPFPF" → 2 | "PPPP" → 0
// ═══════════════════════════════════════════════════════════════
function countFails(results: string): number {
  let count = 0

  for (const char of results) {
    if (char === "F") count++
  }

  return count
}

// ═══════════════════════════════════════════════════════════════
// Q1-4: Longest Same-Char Streak
// Longest run of the SAME character (any letter), e.g. "aaabb" → 3.
//
// HINT: Track currentChar + currentStreak + maxStreak.
//       If char === currentChar → grow streak, else reset char & streak to 1.
//
// "aaabb" → 3 | "abc" → 1 | "" → 0
// ═══════════════════════════════════════════════════════════════
function longestCharStreak(s: string): number {
  let currentStreak = 0
  let maxStreak = 0
  let currentChar = ""

  for (const char of s) {
    if (char === currentChar) {
      currentStreak++
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentChar = char
      currentStreak = 1
      maxStreak = Math.max(currentStreak, maxStreak)
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q1-5: All Passed
// Return true if the string contains NO 'F' characters.
//
// HINT: Loop — if you see 'F', return false immediately. If loop finishes, true.
//
// "PPP" → true | "PPF" → false | "" → true
// ═══════════════════════════════════════════════════════════════
function allPassed(results: string): boolean {
  for (const r of results) {
    if (r === "F") return false
  }

  return true
}

// ═══════════════════════════════════════════════════════════════
// Q3-1: Count Unique Once (Map)
// Return how many DISTINCT IDs appear exactly once.
//
// HINT: Loop 1 — freq Map with (get(id) ?? 0) + 1
//       Loop 2 — if (times === 1) count++
//
// [1,2,1,3] → 2  (IDs 2 and 3 appear once)
// ═══════════════════════════════════════════════════════════════
function countUniqueOnce(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value === 1) count ++
  }

  return count
}

// ═══════════════════════════════════════════════════════════════
// Q3-2: First Duplicate (Set)
// Scan left→right. Return first ID seen a second time, or -1.
//
// HINT: Set + seen.has(id) before add. Return id on second sighting.
//       NOT a frequency Map — you only need "seen before?"
//
// [1,2,1] → 1 | [1,2,3] → -1 | [9,9] → 9
// ═══════════════════════════════════════════════════════════════
function firstDuplicate(testIds: number[]): number {
  const seen = new Set<number>()

  for (const id of testIds) {
    if (seen.has(id)) return id
    seen.add(id)
  }

  return -1
}

// ═══════════════════════════════════════════════════════════════
// Q3-3: Has Any Duplicate (Set)
// Return true if any ID appears more than once.
//
// HINT: Same Set loop as firstDuplicate — return true on has(id), false at end.
//
// [1,2,1] → true | [1,2,3] → false | [] → false
// ═══════════════════════════════════════════════════════════════
function hasAnyDuplicate(testIds: number[]): boolean {
  const seen = new Set<number>()

  for (const id of testIds) {
    if (seen.has(id)) return true
    seen.add(id)
  }

  return false
}

// ═══════════════════════════════════════════════════════════════
// Q3-4: Count Repeated IDs (Map)
// Return how many DISTINCT IDs appear 2 or more times.
//
// HINT: Build freq Map, loop 2 — if (value > 1) count++
//
// [1,1,2,3,3] → 2  (IDs 1 and 3 repeat)
// ═══════════════════════════════════════════════════════════════
function countRepeatedIds(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let counter = 0

  for (const [key,value] of freq) {
    if (value > 1 ) counter++
  }

  return counter
}

// ═══════════════════════════════════════════════════════════════
// Q3-5: Most Frequent ID (Map)
// Return the ID with the highest frequency. Ties: return the smaller ID.
//
// HINT: Build freq Map, loop 2 — track bestId + bestCount.
//       Update when value > bestCount OR (value === bestCount && key < bestId).
//
// [1,1,1,2,2] → 1 | [5,5,3,3,3] → 3
// ═══════════════════════════════════════════════════════════════
function mostFrequentId(testIds: number[]): number {
  const freq = new Map<number, number>()
  let bestId = 0
  let bestCount = 0

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  for (const [key, value] of freq) {
    if (value > bestCount || (value === bestCount && key < bestId)) {
      bestCount = value
      bestId = key
    }
  }

  return bestId
}

// ═══════════════════════════════════════════════════════════════
// Q3-5b: Top Failure Code (verification — same pattern as Q3-5)
// Return the error code that appears most often. Ties: smaller code.
//
// HINT: Identical to mostFrequentId — rename bestId → bestCode.
//       Do NOT peek at mostFrequentId while solving.
//
// [500,404,500,404,404] → 404
// [200,200,301,301]     → 200  (tie → smaller code)
// [503]                 → 503
// ═══════════════════════════════════════════════════════════════
function topFailureCode(codes: number[]): number {
  const freq = new Map<number,number>()
  let bestCode = 0
  let bestCount = 0

  for (const n of codes) {
    freq.set(n, (freq.get(n) ?? 0) + 1)
  }

  for (const [key, value] of freq) {
    if (value > bestCount || (value === bestCount && key < bestCode)) {
      bestCount = value
      bestCode = key
    }
  }

  return bestCode
}

// ─── Tests ────────────────────────────────────────────────────

console.log("── Q1-1: longest pass streak ──");
console.log(longestPassStreak("PPFP")); // Expected: 2
console.log(longestPassStreak("FFFF")); // Expected: 0
console.log(longestPassStreak(""));     // Expected: 0

console.log("── Q1-2: longest zero streak ──");
console.log(longestZeroStreak([1, 0, 0, 1, 0])); // Expected: 2
console.log(longestZeroStreak([1, 1, 1]));        // Expected: 0

console.log("── Q1-3: count fails ──");
console.log(countFails("PPFPF")); // Expected: 2
console.log(countFails("PPPP"));  // Expected: 0

console.log("── Q1-4: longest char streak ──");
console.log(longestCharStreak("aaabb")); // Expected: 3
console.log(longestCharStreak("abc"));   // Expected: 1
console.log(longestCharStreak(""));      // Expected: 0

console.log("── Q1-5: all passed ──");
console.log(allPassed("PPP"));  // Expected: true
console.log(allPassed("PPF"));  // Expected: false
console.log(allPassed(""));     // Expected: true

console.log("── Q3-1: count unique once ──");
console.log(countUniqueOnce([1, 2, 1, 3])); // Expected: 2
console.log(countUniqueOnce([1, 1, 1]));  // Expected: 0

console.log("── Q3-2: first duplicate ──");
console.log(firstDuplicate([1, 2, 1]));   // Expected: 1
console.log(firstDuplicate([1, 2, 3]));   // Expected: -1
console.log(firstDuplicate([9, 9]));       // Expected: 9

console.log("── Q3-3: has any duplicate ──");
console.log(hasAnyDuplicate([1, 2, 1])); // Expected: true
console.log(hasAnyDuplicate([1, 2, 3])); // Expected: false

console.log("── Q3-4: count repeated ids ──");
console.log(countRepeatedIds([1, 1, 2, 3, 3])); // Expected: 2
console.log(countRepeatedIds([7, 8, 9]));       // Expected: 0

console.log("── Q3-5: most frequent id ──");
console.log(mostFrequentId([1, 1, 1, 2, 2])); // Expected: 1
console.log(mostFrequentId([5, 5, 3, 3, 3])); // Expected: 3

console.log("── Q3-5b: top failure code (verification) ──");
console.log(topFailureCode([500, 404, 500, 404, 404])); // Expected: 404
console.log(topFailureCode([200, 200, 301, 301]));       // Expected: 200
console.log(topFailureCode([503]));                       // Expected: 503

export {
  longestPassStreak,
  longestZeroStreak,
  countFails,
  longestCharStreak,
  allPassed,
  countUniqueOnce,
  firstDuplicate,
  hasAnyDuplicate,
  countRepeatedIds,
  mostFrequentId,
  topFailureCode,
};

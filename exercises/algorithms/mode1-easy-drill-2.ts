/**
 * Mode 1 — Easy Drill Set 2 (Q1 + Q3)
 *
 * New questions — same patterns, different stories.
 * Do NOT peek at mode1-easy-drill.ts while solving.
 *
 * Run: npm run mode1-2
 */

// ═══════════════════════════════════════════════════════════════
// Q1-1: Longest Skip Streak
// String uses 'P', 'F', 'S'. Return longest contiguous run of 'S'.
//
// HINT: Same 2-counter loop as pass/fail streak — target char is 'S'.
//
// "PSSSP" → 3 | "PPPP" → 0 | "" → 0
// ═══════════════════════════════════════════════════════════════
function longestSkipStreak(results: string): number {
  let currentStreak = 0
  let maxStreak = 0

  for (const char of results) {
    if (char === "S") {
      currentStreak++
      maxStreak = Math.max(currentStreak, maxStreak)
    } else {
      currentStreak = 0
    }
  }

  return maxStreak
}

// ═══════════════════════════════════════════════════════════════
// Q1-2: Count Ones
// Binary array (0 or 1). Return total count of 1s.
//
// HINT: Simple loop — if n === 1 then count++.
//
// [1,0,1,1,0] → 3 | [0,0] → 0
// ═══════════════════════════════════════════════════════════════
function countOnes(status: number[]): number {
  let counter = 0

  for (const n of status) {
    if (n === 1) counter++
  }

  return counter
}

// ═══════════════════════════════════════════════════════════════
// Q1-3: Longest One Streak
// Binary array. Return longest contiguous run of 1s.
//
// HINT: Same as longestPassStreak — check n === 1, reset on 0.
//
// [0,1,1,1,0] → 3 | [0,0,0] → 0
// ═══════════════════════════════════════════════════════════════
function longestOneStreak(status: number[]): number {
  let count = 0

  for (const n of status) {
    if (n === 1) count++
  }

  return count
}

// ═══════════════════════════════════════════════════════════════
// Q1-4: Count Vowels
// Count how many vowels (a,e,i,o,u — lowercase) appear in s.
//
// HINT: Loop chars, if char is in "aeiou" then count++.
//
// "hello" → 2 | "xyz" → 0 | "" → 0
// ═══════════════════════════════════════════════════════════════
function countVowels(s: string): number {
  const vowels = "aeiou"
  let count = 0

  for (const char of s) {
    if (vowels.includes(char)) count++
  }

  return count
}

// ═══════════════════════════════════════════════════════════════
// Q1-5: Has Any Fail
// Return true if the string contains at least one 'F'.
//
// HINT: Loop — if char === 'F' return true. After loop return false.
//
// "PPF" → true | "PPP" → false | "" → false
// ═══════════════════════════════════════════════════════════════
function hasAnyFail(results: string): boolean {
  for (const char of results) {
    if (char === "F") return true
  }
  return false
}

// ═══════════════════════════════════════════════════════════════
// Q3-1: Count Exactly Three (Map)
// Return how many DISTINCT IDs appear exactly 3 times.
//
// HINT: Build freq Map, loop 2 — if (value === 3) count++.
//
// [1,1,1,2,2,2,2,3] → 1  (only ID 1 has count 3)
// ═══════════════════════════════════════════════════════════════
function countExactlyThree(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  let count = 0

  for (const [key, value] of freq) {
    if (value === 3) count++
  }

  return count
}

// ═══════════════════════════════════════════════════════════════
// Q3-2: All Unique (Set)
// Return true if every ID appears only once (no duplicates).
//
// HINT: Set — if seen.has(id) return false. After loop return true.
//
// [1,2,3] → true | [1,2,1] → false | [] → true
// ═══════════════════════════════════════════════════════════════
function allUnique(testIds: number[]): boolean {
  const seen = new Set<number>()

  for (const id of testIds) {
    if (seen.has(id)) return false
    seen.add(id)
  }

  return true
}

// ═══════════════════════════════════════════════════════════════
// Q3-3: Distinct Count (Map)
// Return how many UNIQUE IDs exist in the array.
//
// HINT: Build freq Map → return freq.size (no loop 2 needed).
//
// [1,2,1,3,3] → 3 | [] → 0
// ═══════════════════════════════════════════════════════════════
function distinctCount(testIds: number[]): number {
  const freq = new Map<number, number>()

  for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
  }

  return freq.size
}

// ═══════════════════════════════════════════════════════════════
// Q3-4: Total Duplicate Entries (Map)
// Count total "extra" occurrences: sum (frequency - 1) for each ID.
//
// HINT: Build freq Map, loop 2 — if value > 1, count += value - 1.
//
// [1,1,1,2,2] → 3  (two extra 1s + one extra 2)
// ═══════════════════════════════════════════════════════════════
function totalDuplicateEntries(testIds: number[]): number {
   const freq = new Map<number, number>()
   
   for (const id of testIds) {
    freq.set(id, (freq.get(id) ?? 0) + 1)
   }

   let count = 0

   for (const [key,value] of freq) {
    if (value > 1) count += value - 1
   }

   return count
}

// ═══════════════════════════════════════════════════════════════
// Q3-5: Most Frequent Char (Map)
// Return the character that appears most often in s.
// Ties: return the smaller char (alphabetically).
//
// HINT: Same as mostFrequentId — Map<char, number>, bestChar + bestCount.
//
// "aabbb" → "b" | "aabb" → "a" | "z" → "z"
// ═══════════════════════════════════════════════════════════════
function mostFrequentChar(s: string): string {
  const freq = new Map<string, number>()
  let bestChar = ""
  let bestCount = 0

  for (const char of s) {
    freq.set(char, (freq.get(char) ?? 0) + 1)
  }

  for (const [key,value] of freq) {
    if (value > bestCount || (value === bestCount && key < bestChar)) {
      bestCount = value
      bestChar = key
    }
  }

  return bestChar
}

// ─── Tests ────────────────────────────────────────────────────

console.log("── Q1-1: longest skip streak ──");
console.log(longestSkipStreak("PSSSP")); // Expected: 3
console.log(longestSkipStreak("PPPP"));  // Expected: 0
console.log(longestSkipStreak(""));      // Expected: 0

console.log("── Q1-2: count ones ──");
console.log(countOnes([1, 0, 1, 1, 0])); // Expected: 3
console.log(countOnes([0, 0]));          // Expected: 0

console.log("── Q1-3: longest one streak ──");
console.log(longestOneStreak([0, 1, 1, 1, 0])); // Expected: 3
console.log(longestOneStreak([0, 0, 0]));       // Expected: 0

console.log("── Q1-4: count vowels ──");
console.log(countVowels("hello")); // Expected: 2
console.log(countVowels("xyz"));    // Expected: 0
console.log(countVowels(""));       // Expected: 0

console.log("── Q1-5: has any fail ──");
console.log(hasAnyFail("PPF")); // Expected: true
console.log(hasAnyFail("PPP")); // Expected: false
console.log(hasAnyFail(""));    // Expected: false

console.log("── Q3-1: count exactly three ──");
console.log(countExactlyThree([1, 1, 1, 2, 2, 2, 2, 3])); // Expected: 1
console.log(countExactlyThree([1, 1, 1, 1]));             // Expected: 0

console.log("── Q3-2: all unique ──");
console.log(allUnique([1, 2, 3])); // Expected: true
console.log(allUnique([1, 2, 1])); // Expected: false
console.log(allUnique([]));         // Expected: true

console.log("── Q3-3: distinct count ──");
console.log(distinctCount([1, 2, 1, 3, 3])); // Expected: 3
console.log(distinctCount([]));              // Expected: 0

console.log("── Q3-4: total duplicate entries ──");
console.log(totalDuplicateEntries([1, 1, 1, 2, 2])); // Expected: 3
console.log(totalDuplicateEntries([1, 2, 3]));       // Expected: 0

console.log("── Q3-5: most frequent char ──");
console.log(mostFrequentChar("aabbb")); // Expected: b
console.log(mostFrequentChar("aabb"));  // Expected: a
console.log(mostFrequentChar("z"));     // Expected: z

export {
  longestSkipStreak,
  countOnes,
  longestOneStreak,
  countVowels,
  hasAnyFail,
  countExactlyThree,
  allUnique,
  distinctCount,
  totalDuplicateEntries,
  mostFrequentChar,
};

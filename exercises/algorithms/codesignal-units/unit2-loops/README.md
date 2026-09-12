# Unit 2: Mastering Loops

## 🎯 Objective
Transition from manual array/string manipulation to automated iteration using standard TS loops. Focus on conditional checks inside loops and string/array building.

## 🧠 Core Concepts to Practice
- **Loop Selection:** Choosing between `for...of` (for values), standard `for` (when indexes are needed), and `while` (for dynamic conditions).
- **Iteration Building:** Looping through arrays to build space-separated strings.
- **Conditional Iteration:** Counting specific characters (e.g., non-vowels, uppercase) by iterating over a string.
- **State Tracking:** Using a while loop to monitor a changing state (e.g., a fuel indicator decreasing).

## 🛠️ Essential TypeScript Structures
- **Loops:** `for (let i = 0; i < arr.length; i++)`, `for (const item of arr)`, `while (condition)`.
- **String/Regex Checkers:** `'aeiou'.includes(char)`, Regex `/^[aeiou]$/i.test(char)`.
- **Accumulators:** `let count = 0;`, `let result = "";`.

## ⚠️ CodeSignal Traps
- Infinite loops in `while` statements (forgetting to increment/decrement the counter).
- Off-by-one errors (e.g., `i <= arr.length` instead of `i < arr.length`).
- Overcomplicating standard iterations with `reduce` or `map` when a simple `for...of` handles the exit condition (`break`/`continue`) better.
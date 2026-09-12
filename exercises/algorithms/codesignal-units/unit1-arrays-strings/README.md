# Unit 1: Arrays & Strings Basics

## 🎯 Objective
Master the foundational manipulation of Arrays and Strings in TypeScript. Focus on unpacking, modifying boundaries, and basic transformations without complex nested logic.

## 🧠 Core Concepts to Practice
- **Packing/Unpacking:** Expanding arrays, adding/removing items from ends.
- **Replacement:** Swapping specific indexes or values.
- **String Boundaries:** Modifying the first and last characters of a string.
- **Immutability vs Mutability:** Knowing when to return a new array vs mutating the input.

## 🛠️ Essential TypeScript Methods
- **Arrays:** `push()`, `pop()`, `shift()`, `unshift()`, `slice()`, `splice()`, Spread Operator `[...]`.
- **Strings:** `substring()`, `slice()`, `split()`, `join()`, String Interpolation `` `${}` ``.

## ⚠️ CodeSignal Traps
- Mutating an array when the problem explicitly asks for a *new* array.
- Out-of-bounds indexing (e.g., trying to access `arr[arr.length]` instead of `arr[arr.length - 1]`).
- Forgetting that strings are immutable in TS (you cannot do `str[0] = 'a'`).
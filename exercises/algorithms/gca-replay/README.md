# GCA Replay: Airbnb Notes

## 🎯 Objective
Replay the three reconstructed GCA Airbnb patterns in TypeScript. Focus on swap within string pairs, row-wise matrix remove + pad 0, and ordered shift queries with `t % n` — under timed, Mode Harder conditions.

## 🧠 Core Concepts to Practice
- **Q1 String Pairs:** Step `i += 2`; swap within each pair `(s[i+1], s[i])`; odd tail char stays.
- **Q2 Middle Anchor:** Odd length → `mid = Math.floor(n/2)` fixed; pair-swap left and right segments separately (`abcde` → `baced`, not `badce`).
- **Q3 Block Pair Swap:** Swap `(0,1)`, then swap 2-char blocks `[2,3]` ↔ `[4,5]` (`abcdef` → `baefdc`).
- **Q4 Reverse Halves:** `s.slice(mid) + s.slice(0, mid)` — no per-char swap.
- **Q4b Pair Halves:** Same `mid` cut, then Q1 pair-swap on each half (`abcdef` → `bacedf`). Loop `i < length` + `else` cola o ímpar — não `i+1 < length` no `for`.
- **Q5 Even Then Odd:** Collect even indices, then odd indices (`abcdef` → `acebdf`).
- **Q6 Mirror Reverse:** Full reversal (`abcdef` → `fedcba`).
- **Q7 Matrix Remove + Pad 0:** Per row, remove cells equal to `value`, shift the rest left, pad with `0` up to `cols`.
- **Q8 Shift Queries `solution(a, b, queries)`:** Simulate queries in order; cyclic shift/rotation by `t` on `a` or `b`; collect answers only from reporting queries. Always `t = t % n`.

## 🛠️ Essential TypeScript Methods (Allowed)
- **Strings/Arrays (Q1):** `for (let i = 0; i < s.length; i += 2)`, char array + `push()` + `join("")`, `split("")`.
- **Matrix (Q2):** Nested `for` loops per row, write-index `write` rebuild in place, or `filter()` + pad loop until `cols`.
- **Queries (Q3):** `switch` / `if` per query `type`, modulo `t % n`, index offset `(i + t) % n`, answer array with `push()`.

## ⚠️ CodeSignal Traps
- Q1: Odd length, `""`, single char — the last char stays; strings are immutable in TS (no `str[0] = 'x'`).
- Q2: Whole row removed (all zeros); `value` absent; 1×1 matrix; forgetting to pad back to `cols`.
- Q3: Forgetting `t = t % n` when `t > n`; empty array (`n === 0`); left vs right; processing queries out of order.

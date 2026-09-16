---
name: gere-dia
description: >-
  Generates the single study-lab exercise for a calendar day from plan.md.
  Trigger when the user types /gere, Gere quarta, Gere quinta, Gere o dia,
  or "Gera o two-pointers ends da Semana 0". English problem statements only;
  no decode block; stub only.
disable-model-invocation: true
---

# /gere [dia] — Generate today's exercise from plan.md

## Trigger

`/gere`, `/gere quarta`, `Gere quarta`, `Gere o dia`, or the day's generate line from `plan.md`.

## Rules

1. **Read** `plan.md`. Use the matching `###` day (weekday name or date). If the day is still a stub ("Preenchido no `/finish`"), do **not** invent a full week — generate only what that day's **Padrão** / rascunho names. If there is no pattern yet, tell the user to `/finish` the previous day first.
2. **One** TypeScript file. Do not generate a second exercise, React, or AI lab code.
3. **English only** in the generated file: JSDoc, examples, constraints, `TODO`, terminal comment. No Portuguese in the problem doc (familiarize with GCA wording).
4. **No decode** (`How to Decode` / hints / left-right spoilers in comments).
5. **Stub only:** `TODO: Implement` and a dummy `return`.
6. **Pattern, not a memorized BCG clone:** same mechanic as the plan (e.g. two-pointers from both ends) with a clear example. Edges: `[]`, length 1, even length, odd length.
7. Place under `exercises/algorithms/gca-replay/` unless `plan.md` names another folder. Next free `qN-*.ts`.
8. After writing, print the path and `npx tsx …` only. Do not explain the algorithm.

## File template

```typescript
/**
 * Q[N] — [English title] (~[time] min)
 * Mode: [from plan] | Topic: gca-replay | Language: TypeScript
 *
 * [Clear English rules. No solution. No "use two pointers" unless the plan's
 * public pattern name is already the mechanic to practice.]
 *
 * Examples:
 * Input: (...) -> Output: ...
 *
 * Constraints: ...
 */

function solutionName(...): ... {
  // TODO: Implement
  return ...;
}

// --- Manual Test Logs ---
// Execute via terminal: npx tsx exercises/algorithms/gca-replay/qN-....ts
console.log("Test 1:", ...); // Expected: ...
```

## Wednesday Semana 0 (if that is the day)

Mechanic: build a **new** array taking from the front, then the back, then front, then back, until the input is consumed.

Canonical example: `[1, 2, 3, 4, 5]` -> `[1, 5, 2, 4, 3]`.

Do not mention `left` / `right` in the JSDoc.

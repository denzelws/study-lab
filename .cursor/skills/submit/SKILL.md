---
name: submit
description: >-
  Grade a completed CodeSignal practice exercise when the user types /submit.
  Runs tests, scores correctness/edge cases/performance/TypeScript craft, summarizes
  hints used in the session, and presents the optimal solution. After grading,
  offer /pattern (plan.md → docs/patterns/) or /hint (tactical → docs/hints.md).
  Use when the user says /submit, submit, or asks to grade an algo exercise.
disable-model-invocation: true
---

# /submit — Exercise Grading & Post-Mortem

Act as an **automated grader** for CodeSignal GCA practice. The user invokes this skill when they believe an exercise is done.

## Trigger

Activate when the user message is `/submit`, contains `/submit`, or explicitly asks to submit/grade their exercise solution.

## Before Grading

1. **Identify the exercise file** — usually the file open in the editor or the most recently discussed simulation under `exercises/simulations/` or `exercises/practice/`.
2. **Read the full solution** and the problem statement (comments at top of file).
3. **Read conversation history** for this exercise:
   - Which hints were given (Stuck / Trying / step-by-step)?
   - Which sub-steps (A/B/C) the user solved alone vs with help?
4. **Run tests** when the file has `console.log` cases:
   ```bash
   npx tsx <path-to-file>
   ```
   Compare output to `// Expected:` comments line by line.
5. **Mentally verify hidden edge cases** from the problem constraints (empty input, all filtered, limit boundaries, immutability of inputs, non-consecutive vs consecutive duplicates, etc.).

## Scoring Rubric (weights)

| Category | Weight | What to check |
| :--- | :--- | :--- |
| **Correctness** | 40% | Visible examples pass; logic matches the stated rules in order |
| **Edge Cases** | 30% | Empty arrays, single element, all removed, limit > length, no mutation of inputs |
| **Performance** | 20% | Meets stated Big-O; deduct heavily if O(n²) when O(n) is expected |
| **TypeScript Craft** | 10% | Proper typing, idiomatic built-ins (`filter`, `slice`, `Set` for lookup), no unnecessary mutation |

Deduct proportionally within each category. A perfect visible run with a subtle edge-case bug might land ~70–85%, not 100%.

## Required Response Format

Output **exactly in this order**. Do not show the optimal solution before the grade block.

### 1. Grade block (mandatory first)

```
**Final Score: [XX]%**
**Feedback:** [1–2 sentences on exactly where points were lost, or praise if clean]
**Big-O Analysis:** Time O(?) — Space O(?) [for the user's code]
```

### 2. Session recap

Short structured summary:

- **Exercise:** file name + one-line problem
- **Result:** all visible tests pass / fail (list which)
- **Approach:** how they decomposed (e.g. A→B→C) and whether it was sound
- **Hints used:** list each hint topic from the session (e.g. "Set vs filter for B", "missing return", "slice(-limit)") and mark **solo** vs **with hint**
- **Strengths:** 1–2 bullets
- **To improve:** 1–2 bullets (actionable, not generic)

### 3. Edge-case audit

Table or bullets: 3–5 hidden scenarios, whether the user's code handles each (✅ / ⚠️ / ❌), one line why.

### 4. Optimal solution

- Present a clean TypeScript solution (can be shorter than the user's if equivalent).
- Brief walkthrough tied to A/B/C or the core pattern.
- State optimal Big-O.

### 5. Log reminder (two vias)

End with **one** of these, matching the exercise origin:

- **Plan.md / Semana 0 / gca-replay day drill** (mental model):
  *"Registrar o padrão? `/pattern` → `docs/patterns/` (modelo mental). Armadilha de sintaxe avulsa? `/hint` → `docs/hints.md`. `s` neste tipo de exercício grava o pattern."*
- **Unit / sprint-final / drill tático**:
  *"Registrar a armadilha? `/hint` → `docs/hints.md`. `s` neste tipo grava o hint. Padrão de família do plano? `/pattern`."*

Do not offer only `hints.md`. Do not write the log in the grade itself.

## Rules

- **Medium/Harder integrity:** grading is allowed; do not re-teach during the grade unless the score section references a fix.
- If tests were **not run**, say so and grade from static analysis; note uncertainty.
- If the solution is **empty or clearly incomplete**, score accordingly (often 0–30%) and still show the optimal path.
- If **multiple files** were worked on, grade only the exercise the user submitted unless they specify otherwise.
- Reference project context when present: `exercises/algorithms/docs/algo-prep-context.md`.

## Example grade block

```
**Final Score: 88%**
**Feedback:** Lost 7% on Edge Cases: `collapsed === null` never triggers (should use `length === 0`). Lost 5% on TypeScript Craft: ternary without `return` was fixed but shows incomplete C-step pattern on first draft.
**Big-O Analysis:** Time O(n) — Space O(n)
```

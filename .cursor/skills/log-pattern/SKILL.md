---
name: log-pattern
description: >-
  Writes or updates a family pattern file under docs/patterns/ after a plan.md
  algorithm exercise. Trigger when the user types /pattern, /log-pattern, or
  replies s/sim/y/yes after /submit of a Semana 0 / plan.md / gca-replay day drill.
  Do not use for Unit/sprint syntax traps (those go to /hint → docs/hints.md).
disable-model-invocation: true
---

# /pattern — Log mental model (plan.md)

Use for **pattern family** notes from `plan.md` exercises. One file per family, not per `qN`.

## Trigger

`/pattern`, `/log-pattern`, or `s` / `sim` / `y` / `yes` right after `/submit` when the exercise belongs to the current `plan.md` day (typically `exercises/algorithms/gca-replay/`).

If the user says `/hint` or the exercise is Unit / sprint-final (tactical trap), use the **log-hint** skill instead. Never write the same lesson to both files.

## Do this (Agent Mode)

1. **Identify the family** from `plan.md` **Padrão** of the day and the session (e.g. two-pointers, Map/graph). Filename: `docs/patterns/<kebab-family>.md` (e.g. `two-pointers.md`).
2. **Read** that file if it exists. Update in place: refine Padrão/Estado/Armadilha/Formato; **append a row** to Casos similares; add **Evidência** path. Do not create a second file for a cousin (reverse stays in `two-pointers.md`).
3. **Write** using the template below. Short. No score, no session recap, no pep talk.
4. **Index:** upsert the kebab slug in `docs/patterns/index.json` (`{ "topics": ["two-pointers", …] }`). Create the file if missing. Do not duplicate an existing slug. Do not list `reader.html`.
5. **Do not** append this block to `docs/hints.md`.
6. Tell the user the path, that the reader sidebar reads `index.json`, and that `/finish` can point to it.

## Template (`docs/patterns/<family>.md`)

```markdown
# [Family name]

Família: [one line]. Exercícios do `plan.md` desta família atualizam **este** arquivo.

**Evidência:** `path/to/exercise.ts`

---

**Padrão**

[1–3 sentences: movement / family. Not the full code.]

**Estado**

[What you remember between iterations. Index vs value.]

**Clique:** [optional one line]

**Armadilha**

- [edge / operator / cousin mix-up]

**Formato**

[skeleton / pseudocode]

**Casos similares. Resolução**

| Enunciado (decode) | Output / diferença | Resolução |
| :--- | :--- | :--- |
| … | … | … |
```

## Rules

- One family file grows; do not split Q9 vs reverse into two markdowns.
- If the file already exists, merge — do not duplicate the five headings.
- Clique only when the session had a single unlock sentence.
- Keep `index.json` in sync: one slug per family file the reader should list.

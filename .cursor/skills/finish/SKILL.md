---
name: finish
description: >-
  Closes the current study-lab day in plan.md, logs what happened, and writes
  only the next day's routine. On Fridays, also appends the "O que eu entreguei
  de valor?" sprint block. Trigger when the user types /finish or asks to end
  today's plan and unlock tomorrow.
disable-model-invocation: true
---

# /finish — Close today, unlock tomorrow

## When

User says `/finish` or asks to encerrar o dia no `plan.md`.

## Do this in order (Agent Mode)

1. **Read** `plan.md` (project root). Identify **today** from the user or from the `###` day heading marked em curso / without Status feito.
2. **Update today**
   - Set **Status:** `feito` | `parcial` | `pulado`
   - Fill **Nota do dia:** 1–3 factual lines (what file, what pattern, stuck or not). No pep talk.
3. **Friday only** (weekday Friday, or user says é o checkpoint de valor):
   - Ask if missing: padrão que ficou / buraco / 1 evidência.
   - Append under `## Log de valor` using the template already in `plan.md`.
   - Do not skip this on Friday even if the algo session was short.
4. **Write only the next calendar day** under its `###` heading (replace the "Preenchido no `/finish`" stub):
   - Foco principal (Algo vs AI vs leve), following `plan.md` rules:
     - After an **Algo-focus** day, next day **must** include ≤30 min algo.
     - After algo, AI Step 3 outranks React; Angular stays out until Step 3 Done.
     - 1 `.ts` file max; no GCA 70 min in Semana 0.
   - Table: ação + teto.
   - **Não fazer** list (short).
   - **Status:** em curso
   - **Nota do dia:** _(vazio)_
5. Do **not** generate the exercise file unless the user also asks. Do **not** rewrite the whole week. Do **not** fill days after tomorrow.

## Tone

Direct. Organization over motivation.

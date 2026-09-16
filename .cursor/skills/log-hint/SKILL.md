---
name: log-hint
description: >-
  Extracts a tactical trap or syntax rule from the current exercise into
  docs/hints.md. Trigger when the user types /hint, /log-hint, or replies
  s/sim/y/yes after /submit of a Unit, sprint-final, or non-plan drill.
  After a plan.md / Semana 0 / gca-replay pattern exercise, use /pattern instead.
disable-model-invocation: true
---

# /hint — Tactical log (`docs/hints.md`)

When the user triggers `/hint` or `/log-hint`, extract the main **trap** (syntax, off-by-one, `.includes` direction) into `docs/hints.md`.

## Trigger

- `/hint` or `/log-hint`
- `s` / `sim` / `y` / `yes` right after `/submit` **only if** the exercise is **not** a `plan.md` pattern drill (Unit, sprint-final, mode drills).

**Do not** use this skill after a Semana 0 / `plan.md` / `gca-replay` day exercise — that is `/pattern` → `docs/patterns/<family>.md`. Never duplicate the same lesson in both places.

## Instruções de Execução (Agent Mode)

1. **Analisar o Contexto:**
   - Leia o exercício atual.
   - Leia o histórico (`/stuck`, erros do `/submit`).
   - Identifique a maior armadilha técnica, erro de sintaxe ou lacuna lógica.

2. **Formatar a Lição:** hiper-conciso. Regra mental + quando usar. Código de uma linha se precisar.

3. **Escrever:** append em `docs/hints.md` (crie se não existir). Tag `@[arquivo]`.

## Formato de Saída Obrigatório (para o hints.md)

```text
@[nome-do-arquivo-atual]

Regra mental / Padrão: [solução do erro ou padrão, ex: "Piso em 0: Math.max(n, 0)"]
Quando usar esse padrão? [ex: "Parâmetro numérico com mínimo válido: piso numa linha, sem if."]
```

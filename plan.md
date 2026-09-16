# Plano — Semana 0 (qua 16/09 → ter 22/09)

## Objetivo

Entender **padrões**, não decorar enunciados. Um padrão bem entendido resolve muitos casos.

| Prioridade | O quê | Como mede |
| :--- | :--- | :--- |
| 1 | Decode de enunciado novo (GCA/BCG) | Fecha Q1-style array em ~15 min com edges `[]`, ímpar, 1 elemento |
| 2 | AI Engineering Step 3 | Stream no terminal **ou** 1 tool loop — não os dois no mesmo dia se o algo já cansou |
| 3 | React | Só em dia leve (não qua/sex de algo pesado) |
| 4 | Angular | Fora desta semana até Step 3 ter critério Done |

**Gap desta semana (evidência BCG 15/09):** two-pointers nas pontas; Map + comando-chama-comando. Não repetir 40 variações de `abcdef`.

**Teto:** 30 min de algoritmo na maioria dos dias. Quarta 16/09: alongar só se a cabeça estiver boa; parar ao cansar.

**Ferramentas:** study-lab (1 arquivo `.ts` / sessão) + Greg Hogg (≤10 min, depois do `/submit` ou se travar) + CodeSignal **Interview Practice → Arrays** (1 problema; sem GCA 70 min nesta semana).

---

## Como usar `/gere [dia]`

No Agent mode, no dia de algoritmo:

```
/gere quarta
```

(ou `/gere quinta`, `Gere o dia`.)

O agente lê **só** o dia correspondente em `plan.md`, cria **1** arquivo `.ts` (enunciado e comentários de teste **em inglês**), stub sem solução e sem decode. Não gera a semana inteira.

---

## Depois do `/submit`: `/hint` vs `/pattern`

Duas vias. Não misturar no mesmo arquivo.

| Comando | Arquivo | O quê |
| :--- | :--- | :--- |
| `/pattern` | `docs/patterns/<família>.md` + `index.json` | Modelo mental. A sidebar do leitor lista o slug. |
| `/hint` | `docs/hints.md` | Armadilha tática (sintaxe, `.includes`, off-by-one). Units / sprint. |

`s` depois do submit: se o exercício veio do `plan.md` → `/pattern`; senão → `/hint`.

Aliases: `/log-pattern` = `/pattern`; `/log-hint` = `/hint`.

---

## Como usar `/finish`

No fim da sessão do dia (Agent mode):

```
/finish
```

O agente:

1. Marca o dia de hoje em `plan.md` (feito / parcial / pulado + 1 linha do que rolou).
2. Anexa o dia seguinte com rotina **fechada** (foco, teto, comando, o que não fazer).
3. **Sexta:** pede e anexa o bloco **Valor da sprint** (abaixo).

Não gera a semana inteira de novo. Só o **próximo dia**. Isso corta ansiedade: o amanhã só existe depois do `/finish` de hoje.

---

## Valor da sprint (toda sexta)

Pergunta para si: **"O que eu entreguei de valor?"** (para você, não para o Agent).

Anexar em `## Log de valor` no fim deste arquivo, neste formato:

```
### Sexta YYYY-MM-DD

- Padrão que ficou: …
- O que ainda é buraco: …
- 1 evidência (arquivo, teste, ou frase que você explica sem olhar): …
```

Sexta 19/09 é a primeira entrega deste ciclo.

---

## Dias

### Qua 16/09 — FOCO: Algoritmo

**Padrão:** two-pointers ends (left no início, right no fim; alterna quem entra; para quando se cruzam).

| # | Ação | Teto |
| :--- | :--- | :--- |
| 1 | Papel: Padrão? Estado? Armadilha? | 2 min |
| 2 | `/gere quarta` (ou `Gere quarta`) | 1 arquivo, enunciado **em inglês**, sem decode, sem solução |
| 3 | Implementa → `/stuck` se precisar → `/submit` | 20–40 min |
| 4 | Cansou? **Para.** Dia válido. | — |

**Opcional (um só, depois do submit):** Greg Hogg two-pointers ≤10 min **ou** 1 problema Interview Practice → Arrays (15–20 min).

**Não fazer:** GCA 70 min, React, Angular, AI lab, segundo `.ts`, NeetCode.

**Status:** em curso  
**Nota do dia:** _(preencher no `/finish`)_

---

### Qui 17/09 — FOCO: AI (+ algo obrigatório)

Preenchido no `/finish` de quarta. Rascunho até lá:

- ≤30 min algo (variação two-pointers **ou** 1 Arrays no CodeSignal, não os dois)
- Bloco principal: Step 3 `~/dev/ollama-toolcall-lab` (stream **ou** tool loop)

---

### Sex 18/09 — FOCO: Algoritmo + valor da sprint

Preenchido no `/finish` de quinta. Rascunho:

- Map + dependência (comando chama comando) **ou** hashing fácil no CodeSignal
- **Obrigatório:** bloco Valor da sprint (sexta = fim de sprint desta semana; se a sexta for 18/09, anexar mesmo assim — ciclo qua–ter usa sexta como checkpoint)

---

### Sáb 19/09 → Ter 22/09

Rotina do dia só depois do `/finish` do dia anterior. Não antecipar.

---

## Log de valor

_(vazio até a primeira sexta `/finish`)_

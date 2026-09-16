# GCA Airbnb — Notas de Padrões (Post-Mortem)

> **Aviso:** reconstrução a partir de memória pós-prova — **não** é o enunciado oficial da Airbnb/CodeSignal.
>
> Ligado a: [CONTEXT.md](../CONTEXT.md) (prompts do study-lab) e [exercises/algorithms/docs/algo-prep-context.md](../exercises/algorithms/docs/algo-prep-context.md) (estrutura GCA + grading).

## Contexto

| Campo | Valor |
| :--- | :--- |
| Avaliação | CodeSignal **GCA**, 70 min, 4 questões |
| Linguagem | TypeScript |
| Papel | Automation Engineer / Quality Engineering — Airbnb |
| Resultado | Abaixo do esperado; **Q1 mais próxima — 2 testes passaram** |

A lógica da Q1 estava parcialmente certa. Os hidden tests provavelmente caíram em **edge cases** (ímpar, vazio, 1 char) e em velocidade de execução sob pressão — não em “não saber o padrão”.

---

## 1. Visão geral do exame

| Slot | Tema (memória) | Padrão provável | Tempo típico |
| :--- | :--- | :--- | :--- |
| **Q1** | Rearrange string by pairs (`abcdef`) | Strings + índice em pares | ~10 min |
| **Q2** | Matrix remove values | Matriz 2D + mutação/filtro por linha | ~10 min |
| **Q3** | t-shift — `solution(a, b, queries)` | Simulação de queries + rotação | ~20 min |
| **Q4** | *(não lembrado)* | Trees, sliding window, etc. | ~30 min |

---

## 2. Q1 — Rearrange string by pairs

**Exemplo:** `"abcdef"`

**Padrão reconstruído:** dividir em pares `(ab), (cd), (ef)` e **trocar dentro de cada par** → `"badcfe"`.

### Framework mental (3 passos)

1. **Padrão?** Loop `i += 2`; cada par vira `(s[i+1], s[i])`.
2. **Estado?** Array de chars (ou string builder); não mutar a string original no TS.
3. **Armadilha?** Comprimento ímpar, `""`, um caractere — o último char **fica**.

### Exemplos

| Input | Output |
| :--- | :--- |
| `"abcdef"` | `"badcfe"` |
| `"abcde"` | `"badce"` |
| `"ab"` | `"ba"` |
| `"a"` | `"a"` |
| `""` | `""` |

**Big-O alvo:** O(n) tempo, O(n) espaço (resultado).

### [A CONFIRMAR]

Se o enunciado real era outro — por exemplo **inverter a ordem dos pares** (`"abcdef"` → `"efcdab"`) em vez de trocar *dentro* do par — atualizar esta seção. O exemplo `abcdef` sozinho não fecha 100% a regra.

---

## 3. Q2 — Matrix remove values

**Padrão reconstruído:** remover células iguais a `value` **por linha**, deslocar o restante à esquerda, **preencher com `0`**.

**Exemplo:**

```text
[[1, 2, 3], [4, 2, 5]], value = 2
→ [[1, 3, 0], [4, 5, 0]]
```

### Framework mental (3 passos)

1. **Padrão?** Loop por linha (e colunas); rebuild ou write-index na própria linha.
2. **Estado?** Índice de escrita `write` ou array filtrado + pad até `cols`.
3. **Armadilha?** Linha toda removida (só zeros); `value` ausente; matriz 1×1.

**Big-O alvo:** O(rows × cols) tempo; O(1) extra se in-place por linha.

Treinar primeiro com **loops aninhados** (sem `.filter`) — é o que a prova costuma esperar sob pressão.

---

## 4. Q3 — t-shift — `solution(a, b, queries)`

**Assinatura:** `function solution(a, b, queries)`

**Padrão reconstruído:** dois arrays + lista de queries processadas **em ordem**. Cada query aplica um **shift/rotação cíclica por `t`** em `a` ou `b`, ou pede um valor de retorno (soma, primeiro elemento, etc.).

### Framework mental (3 passos)

1. **Padrão?** Simulação: `switch` / `if` por `type` da query.
2. **Estado?** Arrays `a` e `b`; acumular respostas só das queries que **retornam** valor.
3. **Armadilha?** Sempre `t = t % n`; arrays vazios; left vs right; processar fora de ordem.

**Big-O:** depende da implementação. Rotação ingênua por query é O(n) cada; offset de índice (`(i + t) % n`) evita copiar o array a cada query.

---

## 5. Weak points (prioridade de treino)

| Prioridade | Ponto fraco | Sinal na prova | O que treinar |
| :--- | :--- | :--- | :--- |
| **1** | Strings + pares + ímpar | Q1, 2 testes OK | swap em pares, tail ímpar |
| **2** | Edge cases | hidden tests Q1 | `""`, len 1, odd length |
| **3** | Mutação de matriz | Q2 | filter/shift/pad por linha |
| **4** | Query simulation | Q3 | rotate + processar em ordem |
| **5** | Pressão de tempo | treino ≠ prova | sims cronometradas, Mode Harder |
| **6** | Gap treino ↔ prova | wording novo | decodificar em 3 passos **antes** de codar |

---

## 6. Drills mapeados (A / B / C)

Pastas **sugeridas** — ainda não criadas. Usar `/codesignal` ou starter manual quando for treinar.

### Drill A — String pairs (Q1 replay)

**Enunciado:** trocar caracteres nas posições `(0,1), (2,3), …`. Comprimento ímpar: último char inalterado.

**Edges:** `""`, `"a"`, `"ab"`, `"abc"`, `"abcdef"`.

**Pasta:** `exercises/algorithms/gca-replay/q1-string-pairs/`

### Drill B — Matrix remove + pad 0 (Q2 replay)

**Enunciado:** por linha, remover `value`, shift esquerda, pad `0`.

**Edges:** linha toda zeros; value ausente; 1×1.

**Pasta:** `exercises/algorithms/gca-replay/q2-matrix-remove/`

### Drill C — Shift queries (Q3 replay)

**Enunciado:** `solution(a, b, queries)` — rotacionar `a` ou `b` por `t`; coletar respostas das queries de relatório.

**Edges:** `t > n` (`t % n`); `n === 0`; ordem das queries.

**Pasta:** `exercises/algorithms/gca-replay/q3-shift-queries/`

---

## 7. Rotação semanal de treino (manhã)

Algo **todo dia de manhã** (e redo opcional à noite). O pilar do dia (React, Python, AWS) fica no meio — não substitui o algo.

| Dia | Foco manhã |
| :--- | :--- |
| Seg | Strings / pares (Q1) |
| Ter | Two-pointer / in-place |
| Qua | Matrix row ops (Q2) |
| Qui | Query simulation / rotate (Q3) |
| Sex | Mini-GCA cronometrado (~25 min) |
| Sáb | Tópico mais fraco da semana |
| Dom | Off ou revisão 15 min |

`roadmap/DAILY-RHYTHM.md` ainda não existe neste repo — criar quando for formalizar o ritmo diário (manhã algo / pilar / noite redo).

---

## 8. Nota de mindset

Uma GCA mede **execução cronometrada em problemas novos**, não o retrato inteiro de um Automation Engineer. Dois testes na Q1 significam: a estrutura estava no caminho certo. O gap é **edge cases + velocidade**, não identidade (“não sou capaz”). O treino colaborativo aqui não replica o relógio da prova — Mode Harder e `/submit` fecham essa camada.

---

## 9. Prompts Cursor (copy-paste)

### Treinar Drill A / B / C — Mode Easy

```text
@roadmap/GCA-AIRBNB-NOTES.md

Mode: Easy.
Gera o Drill [A|B|C] (enunciado + exemplos + constraints + 💡 How to Decode).
Cria o starter em exercises/algorithms/gca-replay/... com assinatura vazia e console.log dos exemplos.
Não mostre a solução.
```

### `/submit` — grading

Usar a skill [`.cursor/skills/submit`](../.cursor/skills/submit/SKILL.md). Rubrica:

| Pilar | Peso |
| :--- | :--- |
| Correctness | 40% |
| Edge cases | 30% |
| Performance (Big-O) | 20% |
| TypeScript craft | 10% |

Score 0–100% **antes** da solução ótima.

### Gerar lote alinhado ao syllabus

Skill [`.cursor/skills/codesignal`](../.cursor/skills/codesignal/SKILL.md) — gerar desafios TS calibrados ao unit atual, sem alucinar enunciado.

### Stuck

Skill [`.cursor/skills/stuck`](../.cursor/skills/stuck/SKILL.md) — dry-run e hints, sem revelar a resposta.

# Unit 1 — Review Notes (pontos fracos)

> Gerado após completar Q1–Q10. Foco do aluno: **Q8, Q9 — parâmetros variáveis
> e conceitos de piso (floor) e teto (ceiling) com `Math.max` / `Math.min`.**

## 1. O padrão clamp (o que travou em Q8/Q9)

Quando um número precisa caber num intervalo `[MIN, MAX]`:

```ts
const clamped = Math.min(Math.max(valor, MIN), MAX)
```

| Parte | Papel | Q8 | Q9 |
| :--- | :--- | :--- | :--- |
| `Math.max(v, MIN)` | **piso** — nada abaixo de MIN | `Math.max(n, 0)`, `Math.max(m, 0)` | `Math.max(index, 0)` |
| `Math.min(..., MAX)` | **teto** — nada acima de MAX | (não havia teto; o teto era `length` na checagem) | `Math.min(..., line.length)` |

Regra de ouro do Q8: **depois de normalizar, use SÓ as variáveis
normalizadas** (`heads`/`tails`), nunca os parâmetros brutos (`n`/`m`).
O bug do Q8 foi exatamente esse (`n + m` vs `heads + tails`).

## 2. `slice` com parâmetros variáveis (Q2 → Q8, Q9)

| Forma | Significado | Onde |
| :--- | :--- | :--- |
| `slice(1, -1)` | miolo fixo: do 2º até antes do último | Q2 |
| `slice(n, length - m)` | miolo variável; evita o trap `slice(n, -0)` | Q8 |
| `slice(0, pos)` + `slice(pos)` | parte antes / depois da posição | Q9 |

Lembretes:
- Início **inclusivo**, fim **exclusivo**; negativo conta do fim.
- `-0 === 0`, então `slice(n, -0)` = `slice(n, 0)` = `[]` — por isso o Q8 usa `length - m`.
- `slice` nunca muta; `splice` muta (não usar nos inputs).

## 3. Checklist antes do `/submit` (nasceu dos erros reais)

- [ ] Inputs mutados? (`splice`, `push` no original, `arr[i] =` no input)
- [ ] Usei parâmetro bruto onde já existe variável normalizada?
- [ ] Índice `length` em vez de `length - 1`?
- [ ] `slice` com fim negativo quando o parâmetro pode ser 0?
- [ ] `return` do `slice`/`join` aproveitado (eles devolvem novo, não mutam)?
- [ ] `console.log` de debug removidos?
- [ ] `noUncheckedIndexedAccess`: acesso por índice precisa de guarda + `!` ou checagem de `undefined`?

## 4. Para praticar mais (próxima sessão)

1. **Clamp drill:** `clampVolume(v)` em `[0, 100]`, `clampPage(p, total)` em `[1, total]` — ver `exercises/practice/clamp-insert-lab.ts`.
2. **Slice drill:** reescrever Q8 com `slice(n, -m)` + ramo `m === 0` separado, comparar com a versão `length - m`.
3. **Re-fazer Q8/Q9 sem olhar**, cronometrado (~10 min cada) — alvo: acertar de primeira o uso de `heads`/`tails` e `pos`.
4. **Unit 2 (loops):** o clamp reaparece em paginação/offset com loop — levar o padrão junto.

## Histórico de notas Unit 1

| Q | Nota | O que custou ponto |
| :--- | :--- | :--- |
| Q1 | 100% | — |
| Q2 | 100% | — |
| Q3 | 100% | — |
| Q4 | 98% | `console.log` de debug restantes |
| Q5 | 100% | — |
| Q6 | 100% | — |
| Q7 | 100% | — |
| Q8 | 92% | `n + m` brutos na checagem em vez de `heads + tails` |
| Q9 | 100% | — |
| Q10 | 100% | — |

# Unit 2 — Review Notes (Q6–Q10)

> Gerado após completar Q1–Q10. Foco do aluno: **erros recorrentes em `.includes`,
> separador em loop (valor vs posição), e condição `>=` vs `>` em `while`.**

---

## Erros que mais repetiram (Q6 → Q10)

| # | Erro | Onde apareceu | Correção |
| :--- | :--- | :--- | :--- |
| 1 | **`.includes()` invertido** — o item pergunta sobre a lista | Q6, Q10 | A **lista** chama `.includes(item)` |
| 2 | **Checar string inteira** em vez de um char/posição | Q6, Q10 | Passe só o pedaço: `char` ou `tag[0]!` |
| 3 | **Valor do input** em vez de **estado do loop** | Q9 (revisão Q2) | `let first = true` (não `arr[0]` nem só `result === ""`) |
| 4 | **`>` em vez de `>=`** quando “ainda dá para executar 1 vez” | Q5, Q8 | `fuel >= burn`, `size >= threshold` |
| 5 | **`for...of` quando o output é índice** | Q7 | `for (let i = 0; ...)` + `return i` |

---

## Q6 — Strip Vowels

**O que travou:** `char.includes('aeiouAEIOU')` — um char nunca contém 10 letras, então **tudo passava** (inclusive vogais).

```ts
// ❌ Errado — "e" não contém "aeiouAEIOU" → !false → cola o "e"
if (!char.includes('aeiouAEIOU')) result += char

// ✅ Certo — a lista pergunta sobre o char
const vowel = 'aeiouAEIOU'
if (!vowel.includes(char)) result += char
```

**Exemplo que quebra:**

| `char` | `char.includes(vowel)` | Cola? (errado) | `vowel.includes(char)` | Cola? (certo) |
| :--- | :--- | :--- | :--- | :--- |
| `h` | false | ✅ sim | false | ✅ sim |
| `e` | false | ✅ sim ❌ | true | ❌ não |
| `o` | false | ✅ sim ❌ | true | ❌ não |

**Hábito adotado:** criar `const vowel = '...'` antes do loop.

---

## Q7 — First Uppercase Index

**O que travou:** loop vazio — não sabia o que fazer dentro do `for` com índice.

**Padrão:** busca com **early return** (diferente do Q1, que conta tudo).

```ts
for (let i = 0; i < text.length; i++) {
  const char = text[i]!
  if (char === char.toUpperCase() && char !== char.toLowerCase()) {
    return i   // achou → para e devolve posição
  }
}
return -1      // percorreu tudo sem achado
```

**Quando usar `for` com índice vs `for...of`:**

| Precisa de | Loop |
| :--- | :--- |
| Só o valor | `for...of` |
| Posição / índice / parar no 1º match | `for (let i = 0; ...)` |

**Teste de mesa — `("abCd")` → `2`:**

| `i` | `text[i]` | Maiúscula? | Ação |
| :--- | :--- | :--- | :--- |
| 0 | `a` | não | continua |
| 1 | `b` | não | continua |
| 2 | `C` | sim | `return 2` ✅ |

---

## Q8 — Halve Until Below

**Nota:** 100% de primeira — mas a dúvida `>` vs `>=` vale guardar (mesma família do Q5).

```ts
// ❌ Errado — (9, 3) para em size=3 sem halvar → retorna 2
while (size > threshold) { ... }

// ✅ Certo — (9, 3) halva 9→6→3→0 → retorna 3
while (size >= threshold) {
  size = Math.floor(size / 2)
  days++
}
```

**Regra mental:** `>=` = “ainda tenho combustível/tamanho **suficiente** para 1 ciclo completo”. Quando `size === threshold`, ainda roda **uma** vez e zera.

**Teste de mesa — `(9, 3)`:**

| Volta | `size` antes | `>= 3`? | `size` depois | `days` |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 9 | ✅ | 4 | 1 |
| 2 | 4 | ✅ | 2 | 2 |
| 3 | 3 | ✅ | 1 | 3 |
| 4 | 1 | ❌ para | — | **3** |

---

## Q9 — Build Dashed Path

**O que travou (1ª versão):** `s === stops[0]` — compara **valor**, não **posição**.

```ts
// ❌ Errado — ["a", "a", "b"] → "aab"
if (s === stops[0]) result += s
else result += "-" + s

// ⚠️ Parcial — ["a", "a", "b"] ok, mas ["", "b"] → "b" (deveria "-b")
if (result === "") result += s
else result += "-" + s

// ✅ Certo — flag booleana (robusto para parada "")
let first = true
for (const s of stops) {
  if (!first) result += "-"
  result += s
  first = false
}
```

**⚠️ `result === ""` falha se parada for `""`:** `result += ""` não muda o acumulador → próxima volta acha que ainda é a 1ª (`["", "b"]` → `"b"` ❌).

**⚠️ VALOR ≠ POSIÇÃO (revisão Q2):**

| Pergunta que você quer | Pergunta que `s === stops[0]` faz |
| :--- | :--- |
| “Estou na **1ª volta**?” | “Este item tem o **mesmo valor** que o primeiro?” |

**Exemplo `["a", "a", "b"]` com `s === stops[0]`:**

| Volta | `s` | `=== stops[0]`? | `result` |
| :--- | :--- | :--- | :--- |
| 1 | `a` | ✅ (1ª vez ok) | `a` |
| 2 | `a` | ✅ de novo! ❌ | `aa` |
| 3 | `b` | ❌ | `aa-b` |

**Nota do submit:** 88% na 1ª tentativa (`s === stops[0]`) → `result === ""` passou nos testes visíveis → corrigido para `first` flag (edge case `""`).

---

## Q10 — Count Long Capitalized Tags (capstone)

**O que travou:** `letters.includes(tag)` — procura a **tag inteira** dentro de `"ABC...Z"`.

```ts
// ❌ Errado — só "Z" (1 char) passa; "API", "Go" falham
if (tag.length >= minLen && letters.includes(tag)) count++

// ✅ Certo — checa só o primeiro char
if (tag.length >= minLen && letters.includes(tag[0]!)) count++
```

**Por que `"API"` falha com `includes(tag)`:**

```
"ABCDEFG...Z".includes("API")  → false  (não tem A+P+I em sequência)
"ABCDEFG...Z".includes("A")    → true   (tem "A")
```

**Dupla condição = `&&` (as DUAS precisam ser true):**

| `tag` | `length >= minLen` | `letters.includes(tag[0]!)` | Conta? |
| :--- | :--- | :--- | :--- |
| `API`, minLen=2 | ✅ | ✅ (`A`) | ✅ |
| `web`, minLen=2 | ✅ | ❌ (`w`) | ❌ |
| `Go`, minLen=2 | ✅ | ✅ (`G`) | ✅ |
| `a`, minLen=2 | ❌ | — | ❌ |

**Conexão Q6 → Q10:** mesma regra — lista pergunta sobre o **pedaço certo** (`char` ou `tag[0]`), nunca a string inteira.

---

## Checklist antes do `/submit` (Unit 2)

- [ ] `.includes`: a **lista** está à esquerda? (`vowel.includes(char)`, não o contrário)
- [ ] Checo **um char** (`tag[0]!`) ou a **string inteira** por engano?
- [ ] Separador em loop: uso **flag `first`** (Q9) ou `result === ""` (Q2 ok se item nunca é `""`) — nunca `arr[0]`?
- [ ] `while`: usei `>=` quando “ainda cabe 1 ciclo completo”?
- [ ] `while`: atualizo o estado dentro do loop? (`fuel -= burn`, `size = Math.floor(size/2)`)
- [ ] Preciso de **índice**? Usei `for` com `i`, não só `for...of`?
- [ ] Múltiplas condições: `&&` (E) vs `||` (OU) — qual o enunciado pede?
- [ ] `console.log` de debug removidos?

---

## Para praticar mais

1. **Includes drill:** reescrever Q6 e Q10 sem olhar — foco em `lista.includes(item)` e `tag[0]!`.
2. **Separador drill:** Q2 + Q9 lado a lado com `result === ""` e com `let first = true` (flag do enunciário Q9).
3. **While drill:** Q5 + Q8 cronometrados (~10 min) — treinar `>=` e atualização de estado.
4. **Busca vs contagem:** Q1 (conta tudo) vs Q7 (para no 1º) — mesmo teste de maiúscula, objetivo diferente.
5. **Edge case consciente:** rodar mentalmente `["a","a","b"]` e `letters.includes("API")` antes de cada submit.

---

## Histórico de notas Unit 2

| Q | Nota | O que custou ponto / onde travou |
| :--- | :--- | :--- |
| Q1 | 100% | `/stuck` — trap `toUpperCase` em não-letras |
| Q2 | 100% | `/stuck` — `words[2]` vs `result === ""` |
| Q3 | 100% | `/stuck` — `&&` único + onde colocar `count++` |
| Q4 | 100% | — |
| Q5 | 100% | Dúvida depois: `>=` vs `>` (entendeu) |
| Q6 | 100% | `/stuck` — `.includes` invertido |
| Q7 | 100% | `/stuck` — corpo do `for` com índice |
| Q8 | 100% | — |
| Q9 | 88% → 100% | `s === stops[0]` (valor ≠ posição); corrigido após submit |
| Q10 | 100% | `/stuck` — `letters.includes(tag)` vs `tag[0]!` |

**Padrão geral:** acertou a estrutura (loop + acumulador) na maioria; os pontos perdidos foram **detalhe de condição** (direção do `.includes`, valor vs posição, `>=`).

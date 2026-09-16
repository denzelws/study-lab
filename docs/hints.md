**@q1-unit2-loops**

Regra mental / Padrão: "É maiúscula?" sem regex = `ch === ch.toUpperCase() && ch !== ch.toLowerCase()`. A 1ª checagem sozinha passa para dígitos/espaços/símbolos, porque `toUpperCase()` de não-letra é identidade (`"1" → "1"`).
Quando usar esse padrão? Sempre que precisar testar "é letra maiúscula A–Z?" sem regex: a 1ª condição garante forma maiúscula, a 2ª garante que é letra (tem minúscula diferente).

**@q2-unit2-loops**

Regra mental / Padrão: Separador em loop = pergunta sobre o ESTADO do acumulador (`result === ""` só é true na 1ª volta), nunca sobre o input (`words[2]` decide igual para todas as voltas). 1ª palavra cola pura, demais colam `" " + palavra`.

⚠️ VALOR ≠ POSIÇÃO: `s === arr[0]` pergunta "este item tem o mesmo VALOR que o primeiro?" — NÃO "estou na 1ª volta?". Se o valor se repete, quebra (ver Q9).

Quando usar esse padrão? Sempre que montar string com separador em loop (espaço, `-`, `" > "`): separador ANTES a partir do 2º item — nunca depois de cada item (sobra no fim).

**@q3-unit2-loops**

Regra mental / Padrão: "É letra?" sem regex = `lower === upper` significa NÃO é letra (só letra muda de caixa: `"h"→"H"`, mas `"3"→"3"`). Filtros em loop = dois `continue` separados (1º não-letra, 2º vogal via `'aeiou'.includes(lower)`), `count++` só depois dos dois. Um `&&` único (`includes && é-minúscula && é-letra`) quebra em maiúsculas e conta dígito/símbolo.
Quando usar esse padrão? Sempre que contar/filtrar letras com `for...of` sem regex: 1º `if (lower === upper) continue`, 2º `if ('aeiou'.includes(lower)) continue` — o que sobrar é consoante.

**@q4-unit2-loops**

Regra mental / Padrão: Índices pares (0, 2, 4...) = `for (let i = 0; i < arr.length; i += 2)` + `sum += arr[i]!`. Salto direto no acumulador do `for` — mais limpo que `i++` com `if (i % 2 === 0)`. Limite é `< length`, nunca `<=` (off-by-one lê `undefined`).
Quando usar esse padrão? Sempre que processar só posições pares/ímpares ou fatiar em chunks fixos: `i += 2` para pares, `i += chunkSize` para lotes.

**@q6-unit2-loops**

*Lista pergunta sobre o CHAR*
Regra mental / Padrão: Checar se char está numa lista = `vowel.includes(char)` 

NUNCA `char.includes(vowel)` (um char nunca contém 10 letras — tudo passa, inclusive vogais). 
Hábito: `const vowel = 'aeiouAEIOU'` antes do loop + `if (!vowel.includes(char)) result += char`.


Quando usar esse padrão? Sempre que filtrar/colocar chars por pertencimento a um conjunto fixo (vogais, dígitos, símbolos): a string-lista chama `.includes(item)`.

**@q7-unit2-loops**

*Padrão: Busca da primeira ocorrência*
Regra mental 
`for (let i = 0; i < text.length; i++)` + teste no `text[i]!` + `return i` na hora (early return). 
Não precisa de `for...of` — você precisa do índice. 

Se o loop acabar sem achado → `return -1`.

Quando usar esse padrão? Sempre que o output é a posição (índice) do primeiro item que bate uma condição — contar (Q1) percorre tudo; buscar (Q7) para no primeiro match.

**@q8-unit2-loops**

*Padrão: while rastreando estado que muda*
Regra mental: `while (size >= threshold)` — `>=` porque "abaixo de" só vale DEPOIS de halvar (ex: `(8,8)` e `(1,1)` precisam de 1 dia). Dentro: `size = Math.floor(size / 2)` + `days++`. Se já começa abaixo → loop nem roda → `0`.
Quando usar esse padrão? Sempre que contar passos até um valor cruzar um limite (metade, subtração, dobra): `while` + atualiza estado + contador — igual Q5 (fuel), mas dividindo em vez de subtrair.

**@q9-unit2-loops**

*Padrão: Separador com flag (revisão Q2)*

⚠️ IMPORTANTE — VALOR ≠ POSIÇÃO:
- Você quer saber: "estou na **1ª iteração**?"
- `s === stops[0]` pergunta: "este item tem o **mesmo valor** que o primeiro?"
- São coisas diferentes! Se o valor se repete, o 2º item com mesmo valor passa sem separador.

Exemplo `["a", "a", "b"]` com `s === stops[0]`:
- Volta 1: `s="a"` → igual a `stops[0]` → cola sem `-` → `"a"`
- Volta 2: `s="a"` → igual a `stops[0]` de novo! → cola sem `-` → `"aab"` ❌ (esperado: `"a-a-b"`)

Correto: `let first = true` (flag) — pergunta sobre POSIÇÃO/ESTADO, nunca valor do input. `result === ""` funciona no Q2 mas falha no Q9 se parada for `""` (`result += ""` não avança o estado).

Quando usar esse padrão? Q2 (espaço), Q9 (`-`), datas (`2024-09-12`): separador ANTES a partir do 2º item.

**@q10-unit2-loops**

*Padrão: Dupla condição + `.includes` no char certo (revisão Q6)*

⚠️ `.includes` checa um PEDAÇO dentro de uma string maior:
- ❌ `letters.includes(tag)` — procura a tag INTEIRA dentro de `"ABC...Z"` (`"API"` nunca acha, só `"Z"` passa)
- ✅ `letters.includes(tag[0]!)` — checa só o PRIMEIRO char (`"A"` de `"API"` acha)

Duas condições = `&&` (as DUAS precisam ser true): `tag.length >= minLen && letters.includes(tag[0]!)`. `||` contaria tag longa sem maiúscula.

Quando usar esse padrão? Capstone: loop + acumulador + múltiplos filtros por item. Mesma regra do Q6: lista pergunta sobre o item — mas passe só o char/posição que importa (`tag[0]`), não a string inteira.

**@q1-sprint-final**

*Padrão: Filtrar pelo 1º elemento + join com flag (Q6 + Q9)*

Regra mental / Padrão: Bloquear por 1º elemento = `part.length > 0 && blocked.includes(part[0]!)` + `continue`. Nunca `part[0] === blocked` — compara 1 elemento com a string INTEIRA (`"A" === "ABC...Z"` sempre false). `""` não bloqueia: sem 1º elemento, o guard `length > 0` deixa passar.

Join dos keepers: `let first = true` **antes** do `for` — `if (!first) result += "/"` + `result += part` + `first = false`. Nunca `result += "/" + part` em todo keeper (sobra `/` no início) nem `let first` dentro do loop (reseta cada volta).

Quando usar esse padrão? Filtrar items de array por 1º elemento de uma lista bloqueada e colar o resto com separador: lista `.includes(char)`, flag de posição fora do loop, guard para string vazia.

**@q4-sprint-final**

*Padrão: while com estado que muda + guard anti-loop (Q5/Q8)*

Regra mental / Padrão: `while (bytes >= minimum)` — `>=` porque no valor exato ainda roda 1 ciclo antes de cair abaixo (`(30,10,10)` → 3 dias com `>=`, 2 com `>`). Dentro: atualiza estado (`bytes -= loss`) + contador (`days++`).

⚠️ Guard `loss <= 0` → `return 0` **antes** do `while`, nunca `if (loss > 0)` só dentro do loop. Se `loss === 0`, `bytes` não muda mas `bytes >= minimum` continua true → loop infinito (`(50, 0, 1)`).

Quando usar esse padrão? Contar ciclos/passos até cruzar um limite com `while`: `>=` no limite, atualiza estado dentro, e qualquer parâmetro que pode zerar o progresso (`burn`, `loss`) ganha early return no topo.

**@q8-sprint-final / @q10-sprint-final**

*Padrão: piso + variáveis clampadas (Unit 1 Q8)*

Regra mental / Padrão: `const heads = Math.max(left, 0)` — piso. Depois **toda** conta usa `heads`/`tails`, nunca o parâmetro cru. `if (prefix + suffix >= length)` quebra quando um lado é negativo (`"ABCD", -2, 5` deveria `""`).

Quando usar esse padrão? Drop do início e do fim (array ou string): `Math.max(x, 0)` + `slice(heads, length - tails)` se `heads + tails < length`.

**@q11-sprint-final**

*Padrão: clamp [MIN, MAX] — piso E teto*

Regra mental / Padrão: `const pos = Math.min(Math.max(index, 0), queue.length)`. `Math.min(index, length)` só teto: `-3` continua `-3`. `slice(0, -1)` **não** é “começar do 0” — corta do **fim**. Testes visíveis podem passar; `index = -1` quebra.

Insert imutável: `slice(0, pos)` + ticket + `slice(pos)` — nunca `splice` no input.

Quando usar esse padrão? Índice/posição com mínimo e máximo (insert, página, volume): primeiro `Math.max` (piso), depois `Math.min` (teto). Use só `pos`.

**@q12-sprint-final**

*Padrão: Set — presença, não contagem*

Regra mental / Padrão: `seen.has(id)` → já viu → `return id` (o **valor**, não um `count++`). Senão `seen.add(id)`. Loop acaba → `return -1` (vazio / todos únicos). `-1` é fallback **depois** do `for`, não condição no item.

Quando usar esse padrão? “Primeiro que se repete / já apareceu?” — `Set`. “Quantas vezes?” — `Map`.

**@q13-sprint-final**

*Padrão: Map de frequência + 2º loop sem early return*

Regra mental / Padrão: `freq.set(id, (freq.get(id) ?? 0) + 1)` no 1º `for`. 2º `for` nos valores: `if (times >= 2) count++` — **nunca** `else return count`. Map itera em ordem de inserção: um único no meio/início (`[303, 101, 101]`) dispara o `else` cedo e zera o score nos hidden.

Quando usar esse padrão? Contar distintos com frequência `>= 2` ou `=== 1`: dois passes, `return count` só no fim.

**@q3-block-pair-swap**

*Padrão: loop vs índices fixos + `+=`*

Regra mental / Padrão: A regra **se move** pela string (“cada par”) → loop `i += 2` (Q1/Q2). A regra **aponta** (“posições 0 e 1, depois [2,3] ↔ [4,5]”) → `if` por `n` + `s[4]! + s[5]! + s[2]! + s[3]!`. Não reutilizar o loop Q1 no Q3.

`result + x` calcula e **descarta**. Sempre `result += x`. Guard `n <= 1 return s`. Não esquecer `n === 3` → cola `s[2]`.

Quando usar esse padrão? Enunciado cita índices concretos: Passo 1 nos dois primeiros, Passo 2 conforme tamanho — concatenação pontual, não varrer tudo.

**@q4-reverse-halves**

*Padrão: slice = pedaço contínuo*

Regra mental / Padrão: `mid` aqui é **tesoura**, não âncora (Q2). Nada se repete → sem `for`. `s.slice(mid) + s.slice(0, mid)` = direita + esquerda. `slice(start, end)` — `end` não entra.

Loop = regra repetida. Índices literais = regra aponta. `slice` = “deste índice até aquele, conteúdo intacto”.

Quando usar esse padrão? “Divida no meio / pegue o prefixo / junte dois trechos sem mexer nos chars”.

**@q4b-pair-halves**

*Padrão: Q1 em cada metade + guarda no if, não no for*

Regra mental / Padrão: `slice` corta; Q1 (`i += 2`) só **depois**, em cada pedaço. `for (i + 1 < length)` **pula** o ímpar. Correto: `for (i < length)` + `if (par) troca else cola s[i]`. Não faça `result += originais` e depois os loops (cola duas vezes).

Quando usar esse padrão? “Corte, **depois** aplique a mesma regra em cada segmento”.

**@q6-mirror-reverse**

*Padrão: espelho = loop de trás para frente*

Regra mental / Padrão: Q4 `slice` só **corta**. Q6 a regra **se move**: cada `i` vai para `n - 1 - i`. Equivale a `for (let i = s.length - 1; i >= 0; i--) result += s[i]`. `""` / `"a"` caem sozinhos.

Atalho na prova: `s.split("").reverse().join("")`. String **não** tem `.reverse()`.

Quando usar esse padrão? “Inverta a string / ordem inversa / palíndromo de construção”.

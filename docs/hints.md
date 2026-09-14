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

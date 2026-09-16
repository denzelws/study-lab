# Two pointers (pontas)

Família: dois índices convergindo

**Evidência:** `exercises/algorithms/gca-replay/q9-two-pointers-ends.ts`

---

**Padrão**

Dois índices nas pontas: `left` no início, `right` no fim. Cada volta **consome** um elemento — empurra no `result` e move **só** o ponteiro usado. O enunciado (o **output**) decide se você alterna os lados, só recua o `right`, ou compara os dois.

**Estado**

O que lembrar entre voltas: `left`, `right`, `result`, e (se zig-zag) `fromLeft`. `left`/`right` marcam o **próximo índice a ler**, não o valor que acabou de entrar no `result`. Depois do `push`, `left++` ou `right--`.

**Clique:** ponteiro = “de onde pego na próxima vez”, não “o que já coloquei”.

**Armadilha**

- `while (left <= right)` — o `=` pega o meio ímpar e o único elemento (`[7]`). Com `<`, o `3` do índice 2 em `[1,2,3,4,5]` não entra.
- Não mutar o input — só leitura.
- TypeScript: `nums[i]` é `number | undefined` → `nums[i]!` no `push` quando o `while` já garante o índice.
- Reverse da BCG (`[5,4,3,2,1]`) **não** é alternate ends (`[1,5,2,4,3]`). Mesmas pontas, output diferente.

**Formato**

```
left = 0
right = nums.length - 1
result = []
fromLeft = true

while left <= right:
  if fromLeft:
    result.push(nums[left])
    left++
  else:
    result.push(nums[right])
    right--
  fromLeft = !fromLeft

return result
```

Toggle: `fromLeft = !fromLeft` **inverte** o turno (não “atribui false”). Alternância de lado → boolean.

**Casos similares. Resolução**

| Enunciado (decode) | Output de `[1,2,3,4,5]` | Resolução |
| :--- | :--- | :--- |
| Alternar primeiro, último, segundo, penúltimo… | `[1,5,2,4,3]` | Two pointers + toggle `fromLeft` (Q9) |
| Inverter / último vira primeiro | `[5,4,3,2,1]` | Só `right--` a cada push, ou `[...nums].reverse()` |
| Palíndromo? | — | Mesmos ponteiros; compara `nums[left]` vs `nums[right]`, avança os dois |
| Two sum em array ordenado | — | Soma `nums[left]+nums[right]`; passou → `right--`; faltou → `left++` |

Antes de desenvolver: Padrão? Estado? Armadilha? no papel. O output define o algoritmo, não a palavra “pontas”.

O padrão comum é:

1ª vez que vejo: carimbo (add no Set) + guardo no resultado novo.
2ª vez em diante: já tem carimbo (has = true) → pulo, não guardo.

Quando usar esse padrão? Sempre que for "primeira ocorrência mantém ordem": dedupe de tags, IDs, logs — scan esquerda → direita + Set de vistos.

@q4-unit1

Regra mental: variável guarda valor; colchete com número acessa posição. Para voltar à última posição, você precisa do número de novo — newTracks.length - 1 — não do valor guardado.

@q5-unit1/q6

slice(1) -> a partir do índice 1 ate o final
slice (0, -1) -> a partir do indice 0 (inicio) e antes do final

Atribuições de string
1. Operador + (concatenação)

const rest = code.slice(1)   // "123"
return zone + rest            // "B" + "123" → "B123"

2. Template literal (interpolação, com crases)
return `${zone}${code.slice(1)}`   // "B123"

@q8-unit1
A regra diz: "trate n/m negativos como 0"

Piso em 0
const heads = Math.max(n, 0)

Quando usar esse padrão? Sempre que um parâmetro numérico tem mínimo válido — Math.max(valor, mínimo) impõe o piso numa linha, sem if.
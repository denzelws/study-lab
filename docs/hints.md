@q1-unit2-loops

Regra mental / Padrão: "É maiúscula?" sem regex = `ch === ch.toUpperCase() && ch !== ch.toLowerCase()`. A 1ª checagem sozinha passa para dígitos/espaços/símbolos, porque `toUpperCase()` de não-letra é identidade (`"1" → "1"`).
Quando usar esse padrão? Sempre que precisar testar "é letra maiúscula A–Z?" sem regex: a 1ª condição garante forma maiúscula, a 2ª garante que é letra (tem minúscula diferente).

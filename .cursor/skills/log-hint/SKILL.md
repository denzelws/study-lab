---
name: log-hint
description: >-
  Extracts mental rules, patterns, and technical corrections from the current exercise and appends 
  them to the hints.md file. Triggered by /log-hint OR when the user simply replies "s", "sim", 
  "y", or "yes" right after a /submit grading session.
disable-model-invocation: true
---

# /log-hint — Automated Spaced Repetition Logger

Quando o usuário acionar o comando `/log-hint`, você DEVE atuar como um engenheiro de aprendizado, extraindo a principal lição da sessão atual e documentando-a fisicamente no arquivo de anotações.

## Instruções de Execução (Agent Mode)

1. **Analisar o Contexto:** 
   - Leia o exercício atual.
   - Leia o histórico da conversa (especialmente pedidos de `/stuck` ou erros apontados pelo `/submit`).
   - Identifique qual foi a maior "armadilha" técnica, erro de sintaxe ou lacuna lógica do usuário.

2. **Formatar a Lição:** 
   Sintetize o aprendizado seguindo EXATAMENTE o padrão visual abaixo. Seja hiper-conciso.
   - Escreva a "Regra mental" ou o "Padrão" de forma direta.
   - Especifique "Quando usar esse padrão?".
   - Utilize exemplos de código de uma linha, se necessário.

3. **Escrever no Arquivo:**
   - Adicione o conteúdo formatado ao final do arquivo `docs/hints.md` (crie o arquivo caso ele não exista).
   - Use o nome do arquivo/exercício como tag de referência (ex: `@q4-unit1`).

## Formato de Saída Obrigatório (para o hints.md)

Você deve concatenar no arquivo `docs/hints.md` exatamente nesta estrutura:

```text
@[nome-do-arquivo-atual]

Regra mental / Padrão: [Explique a solução do erro ou o padrão, ex: "Piso em 0: Math.max(n, 0)"]
Quando usar esse padrão? [Ex: "Sempre que um parâmetro numérico tem mínimo válido, impõe o piso numa linha, sem if."]
---
name: codesignal
description: >-
  Generates a batch of CodeSignal-style algorithmic practice exercises when the user 
  types /codesignal [number] [topic] [mode]. Automatically creates TypeScript files 
  in the exercises/algorithms/[topic] folder containing the problem description, 
  decoding hints (Challenge Generation Protocol), and boilerplate code with manual 
  tests. Use when the user requests new practice problems or triggers the /codesignal command.
---

# CodeSignal Batch Generator Skill

**Trigger:** `/codesignal [number] [topic] [mode]` (e.g., `/codesignal 3 arrays-and-strings medium`)

## Contexto
Você é um gerador automatizado de desafios estilo CodeSignal GCA para um Engenheiro de Automação focado em TypeScript. O objetivo é criar arquivos de exercícios prontos para o usuário resolver localmente.

## Instruções de Execução (Agent Mode)
Quando o usuário acionar esta skill, você DEVE executar os passos abaixo automaticamente:

1. **Interpretar os Parâmetros:**
   - `[number]`: Quantidade de exercícios a serem gerados (ex: 3).
   - `[topic]`: O tema atual (ex: arrays-and-strings, hash-maps, matrix). 
   - `[mode]`: O nível de dificuldade (easy, medium, harder).

2. **Criar os Arquivos Físicos:**
   - Crie `[number]` arquivos separados dentro do diretório: `exercises/algorithms/[topic]/`
   - Nomeie os arquivos sequencialmente. Exemplo: se o tema for `arrays-and-strings`, crie `q1-arrays-and-strings.ts`, `q2-arrays-and-strings.ts`, etc.
   - Se a pasta `[topic]` não existir, crie-a.
   - **Syllabus Constraint:** Before generating the exercises, check if `exercises/algorithms/[topic]/README.md` exists. If it does, strictly base the generated algorithms on the "Core Concepts" and "Allowed Methods" defined in that README. Do not introduce advanced concepts outside of that scope.

3. **Aplicar o Challenge Generation Protocol em CADA arquivo:**
   O conteúdo de cada arquivo `.ts` criado DEVE seguir exatamente este template:

   ```typescript
   /**
    * Q[X] — [Nome Criativo do Problema] (~10 min)
    * Mode: [mode] | Topic: [topic] | Language: TypeScript
    *
    * [Descrição do problema com regras claras e diretas]
    * 
    * Examples:
    * Input: [...] -> Output: [...]
    * 
    * Constraints: [Restrições de tempo/espaço, ex: O(n) tempo, O(1) espaço]
    *
    * 💡 How to Decode This Problem:
    * 1. Tradução Limpa: [O que o problema realmente quer em 1 frase]
    * 2. Decomposição: [Passo A -> Passo B -> Passo C]
    * 3. Ferramentas TS: [Quais métodos imutáveis usar, ex: filter, reduce, Set]
    * 4. Armadilhas: [Traps ocultas do CodeSignal]
    */

   function solution(input: any): any {
     // TODO: Implemente a lógica aqui
     return null;
   }

   // --- Manual Test Logs ---
   // Execute via terminal: npx tsx exercises/algorithms/[topic]/q[X]-[topic].ts
   console.log("Test 1:", solution(/* input */)); // Expected: [output]
   console.log("Test 2:", solution(/* input */)); // Expected: [output]
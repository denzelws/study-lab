# AI Engineering

Isolated practice aligned with `roadmap-ai.pdf` and the Step 3+ prompts
in `CONTEXT.md`. Steps 0–2 are assumed complete.

## Scope

| Step | Folder / prefix | Practice type | Primary project |
| ---- | --------------- | ------------- | --------------- |
| 3 (current) | `step3-*.ts` | Raw generative API (TS + Node) | `~/dev/ollama-toolcall-lab` |
| 4 | `step4-*.ts` | LangChain / LangGraph | extend agent repo or `study-lab/projects/` |
| 5 | `step5-*.md` | Architecture scenarios (no code required) | design on paper first |
| 6 | `step6-order-review.md` | Ordering quiz (one-shot review) | n/a |

## How to use

1. Pick today's file from the step you're on (see file list below).
2. Paste the matching **Step N** section from `CONTEXT.md` into the agent.
3. Ask the mentor to **fill the TODO blocks** in that file (problem statement,
   examples, test cases) — do not peek at solutions.
4. Implement locally; run with `yarn ai:<script>` (see `package.json`).
5. Mark done only when the step's **done criteria** in `CONTEXT.md` are met.

## File formats

### Code drill (`step3-*.ts`, `step4-*.ts`)

Copy `_template.ts`. Each file must have:

- JSDoc block: title, problem, examples, constraints, run command
- Empty function(s) with typed signatures
- Manual `console.log` assertions with `// Expected:` comments (no test framework)
- `export` of public functions for reuse across drills

### Scenario drill (`step5-*.md`)

Copy `_template.scenario.md`. Each file must have:

- Problem statement and constraints (filled by mentor)
- Blank **Your design** section (you write here)
- **Done signal** checklist (from roadmap / CONTEXT.md)

## Step 3 — Generative API (stubs, not started)

| File | Subtopic | Script |
| ---- | -------- | ------ |
| `step3-streaming.ts` | NDJSON / token stream | `yarn ai:step3-streaming` |
| `step3-message-roles.ts` | user / assistant / tool history | `yarn ai:step3-roles` |
| `step3-tool-calling.ts` | tool call loop | `yarn ai:step3-tools` |
| `step3-structured-output.ts` | JSON schema validation | `yarn ai:step3-json` |

**Done criteria** (from roadmap): stream locally; one fake tool (e.g.
`get_weather`); explain message roles; explain structured output vs free text.

⚠️ Do not add Step 4 files until Step 3 done criteria are met.

## Step 4 — LangChain + LangGraph (stubs, locked)

| File | Subtopic | Script |
| ---- | -------- | ------ |
| `step4-provider-swap.ts` | same code, different provider | `yarn ai:step4-provider` |
| `step4-tool-contract.ts` | input → tool → result → output | `yarn ai:step4-contract` |
| `step4-react-agent.ts` | ReAct / state graph | `yarn ai:step4-agent` |
| `step4-streaming-ux.ts` | streaming events + UX | `yarn ai:step4-stream` |

## Step 5 — Context & RAG (stubs, locked)

| File | Subtopic |
| ---- | -------- |
| `step5-context-window.md` | limits, compaction |
| `step5-rag-pipeline.md` | ingest vs retrieve vs generate |
| `step5-memory-tiers.md` | thread vs long-term profile |
| `step5-mcp-integration.md` | MCP / integration patterns |

## Step 6 — Order review (stub)

| File | When to use |
| ---- | ----------- |
| `step6-order-review.md` | After Step 5, before a zero-to-prod project |

## Integrity

Same rule as algorithms Mode 3: **no AI during active solving** for
medium/hard drills. AI is for generating the problem into the stub,
post-mortem review, and optimal solution explanation.

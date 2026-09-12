# CONTEXT.md — Daily prompt templates

> Paste the relevant Step section from roadmap.md (not the whole
> file) as additional context together with today's prompt.

## Topic: React Fundamentals (Step 1 only)

Base prompt:
"Act as a technical mentor for a strong Junior dev. Generate [N]
React exercises, difficulty [simple|medium|advanced], covering
[JSX/composition | state basics | effects | refs | memoization].
Sandbox only — no external libraries beyond React itself. For each
exercise: requirements, expected component signature (TypeScript
props typed via interface), and do NOT show the solution until I
ask. After I solve it, point out one thing a Pleno-level dev would
do differently."

Variables to fill:
- N = 2-4 per session
- Difficulty = start at simple, only move to medium/advanced once
  the "done criteria" in exercises/react-fundamentals/README.md are met

⚠️ Once Step 1 is complete, switch to the "Fetch / TanStack Query"
or general appointment-system prompts instead — this topic is
retired after warm-up.

## Topic: TS Fundamentals

Base prompt:
"Act as a technical mentor for a strong Junior dev moving toward
mid-level (Pleno). Generate [N] TypeScript array/object manipulation
exercises, difficulty [simple|medium|advanced], no `any` allowed.
Context: React components with props typed via interface. For each
exercise: problem statement, expected type signature, and do NOT
show the solution until I ask. After I solve it, point out what I'd
do differently in production."

Variables to fill:
- N = 3-5 per session
- Difficulty = adjust based on current step in roadmap.md

## Topic: Fetch / TanStack Query (appointment-system)

Base prompt:
"I'm working on appointment-system (React + Vite + Fastify). Give
me a realistic bug scenario involving a race condition or stale
cache in TanStack Query. Don't tell me the cause — ask me 3
diagnostic questions first, like in a live coding interview."

## Topic: Zustand vs Redux Toolkit (appointment-system)

Base prompt:
"Here's the concern: [paste description]. Implement it in Zustand,
then in Redux Toolkit. At the end, list 3 bullets on when I'd
choose each one, using this exact case as the example."

## Topic: Daily Algorithms / Live Coding (algo-practice)

Base prompt:
"Generate 1 [array|object|tree|matrix|graph] problem, difficulty
[X], in the style of a technical interview / CodeSignal GCA
question. Timed: 20 minutes. Follow the format used in this repo:
JSDoc problem statement with examples/constraints at the top,
solution function(s) below, manual console.log assertions with
`// Expected: X` comments — no test framework. After I solve it,
evaluate my solution like a live technical interviewer would —
reasoning clarity, not just whether the output is correct."

Variables to fill:
- Topic = pick from gaps first: graph, DP, sliding window, two
  pointers, prefix sum (see exercises/algorithms/ for what's
  already covered)

---

## AI Engineering (roadmap-ai.pdf)

> Full map: `roadmap-ai.pdf`. Steps 0–2 are done — use prompts below
> from **Step 3 (current)** onward. Paste only the relevant Step
> section as context with today's prompt.

### Step 3 — Generative API in practice (current)

Base prompt:
"Act as a technical mentor for a Junior dev moving toward AI Engineer
(product). I'm on Step 3: call the generative API by hand before any
framework. Stack: TypeScript + Node (Ollama local or OpenAI-compatible
HTTP). Generate [N] exercises, difficulty [simple|medium|advanced],
covering [streaming | message roles | tool calling | structured JSON
output]. Practice in `~/dev/ollama-toolcall-lab` — extend it, don't
rewrite from scratch. For each exercise: requirements, expected
function/API signature, and do NOT show the solution until I ask.
After I solve it, point out what breaks in production (timeouts,
retries, invalid tool args, streaming backpressure)."

Variables to fill:
- N = 1-2 per session (API exercises are deeper than array drills)
- Difficulty = simple until done criteria met
- Subtopic = rotate: streaming → roles/history → tool call loop →
  JSON schema validation

Done criteria (Step 3):
- Local script streams tokens to the terminal
- One tool-calling loop works end-to-end (fake `get_weather` is fine)
- Can explain human vs assistant vs tool messages without looking up
- Can describe what 'structured output' buys you vs parsing free text

⚠️ Do not jump to LangChain until Step 3 done criteria are met.

### Step 4 — LangChain + LangGraph

Base prompt:
"Act as a technical mentor for an AI Engineer building product, not
training models. I'm on Step 4: LangChain/LangGraph after raw API
practice. Generate [N] exercises, difficulty [simple|medium|advanced],
covering [provider swap | tool contract | ReAct agent | streaming UX].
Use TypeScript unless the concept is Python-only in the docs — then
show the Python pattern and the TS equivalent. For each exercise:
requirements, expected module/graph shape, and do NOT show the solution
until I ask. After I solve it, compare framework abstraction vs what I
built manually in ollama-toolcall-lab."

Variables to fill:
- N = 1-2 per session
- Difficulty = start simple (single tool chatbot), then LangGraph
  state graph
- Project = extend existing agent repo or scaffold under
  `study-lab/projects/`

Done criteria (Step 4):
- Chatbot with 1 tool running locally
- Can swap provider (e.g. Ollama ↔ OpenAI-compatible) with minimal
  code change
- Can draw the agent graph (nodes, edges, where tool results re-enter)

Suggested study order (from roadmap): LangChain Academy intro →
LangGraph intro → official notebooks.

### Step 5 — Context, RAG, and product patterns

Base prompt:
"Act as a technical mentor for an AI Engineer in production. I'm on
Step 5: context window, RAG, memory, and integration patterns. Give
me [N] scenario-based exercises, difficulty [simple|medium|advanced],
covering [context limits | chunking/retrieval | thread vs long-term
memory | MCP]. Do NOT show the solution until I ask. For each
scenario: problem statement, constraints (e.g. 80-page PDF, token
budget), expected architecture in bullets. After I answer, critique
tradeoffs (RAG vs long prompt, when to compact, eval gaps)."

Variables to fill:
- N = 1 per session (concept-heavy)
- Subtopic = rotate: context window → RAG pipeline → memory tiers →
  MCP/Skills/multi-agent (high level)

Done criteria (Step 5):
- Can explain how to serve an 80-page PDF without stuffing the prompt
- Can describe ingest vs retrieve vs generate as separate steps
- Can name when RAG beats a long system prompt

### Step 6 — Order check (review, not daily drills)

Base prompt:
"I'm reviewing Step 6 of the AI Engineering roadmap — common ordering
mistakes. Quiz me on why skipping steps fails (agent before tokens,
prompt-only before context, RAG before embeddings, framework before
raw API). Give 5 rapid-fire 'what goes wrong when…' questions. Score
my answers. If I miss one, assign one targeted 30-min fix from the
step I skipped."

Variables to fill:
- Use once when finishing Step 5 or before starting a guided
  zero-to-prod project
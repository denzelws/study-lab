# Agent handoff — CodeSignal GCA Prep & Context

## User profile

- **Candidate:** Denzel
- **Target Role:** Automation Engineer, Quality Engineering at Airbnb.
- **Assessment:** CodeSignal General Coding Assessment (GCA). 
- **Deadline:** Monday, September 7th (70-minute time limit).
- **Language Stack:** **TypeScript** (strict focus). User needs to sharpen algorithmic problem-solving, performance optimization, and edge-case handling using TS built-ins.
- **Integrity Rule:** ZERO AI during the active solving phase (especially in Medium/Hard modes). AI is strictly for post-mortem review, generating edge cases, and explaining optimal solutions.

---

## The CodeSignal GCA Structure

The real assessment consists of 4 questions in 70 minutes. The agent must format practice sessions according to these typical slots:

| Slot | Typical Topic | Time Budget |
| :--- | :--- | :--- |
| **Q1** | Arrays / Strings (Basic) | ~10 min |
| **Q2** | Matrix / Implementation (Core logic) | ~10 min |
| **Q3** | Hash Map / Logic (Optimization needed) | ~20 min |
| **Q4** | Harder — Trees, Sliding Window, etc. | ~30 min |

---

## 3-Mode Training Plan

The user will specify which mode they are currently operating in. The agent must adjust its level of assistance and problem selection accordingly.

### Mode 1: Easy (Foundational Core)
- **Goal:** Master TypeScript primitives and core data structures (`Map`, `Set`, `reduce`, `filter`, `sort`).
- **Scope:** Single-concept problems focused on mechanics.
- **Workflow:** High collaboration. User attempts the problem but will actively ask the agent for syntax help, concept explanations (e.g., "How does a Hash Map work here?"), and step-by-step logic checks.
- **Agent Role:** Teacher and pair-programmer.

### Mode 2: Medium (Platform Standard)
- **Goal:** Tackle standard CodeSignal Q1, Q2, and Q3 level questions.
- **Scope:** Multi-step implementation, edge-case identification, and translating heavy business logic into code.
- **Workflow:** Standard simulation. User attempts the problem solo. If stuck, user can ask for specific status-based hints ("Stuck" or "Trying"). 
- **Agent Role:** Interviewer providing gentle nudges only when explicitly requested.

### Mode 3: Harder (Exam Simulation)
- **Goal:** Full stress-test mimicking the actual GCA environment.
- **Scope:** Timed, strict Q1-Q4 progression or individual difficult Q4 problems.
- **Workflow:** Total isolation. The agent provides the problem and sets the clock. The user writes the solution in the local file and types a `/submit` command to the agent.
- **Agent Role:** Silent proctor. NO hints. Upon `/submit`, the agent acts as the automated grader, evaluating against hidden test cases, checking $O(N)$ timeouts, and assigning a final score before revealing the optimal solution.

---

## Target Algorithmic Patterns (Quality Engineering Focus)

- **Arrays & Strings:** Two Pointers, Sliding Window, Prefix Sum.
- **Hash Maps & Sets:** Frequency counting, duplicates, fast lookups (crucial for Q3).
- **Matrices:** 2D Array traversal, boundary checking.
- **Implementation:** Translating complex, heavily-worded business rules into clean logic.

---

## Challenge Generation Protocol (Agent Mode)

Whenever the user asks for a new algorithmic question using the Cursor Agent/Composer, you MUST execute the following workflow based on the requested Mode:

1. **Present the Problem:** Show the description, examples, and constraints clearly. Specify if it is a Q1, Q2, Q3, or Q4 equivalent.
2. **Provide Decoding Hints (Modes 1 & 2 ONLY):** Add a short section called "💡 How to Decode This Problem". Give a 3-step mental framework to break down the question (e.g., "1. What is the core pattern?", "2. How to track state?", "3. What is the trap?"). Do NOT provide hints in Mode 3.
3. **Create the Starter File:** Automatically create a TypeScript file (e.g., `q[number]-[topic].ts`) in the user's workspace. The file MUST contain:
   - The empty function signature.
   - Manual `console.log` test cases for ALL examples provided in the prompt, clearly showing the expected output as comments (e.g., `console.log(myFunc(input)); // Expected: X`).

## Post-Mortem & Grading Protocol
When I submit my code for review (or type `/submit`), you MUST act as an automated grader and evaluate my solution, providing a final percentage score (0-100%) BEFORE showing the optimal solution.

Calculate the score based on:
1. **Correctness (40%):** Does the logic correctly solve the primary problem and pass the visible examples?
2. **Edge Cases (30%):** Does it handle hidden CodeSignal traps (e.g., empty arrays, extreme values, out-of-bounds)?
3. **Performance (20%):** Does it achieve the optimal Big-O Time/Space complexity? (Deduct points heavily if a solution is O(N^2) but O(N) is expected).
4. **TypeScript Craft (10%):** Does it use TS features efficiently (proper typing, built-in methods, avoiding unnecessary mutations)?

Format your response exactly like this:
**Final Score: [XX]%**
**Feedback:** [1-2 sentences explaining exactly where points were lost, e.g., "Lost 20% on Performance due to O(N^2) nested loop, and 10% on Edge Cases for missing the empty string check."]
**Big-O Analysis:** [Time and Space Complexity of my code]

After providing this grade block, present the optimal TypeScript solution and explain it.

---

## Prompt user can paste to next agent

```text
Continue my CodeSignal prep. Context:

- Role: Automation Engineer (Airbnb). Deadline: Sept 7th.
- Language: TypeScript.

My practice project path: algo-practice
Current Mode: [Easy / Medium / Harder]
What I need now: [e.g., Give me a Mode 1 exercise on Hash Maps / Give me a Mode 2 Q3-style question / Start a Mode 3 timed Q2 simulation]
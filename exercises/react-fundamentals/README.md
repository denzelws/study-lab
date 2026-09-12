# React Fundamentals

## Scope
Isolated React practice — sandbox only, no real project. This folder
is exclusive to **Step 1 (warm-up)** of the roadmap. Once Step 1 is
marked complete, this folder is frozen: no new exercises get added
here.

## ⚠️ Redirect after Step 1
Starting at Step 2, all React practice happens **inside
`~/dev/appointment-system`**, not here. Custom hooks, Context,
TanStack Query, testing (RTL/Vitest), performance profiling, and
advanced TypeScript patterns are all practiced on real production
code, not sandbox exercises.

If you're on a React-only day and past Step 1, go to
`appointment-system`, not this folder.

## Progression (simple → complex)

### 1. JSX & composition
- Rendering expressions, conditional rendering, lists + `key`
- Props (including `children`), component composition

### 2. State — basics
- `useState`, functional updates, controlled inputs
- Lifting state up (two sibling components sharing state)

### 3. Effects
- `useEffect` — dependency array, cleanup function
- When NOT to use `useEffect` (common Jr. mistake: deriving state
  instead of computing it inline)

### 4. Refs
- `useRef` for DOM access vs. mutable value that doesn't trigger render

### 5. Memoization (only with a real reason)
- `useMemo`, `useCallback` — measure first, don't guess
- What actually triggers a re-render

### 6. Small composite exercise
- Build one small component (e.g. a filterable list, a toggle form)
  combining state + effect + props — this is the "done" signal for
  Step 1 before moving to appointment-system

## Done criteria
Can explain, without looking it up:
- Why `push` inside `setState` breaks re-renders
- What causes an unnecessary re-render and how to verify it
- The difference between `useMemo`/`useCallback` and just not using them
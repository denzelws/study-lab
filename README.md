# 🧠 Study Lab: AI-Driven Algorithm Prep Ecosystem

> An automated, local software engineering laboratory built for high-level technical interview preparation (CodeSignal GCA). Focused on TypeScript, algorithmic performance, and AI-augmented tooling.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![AI-Augmented](https://img.shields.io/badge/Cursor_Agents-Custom_Skills-8A2BE2?style=flat-square)](https://cursor.sh/)

## 🎯 Overview

This repository is an **automated study ecosystem** designed with a Quality Engineering and Automation mindset. 

Instead of manually searching for exercises and checking answers, this workspace leverages **Custom AI Skills (Cursor Agents)** to automatically generate syllabus-aligned problem sets, provide visual dry-runs when stuck, and perform strict, automated grading focused on Big-O complexity and hidden edge cases.

## 🏗️ Current Architecture

The workspace is structured into distinct layers, separating basic fundamentals, context-driven challenges, and timed simulations.

```text
study-lab/
├── .cursor/skills/        # The Project's Brain: Custom Agent Skills
├── exercises/             # Core practice and code execution
│   ├── algorithms/        # AI-generated syllabus challenges (e.g., unit1-arrays-strings)
│   ├── practice/          # Sandbox for mastering TS native methods (filter, slice, etc.)
│   └── simulations/       # Timed official simulations (CodeSignal Q1-Q4 style)
├── docs/                  # System prompts, grading rules, and mental architecture
├── package.json           # Automation scripts (tsx, vitest)
└── tsconfig.json          # Strict mode enforcement for TypeScript

```

## 🤖 Custom AI Tooling

To eliminate operational friction and focus entirely on problem-solving, custom automation pipelines are embedded directly into the IDE via AI rule files:

* **`/unit`**: Automates module onboarding. The Agent reads a syllabus, extracts core concepts, maps common traps, and creates a contextual `README.md` for the study unit.
* **`/codesignal`**: The Batch Generator. Reads the unit's README and dynamically generates TypeScript challenges perfectly calibrated to the current study level, preventing AI hallucinations.
* **`/stuck`**: The "Patient Tutor" mode. Analyzes current code and provides surgical explanations and visual dry-runs without revealing the final solution, preserving practical learning.
* **`/submit`**: The Automated Grader. Evaluates submitted code based on 4 rigorous pillars (Correctness, Edge Cases, Performance, TS Craft), audits the conversation history to measure developer autonomy, and outputs a formal scorecard.

## 🚀 Execution & Testing

The environment utilizes `tsx` for lightning-fast TypeScript execution without prior compilation.

```bash
# Run a specific algorithm simulation locally
npx tsx exercises/algorithms/unit1-arrays-strings/q1-arrays-and-strings.ts

```

## 👨‍💻 Author

Built by **Denzel Washington Santana Barbosa**, a Full Stack Software Developer. This project reflects a continuous effort to blend rigorous algorithmic foundations with modern AI tooling.
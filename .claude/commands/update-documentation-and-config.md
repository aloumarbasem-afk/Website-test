---
name: update-documentation-and-config
description: Workflow command scaffold for update-documentation-and-config in Website-test.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-documentation-and-config

Use this workflow when working on **update-documentation-and-config** in `Website-test`.

## Goal

Keeps project documentation and deployment/configuration files up to date, often in response to new features or review feedback.

## Common Files

- `README.md`
- `.env.example`
- `vercel.json`
- `LICENSE`
- `package.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit or add details in README.md to reflect changes.
- Update or add environment example files (.env.example) as needed.
- Modify deployment configuration files (e.g., vercel.json).
- Update or add LICENSE file if licensing changes.
- Adjust package.json for engines or metadata.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
---
name: feature-development-with-component-expansion
description: Workflow command scaffold for feature-development-with-component-expansion in Website-test.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /feature-development-with-component-expansion

Use this workflow when working on **feature-development-with-component-expansion** in `Website-test`.

## Goal

Implements new UI features by creating or updating multiple React component files and related global styles/layouts.

## Common Files

- `components/*.js`
- `app/globals.css`
- `app/layout.js`
- `app/page.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update multiple component files in components/.
- Edit global styles (app/globals.css) as needed.
- Update layout or page files (app/layout.js, app/page.js) to integrate new components.

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.
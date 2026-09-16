# Contributing to MAPPA

## Setup

```bash
npm install
npm run dev
```

## Development

- Follow design tokens in `src/design/tokens.ts`
- All colors/spacing from tokens, never hardcoded
- Components are in `src/components/`
- Views are in `src/views/`

## Testing

```bash
npm test
```

## Code Style

- TypeScript strict mode
- Functional components (React)
- Props interfaces clearly defined
- No `any` types

## Pull Requests

1. Create branch: `git checkout -b feat/component-name`
2. Make changes
3. Run tests: `npm test`
4. Validate design: `npm run validate:design`
5. Push and create PR

All PRs require:
- ✅ Design validation passes
- ✅ Tests pass
- ✅ Design review approval

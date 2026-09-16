# MAPPA — Intelligent Document Organizer

**MAPPA** is a desktop application that transforms scattered PDFs into organized, intelligently-renamed documents through OCR and semantic analysis.

## Features

- **Intelligent OCR** — Extract metadata from PDFs automatically
- **Smart Organization** — Rename and organize files by vendor, type, date
- **Learning Engine** — System improves with every document it touches (v2.0)
- **Professional Design** — Metallic grey aesthetic, accessible UI
- **Local-First** — All processing happens on your machine

## Quick Start

```bash
git clone https://github.com/tudor-balaban/mappa-app.git
cd mappa-app
npm install
npm run dev
```

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for system design.

## Contributing

See [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for development guidelines.

## Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md) for v1.0 → v2.0 timeline.

## Design System

All UI components use design tokens from `src/design/tokens.ts`:
- **Colors:** Metallic grey palette (professional, office aesthetic)
- **Typography:** Segoe UI (UI), Consolas (monospace)
- **Spacing:** 8px grid

No hardcoded colors or spacing — all values come from tokens.

## License

MIT

---

**Status:** v0.1.0 (Alpha)  
**Last Updated:** 2026-09-17

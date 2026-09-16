# MAPPA Architecture

## Overview

MAPPA is a desktop application for intelligent PDF processing with OCR capabilities.

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** CSS-in-JS (design tokens)
- **OCR:** Tesseract.js
- **Desktop:** Electron (future)
- **Build:** Vite / React Scripts
- **Testing:** Jest

## Core Modules

### Design System (`src/design/`)
- `tokens.ts` - Color, typography, spacing tokens
- `theme.ts` - Light/dark mode
- `globals.css` - Base styles

### Components (`src/components/`)
- Button, Card, Input, Dropzone, etc.
- All components follow design tokens
- Accessible (WCAG AA)

### Views (`src/views/`)
- Dashboard
- Processing
- Settings

### Services (`src/services/`)
- OCR (Tesseract integration)
- File handling (PDF split, rename)
- Learning engine (ALBA)

## Design-to-Code Flow

1. Design tokens in `tokens.ts` (colors, spacing, fonts)
2. Components use tokens (no hardcoded values)
3. CI/CD validates token compliance
4. Design System docs stay in sync

## Development Workflow

See CONTRIBUTING.md for detailed guidelines.

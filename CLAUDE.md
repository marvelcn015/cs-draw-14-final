# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based website for Taipei Municipal University's Bo'ai Campus guide, built with Vite, TypeScript, and shadcn/ui components. The application provides information about different aspects of campus life organized into categories: Food (食), Housing (住), Transport (行), Education (育), and Entertainment (樂).

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui (built on Radix UI primitives)
- **Styling**: Tailwind CSS with custom amber/orange color scheme
- **Routing**: React Router DOM with BrowserRouter
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation

### Project Structure
```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Navigation.tsx # Main navigation component
│   ├── PageLayout.tsx # Layout wrapper
│   └── FeatureCard.tsx # Reusable card component
├── pages/            # Route components (Index, Food, Housing, etc.)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── content/          # Content data (if exists)
```

### Key Components
- **App.tsx**: Main application with QueryClient provider and routing setup
- **Navigation.tsx**: Sticky navigation bar with Chinese labels and Lucide icons
- **PageLayout.tsx**: Consistent layout wrapper for all pages
- Pages follow a pattern: Food, Housing, Transport, Education, Entertainment, plus Index and NotFound

### Styling Conventions
- Uses Tailwind CSS with custom amber/orange gradient theme
- Navigation has backdrop blur and amber accent colors
- Components use shadcn/ui design system
- Chinese text is used throughout for labels and content

### Path Aliases
- `@/*` maps to `./src/*` for cleaner imports

## Development Notes

### TypeScript Configuration
- Relaxed TypeScript settings: `noImplicitAny: false`, `strictNullChecks: false`
- Skip lib checks enabled for faster builds

### Vite Configuration
- Development server runs on `::` (all interfaces) port 8080
- Uses `@vitejs/plugin-react` and `lovable-tagger` in development mode
- Path alias `@` configured for src directory

### ESLint
- Uses modern ESLint flat config
- React hooks and refresh plugins enabled
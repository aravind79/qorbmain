# AI Project Context: Qorbtech Main

## Project Overview
This project is a modern, high-performance web application (Landing Page) built with the React ecosystem. It focuses on a premium visual aesthetic with smooth animations and interactive elements.

## Technology Stack
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 5
- **Styling**: 
  - Tailwind CSS v3
  - Shadcn UI (using Radix UI primitives)
  - `tailwindcss-animate` for Tailwind animations
- **Animation**: 
  - Framer Motion
  - Lenis (Smooth Scrolling)
- **Routing**: React Router DOM v6
- **State Management**: 
  - React Context (e.g., `CountryProvider`)
  - TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

### Root Directory
- `vite.config.ts`: Vite configuration (React SWC plugin, path aliases).
- `tsconfig.json`: TypeScript configuration.
- `package.json`: Dependencies and scripts.
- `tailwind.config.ts`: Tailwind configuration (check for theme extensions).

### Source Directory (`src/`)
- **App.tsx**: Main application entry point. Sets up Providers (Query, Tooltip, Toaster) and Routing.
- **main.tsx**: Mounts the app to DOM.
- **index.css**: Global styles, Tailwind directives, and CSS variables (Theming).

#### Components (`src/components/`)
Organized by responsibility:
- **`layout/`**: Global layout components (`Header.tsx`, `Footer.tsx`).
- **`sections/`**: Feature-specific page sections used in `Index.tsx` (e.g., `HeroSection`, `ServicesSection`, `WhyChooseSection`).
- **`ui/`**: Reusable primitive components (Buttons, Inputs, Dialogs) - typically from Shadcn UI.
- **`effects/`**: Visual effect components (e.g., `SmoothFollower` for cursor effects).

#### Pages (`src/pages/`)
- **Index.tsx**: The main landing page. Composes multiple sections and initializes global effects like Lenis scrolling.
- **NotFound.tsx**: 404 Error page.

#### Contexts (`src/contexts/`)
- **CountryProvider**: Manages country-specific logic/state (e.g., `CountryContext.tsx`).

## Development Conventions
1.  **Imports**: Use absolute imports with `@/` alias (resolves to `src/`).
2.  **Styling**: Prefer Tailwind utility classes. Use `cn()` utility for class merging.
3.  **Components**: Functional components with hooks.
4.  **Performance**: `Lenis` is used for smooth scrolling. Ensure heavy animations don't blocked the main thread.
5.  **Responsive Design**: The app is designed to be responsive (evident in `SmoothFollower` checking for desktop).

## Key Features (Inferred)
- **Smooth Scrolling**: Implemented via Lenis in `Index.tsx`.
- **Cursor Effects**: Custom cursor follower.
- **Dynamic Sections**: Modular sections for easy reordering or updating.
- **Theming**: "Dark mode" or variable-based theming via `bg-background` and `text-foreground` conventions in Tailwind config.

## Recent Objectives (from History)
- **Visual Revamp**: Moving towards "Premium Aesthetic", Image-based cards, Glassmorphism.
- **Hero Optimization**: Replacing static globes with DotLottie animations.
- **Performance**: Focusing on loading speed and smooth interactions.

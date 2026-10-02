# React + TypeScript + Tailwind + Vite + Storybook

A component development starter with a working demo and typed Button stories.

## Getting started

Use Node.js 22.20+ (or a supported newer LTS release) and npm.

```sh
npm install
npm run storybook
```

Storybook runs at http://localhost:6006. Run `npm run dev` to start the React app at http://localhost:5173.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite app |
| `npm run storybook` | Start Storybook |
| `npm run build` | Type-check and build the app into `dist/` |
| `npm run build-storybook` | Build Storybook into `storybook-static/` |
| `npm run typecheck` | Check TypeScript |
| `npm run lint` | Run Oxlint |
| `npm run preview` | Preview the built app |

## Add components

Create components in `src/components/` and add a sibling `*.stories.tsx` file. The Button example includes variants, sizes, disabled state, interactive controls, click action logging, generated documentation, and the accessibility addon.

Tailwind is loaded through `@tailwindcss/vite` in `vite.config.ts`. Storybook reuses that configuration and imports `src/index.css` in `.storybook/preview.ts`, so utilities work in both places.

Configuration follows the [Storybook React Vite documentation](https://storybook.js.org/docs/get-started/frameworks/react-vite) and [Tailwind Vite integration](https://tailwindcss.com/docs/installation/using-vite).

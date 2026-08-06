# website-meerastudio

Marketing site for **Meera Studio**, built as a single-page React application and deployed to GitHub Pages.

## Stack

| | |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 (with PostCSS + Autoprefixer) |
| Icons | lucide-react |
| Linting | ESLint 9 with `react-hooks` and `react-refresh` plugins |
| Deploy | `gh-pages` |

## Getting started

```bash
npm install
npm run dev        # Vite dev server with HMR
```

## Scripts

| Command | Does |
|---------|------|
| `npm run dev` | Start the development server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Layout

| Path | Contents |
|------|----------|
| `src/` | React components and application source |
| `images/` | Site imagery |
| `index.html` | Vite entry document |
| `tailwind.config.js`, `postcss.config.js` | Styling configuration |
| `vite.config.ts`, `tsconfig*.json` | Build and TypeScript configuration |
| `.github/` | GitHub Actions workflows |

## Deploying

```bash
npm run deploy
```

`predeploy` runs the production build first, then `gh-pages -d dist` pushes the output to the `gh-pages` branch.

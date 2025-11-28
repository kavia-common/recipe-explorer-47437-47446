# Recipe Explorer (Slidev)

This Slidev deck is a simple Recipe Explorer: a landing slide shows a grid of recipes and each card links to a detail slide with ingredients and preparation steps. It uses an "Ocean Professional" theme (blue and amber accents, clean surfaces, rounded corners, and subtle shadows).

## Run locally

You can use npm, pnpm, or yarn. Example with npm:

- npm install
- npm run dev
- Open http://localhost:3000

Note: No external APIs are required. The app reads local data from `data/recipes.ts`. It runs even if VITE_* env vars are not set.

## Add or edit recipes

- Open `./data/recipes.ts`
- Add a new object to the `recipes` array with fields:
  - id: string (unique; also used as the slide `id`)
  - title: string
  - description: string
  - hero?: string (emoji or image URL)
  - time?: string (e.g., "30 min")
  - servings?: number
  - ingredients: string[]
  - steps: string[]

- Create a matching detail slide in `slides.md` by adding:

```markdown
---
layout: recipe-detail
id: "your-id"
recipeId: "your-id"
---
```

The landing page automatically lists all recipes found in `recipes.ts`. Clicking a card jumps to the detail slide with the same `id`.

## Theme & styling

- Global CSS pipeline:
  - slides.md frontmatter `css` imports `./style.css`
  - `style.css` imports `./theme/custom.css`
- Theme colors:
  - Primary: `#2563EB`
  - Secondary/Success: `#F59E0B`
  - Error: `#EF4444`
  - Background: `#f9fafb`
  - Surface: `#ffffff`
  - Text: `#111827`

## Production build

- npm run build
- Outputs to `dist/`

Learn more about Slidev at the [documentation](https://sli.dev/).

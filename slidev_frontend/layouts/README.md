# Layouts

This folder contains reusable Slidev layouts for this deck.

- recipe-detail.vue
  - Usage in slides.md:
    ---
    layout: recipe-detail
    id: "r6"
    recipeId: "r6"
    ---
  - Reads `recipeId` from frontmatter and renders ingredients and steps from `data/recipes.ts`.

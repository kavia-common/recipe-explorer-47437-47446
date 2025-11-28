---
# Global deck settings
theme: default
title: "Recipe Explorer"
info: |
  A simple Slidev app to browse and view recipes with an Ocean Professional theme.
class: text-left
mdc: true
transition: slide-left
fonts:
  sans: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial
  mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
css: |
  @import "./style.css";
---

# Recipe Explorer

<div class="landing with-hero-glow">
  <div class="hero">
    <h2 class="text-hero">Discover Delicious Recipes</h2>
    <p class="subtitle text-md">Browse the collection and click a card to view details</p>
  </div>

  <RecipeList />
</div>

---

layout: recipe-detail
id: "r1"
recipeId: "r1"
---

---

layout: recipe-detail
id: "r2"
recipeId: "r2"
---

---

layout: recipe-detail
id: "r3"
recipeId: "r3"
---

---

layout: recipe-detail
id: "r4"
recipeId: "r4"
---

---

layout: recipe-detail
id: "r5"
recipeId: "r5"
---

---
layout: center
class: text-center
---

# Thanks for Cooking!

<div class="mt-4 subtle">Use arrow keys to navigate • Click cards to jump to recipes</div>

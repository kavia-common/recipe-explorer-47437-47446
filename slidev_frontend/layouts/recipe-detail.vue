<script setup lang="ts">
import { computed } from 'vue'
import { getRecipeById, recipes } from '../data/recipes'

const fm = computed(() => (typeof $frontmatter !== 'undefined' ? $frontmatter : {} as any))
const id = computed(() => (fm.value?.recipeId || fm.value?.id) as string | undefined)
const recipe = computed(() => getRecipeById(id.value) ?? recipes[0])
</script>

<template>
  <div class="recipe-detail with-hero-glow">
    <div class="nav">
      <a href="#" class="btn-secondary sm">← Back to list</a>
      <div class="spacer" />
      <a v-if="recipe" :href="`#${recipe.id}`" class="badge id">#{{ recipe.id }}</a>
    </div>

    <div class="header">
      <div class="hero" aria-hidden="true">{{ recipe?.hero || '🍽️' }}</div>
      <div>
        <h1 class="title">{{ recipe?.title }}</h1>
        <p class="subtitle">{{ recipe?.description }}</p>
        <div class="meta">
          <span class="chip primary">{{ recipe?.time || '—' }}</span>
          <span class="chip amber">{{ recipe?.servings ? `${recipe.servings} servings` : 'servings: —' }}</span>
        </div>
      </div>
    </div>

    <div class="content-grid">
      <div class="card">
        <h3 class="section-title">Ingredients</h3>
        <ul class="ingredients">
          <li v-for="(ing, i) in recipe?.ingredients" :key="i">{{ ing }}</li>
        </ul>
      </div>
      <div class="card">
        <h3 class="section-title">Preparation</h3>
        <ol class="steps">
          <li v-for="(step, i) in recipe?.steps" :key="i">
            <span class="step-index">{{ i + 1 }}</span>
            <span class="step-text">{{ step }}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-detail {
  display: grid;
  gap: 16px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav .spacer { flex: 1; }
.badge.id {
  font-size: 12px;
  opacity: 0.8;
  padding: 6px 10px;
  border-radius: 9999px;
  border: 1px solid var(--line, var(--theme-border-subtle));
  background: color-mix(in oklab, #2563EB 6%, transparent);
  text-decoration: none;
  color: var(--theme-text-primary);
}
.btn-secondary.sm {
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid var(--theme-border-subtle);
  background: var(--theme-btn-ghost-hover-bg);
  color: var(--theme-btn-ghost-fg);
  text-decoration: none;
  transition: background 160ms ease, transform 160ms ease;
}
.btn-secondary.sm:hover {
  background: color-mix(in oklab, var(--theme-btn-ghost-hover-bg) 80%, #000);
  transform: translateY(-1px);
}

.header {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 16px;
  align-items: center;
}
.hero {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 14px;
  background: color-mix(in oklab, #2563EB 10%, transparent);
  border: 1px solid color-mix(in oklab, #2563EB 24%, transparent);
  box-shadow: 0 8px 20px rgba(37,99,235,0.25);
}
.title {
  margin: 0;
  letter-spacing: -0.02em;
}
.subtitle {
  margin: 6px 0 0 0;
  color: var(--theme-text-secondary);
}
.meta {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
}
.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 9999px;
  background: color-mix(in oklab, var(--theme-primary-500, #2563EB) 7%, #0000);
  border: 1px solid color-mix(in oklab, var(--theme-primary-500, #2563EB) 16%, #0000);
  color: var(--theme-text-primary);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.chip.primary {
  background: color-mix(in oklab, #2563EB 14%, #0000);
  border-color: color-mix(in oklab, #2563EB 28%, #0000);
}
.chip.amber {
  background: color-mix(in oklab, #F59E0B 18%, #0000);
  border-color: color-mix(in oklab, #F59E0B 32%, #0000);
}

.content-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 16px;
}
@media (max-width: 1024px) {
  .content-grid { grid-template-columns: 1fr; }
}

.section-title {
  margin-top: 0;
  margin-bottom: 10px;
}

.ingredients {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}
.ingredients li {
  position: relative;
  padding-left: 18px;
  color: var(--theme-text-secondary);
  line-height: 1.45;
}
.ingredients li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #2563EB;
  box-shadow: 0 0 0 3px color-mix(in oklab, #2563EB 20%, #0000);
  opacity: 0.95;
}

.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}
.steps li {
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 10px;
  align-items: start;
}
.step-index {
  width: 26px; height: 26px; border-radius: 9999px;
  display: grid; place-items: center;
  background: color-mix(in oklab, #2563EB 18%, transparent);
  border: 1px solid color-mix(in oklab, #2563EB 32%, transparent);
  color: var(--theme-text-primary);
  font-weight: 700; font-size: 13px;
}
.step-text { color: var(--theme-text-primary); }
</style>

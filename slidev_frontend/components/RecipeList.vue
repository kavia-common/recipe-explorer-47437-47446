<script setup lang="ts">
import { recipes } from '../data/recipes'

// We use Slidev's hash-based navigation via anchors to slide ids (e.g., #r1)
// Each recipe detail slide declares `id: "<id>"` in frontmatter.
</script>

<template>
  <div class="recipe-grid">
    <a
      v-for="r in recipes"
      :key="r.id"
      class="recipe-card"
      :href="`#${r.id}`"
      :aria-label="`View ${r.title}`"
    >
      <div class="card-top">
        <div class="hero" aria-hidden="true">{{ r.hero || '🍽️' }}</div>
        <div class="meta">
          <h3 class="card-title">{{ r.title }}</h3>
          <p class="card-desc">{{ r.description }}</p>
        </div>
      </div>
      <div class="card-badges">
        <span class="chip primary">{{ r.time || '—' }}</span>
        <span class="chip">{{ r.servings ? `${r.servings} servings` : 'servings: —' }}</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 18px;
}
@media (max-width: 1024px) {
  .recipe-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .recipe-grid { grid-template-columns: 1fr; }
}

.recipe-card {
  display: grid;
  gap: 12px;
  background: var(--surface, #ffffff0a);
  background-color: var(--theme-bg-elevated);
  border: 1px solid var(--line, var(--theme-border-subtle));
  border-radius: 16px;
  padding: 16px 18px;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(0,0,0,0.25);
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
  position: relative;
  overflow: hidden;
}
.recipe-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 4px;
  background: linear-gradient(135deg, #2563EB 0%, #60A5FA 50%, #93C5FD 100%);
  opacity: 0.95;
}
.recipe-card:hover {
  transform: translateY(-2px);
  border-color: color-mix(in oklab, #2563EB 35%, var(--line, #2e2e2e));
  box-shadow: 0 14px 36px rgba(0,0,0,0.34);
}
.card-top {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 14px;
  align-items: center;
}
.hero {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  font-size: 32px;
  border-radius: 12px;
  background: color-mix(in oklab, #2563EB 10%, transparent);
  border: 1px solid color-mix(in oklab, #2563EB 24%, transparent);
  box-shadow: 0 6px 16px rgba(37,99,235,0.25);
}
.card-title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text, var(--theme-text-primary));
}
.card-desc {
  margin: 6px 0 0 0;
  color: var(--muted, var(--theme-text-secondary));
  font-size: 14px;
}
.card-badges {
  display: flex;
  gap: 8px;
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
</style>

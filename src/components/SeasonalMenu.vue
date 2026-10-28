<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from "vue";
import { dishes, menuFilters } from "../data/site";
import type { MenuCategory } from "../types/site";

const activeCategory = ref<MenuCategory>("all");
const favoriteIds = reactive(new Set<string>());
const toastMessage = ref("");
const isToastVisible = ref(false);
let toastTimer: number | undefined;

const visibleDishes = computed(() =>
  activeCategory.value === "all"
    ? dishes
    : dishes.filter((dish) => dish.category === activeCategory.value),
);

const toggleFavorite = (id: string) => {
  const wasFavorite = favoriteIds.has(id);

  if (wasFavorite) {
    favoriteIds.delete(id);
  } else {
    favoriteIds.add(id);
  }

  toastMessage.value = wasFavorite ? "已取消收藏" : "已收藏这道菜";
  isToastVisible.value = true;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    isToastVisible.value = false;
  }, 2200);
};

onBeforeUnmount(() => {
  window.clearTimeout(toastTimer);
});
</script>

<template>
  <section id="menu" class="menu section" aria-labelledby="menu-title">
    <div class="menu__header">
      <div>
        <div v-reveal class="section-index">
          <span>02</span>
          <p>SEASONAL MENU</p>
        </div>
        <h2 id="menu-title" v-reveal class="display-title">
          秋日 · <span>山味</span>
        </h2>
      </div>
      <p v-reveal class="menu__lead">
        秋雨过后，菌子丰腴，山笋清甜。<br />
        从一口鲜汤开始，慢慢进入山野的秋天。
      </p>
    </div>

    <div v-reveal class="menu-filter" role="tablist" aria-label="菜品分类">
      <button
        v-for="filter in menuFilters"
        :key="filter.value"
        type="button"
        role="tab"
        :class="{ 'is-active': activeCategory === filter.value }"
        :aria-selected="activeCategory === filter.value"
        @click="activeCategory = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>

    <div class="dish-grid">
      <article
        v-for="dish in visibleDishes"
        :key="dish.id"
        v-reveal
        class="dish-card"
        :class="{ 'dish-card--large': dish.featured }"
        :data-category="dish.category"
      >
        <div class="dish-card__image image-frame">
          <img :src="dish.image" :alt="dish.alt" loading="lazy" />
          <span v-if="dish.featured" class="dish-card__badge">主厨推荐</span>
          <button
            class="favorite"
            :class="{ 'is-active': favoriteIds.has(dish.id) }"
            type="button"
            :aria-label="`收藏${dish.name}`"
            :aria-pressed="favoriteIds.has(dish.id)"
            @click="toggleFavorite(dish.id)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
              />
            </svg>
          </button>
        </div>
        <div class="dish-card__content">
          <div class="dish-card__topline">
            <span>{{ dish.categoryLabel }}</span><span>{{ dish.order }}</span>
          </div>
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
          <strong>¥{{ dish.price }}</strong>
        </div>
      </article>
    </div>

    <div v-reveal class="menu__footer">
      <p>菜单随季节更迭，以当日食材为准</p>
      <a class="button button--outline" href="#reservation">
        订一席秋味 <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>

  <div
    class="toast"
    :class="{ 'is-visible': isToastVisible }"
    role="status"
    aria-live="polite"
  >
    {{ toastMessage }}
  </div>
</template>

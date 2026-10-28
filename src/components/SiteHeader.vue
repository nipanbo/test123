<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { navigationItems } from "../data/site";
import BrandLogo from "./BrandLogo.vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const updateHeader = () => {
  isScrolled.value = window.scrollY > 32;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") closeMenu();
};

watch(isMenuOpen, (isOpen) => {
  document.body.classList.toggle("menu-open", isOpen);
});

onMounted(() => {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeader);
  document.removeEventListener("keydown", handleEscape);
  document.body.classList.remove("menu-open");
});
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <BrandLogo @click="closeMenu" />

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="main-nav"
      @click="toggleMenu"
    >
      <span class="sr-only">{{ isMenuOpen ? "关闭导航菜单" : "打开导航菜单" }}</span>
      <span></span>
      <span></span>
    </button>

    <nav
      id="main-nav"
      class="main-nav"
      :class="{ 'is-open': isMenuOpen }"
      aria-label="主要导航"
    >
      <a
        v-for="item in navigationItems"
        :key="item.href"
        :href="item.href"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>
      <a
        class="button button--small button--light"
        href="#reservation"
        @click="closeMenu"
      >
        预留餐位
      </a>
    </nav>
  </header>
</template>

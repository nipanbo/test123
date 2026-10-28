<script setup lang="ts">
withDefaults(
  defineProps<{
    footer?: boolean;
    link?: boolean;
  }>(),
  {
    footer: false,
    link: true,
  },
);
</script>

<template>
  <component
    :is="link ? 'a' : 'div'"
    class="brand"
    :class="{ 'brand--footer': footer }"
    :href="link ? '#top' : undefined"
    :aria-label="link ? '山野首页' : undefined"
  >
    <span class="brand__mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" role="presentation">
        <path d="M5 30 15.8 13 24 25.5 29.3 17 39 30" />
        <path d="M8 35h28" />
      </svg>
    </span>
    <span class="brand__text">
      <strong>山野</strong>
      <small>SHANYE</small>
    </span>
  </component>
</template>

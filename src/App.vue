<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue";
import ReservationSection from "./components/ReservationSection.vue";
import SeasonalMenu from "./components/SeasonalMenu.vue";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SpaceSection from "./components/SpaceSection.vue";
import StorySection from "./components/StorySection.vue";
import TickerStrip from "./components/TickerStrip.vue";
import VisitSection from "./components/VisitSection.vue";
</script>

<template>
  <a class="skip-link" href="#main-content">跳至主要内容</a>
  <SiteHeader />
  <main id="main-content">
    <HeroSection />
    <TickerStrip />
    <StorySection />
    <SeasonalMenu />
    <SpaceSection />
    <ReservationSection />
    <VisitSection />
  </main>
  <SiteFooter />
</template>

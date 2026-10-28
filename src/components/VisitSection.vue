<script setup lang="ts">
import { visitDetails } from "../data/site";
</script>

<template>
  <section id="visit" class="visit section" aria-labelledby="visit-title">
    <div class="visit__heading">
      <div v-reveal class="section-index">
        <span>04</span>
        <p>FIND US</p>
      </div>
      <h2 id="visit-title" v-reveal class="display-title">
        城市一隅，<br />
        等你<span>寻味。</span>
      </h2>
    </div>
    <div class="visit__info">
      <div
        v-for="detail in visitDetails"
        :key="detail.label"
        v-reveal
        class="visit__block"
      >
        <p class="visit__label">{{ detail.label }}</p>
        <p v-if="detail.contacts">
          <template v-for="(contact, index) in detail.contacts" :key="contact.href">
            <a :href="contact.href">{{ contact.label }}</a>
            <br v-if="index < detail.contacts.length - 1" />
          </template>
        </p>
        <p v-else>
          <template v-for="(line, index) in detail.lines" :key="line">
            {{ line }}
            <br v-if="detail.link || index < detail.lines.length - 1" />
          </template>
        </p>
        <a
          v-if="detail.link"
          class="text-link"
          :href="detail.link.href"
          target="_blank"
          rel="noreferrer"
        >
          {{ detail.link.label }} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
    <div v-reveal class="visit__map" aria-hidden="true">
      <svg viewBox="0 0 1200 380" preserveAspectRatio="none">
        <path
          class="map-road map-road--wide"
          d="M-20 305C160 220 310 260 460 178S730 80 1220 38"
        />
        <path
          class="map-road"
          d="M-40 120C180 185 330 130 520 220S880 330 1240 260"
        />
        <path class="map-road" d="M250-20C220 92 310 190 270 400" />
        <path class="map-road" d="M800-20C720 120 870 250 790 400" />
        <path
          class="map-river"
          d="M-40 385C170 300 310 355 455 300s260-115 430-80 220 60 355 30"
        />
      </svg>
      <span class="map-label map-label--one">渠村集</span>
      <span class="map-label map-label--two">濮阳市</span>
      <span class="map-label map-label--three">河南省</span>
      <span class="map-pin"><i></i><b>山野</b></span>
    </div>
  </section>
</template>

<template>
  <div class="ticker" aria-hidden="true">
    <div class="ticker__track">
      <template v-for="iteration in 2" :key="iteration">
        <span>循时而食</span><b>✦</b>
        <span>山野风物</span><b>✦</b>
        <span>人间烟火</span><b>✦</b>
      </template>
    </div>
  </div>
</template>

<template>
  <section id="space" class="space section" aria-labelledby="space-title">
    <div class="space__gallery">
      <div
        v-reveal
        class="space__image space__image--main image-frame"
        role="img"
        aria-label="暖光下的山野餐厅大厅"
      ></div>
      <div
        v-reveal
        class="space__image space__image--detail image-frame"
        role="img"
        aria-label="餐厅桌上的手作陶器"
      ></div>
      <span v-reveal class="space__caption">空间 · 器皿 · 日常</span>
    </div>
    <div class="space__content">
      <div v-reveal class="section-index">
        <span>03</span>
        <p>OUR SPACE</p>
      </div>
      <h2 id="space-title" v-reveal class="display-title">
        留白，<br />
        也是<span>一种款待。</span>
      </h2>
      <p v-reveal class="space__copy">
        原木、粗陶、微光，围绕一张张餐桌自然生长。
        这里没有多余的装饰，只留下食物、交谈，
        以及窗外缓慢流动的城市。
      </p>
      <dl v-reveal class="space__facts">
        <div><dt>68</dt><dd>个舒适席位</dd></div>
        <div><dt>03</dt><dd>间独立包房</dd></div>
        <div><dt>12:00</dt><dd>自然采光</dd></div>
      </dl>
    </div>
  </section>
</template>

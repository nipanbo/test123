<template>
  <section id="story" class="intro section">
    <div v-reveal class="section-index">
      <span>01</span>
      <p>OUR PHILOSOPHY</p>
    </div>
    <div class="intro__content">
      <h2 v-reveal class="display-title">
        把山的鲜，<br />
        带到城的<span>桌前。</span>
      </h2>
      <div v-reveal class="intro__copy">
        <p>
          清晨从山里出发的笋、菌与野菜，跨越晨雾来到灶台。
          我们只做一件事：尊重食材，认真做饭。
        </p>
        <a class="text-link" href="#space">
          认识山野 <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
    <div class="intro__visual">
      <div
        v-reveal
        class="intro__image image-frame"
        role="img"
        aria-label="山间的竹林与雾气"
      ></div>
      <div v-reveal class="intro__stamp" aria-hidden="true">
        <svg viewBox="0 0 150 150">
          <defs>
            <path
              id="stamp-circle"
              d="M75,75 m-55,0 a55,55 0 1,1 110,0 a55,55 0 1,1 -110,0"
            />
          </defs>
          <text>
            <textPath href="#stamp-circle">
              FROM MOUNTAIN TO TABLE · SIMPLE &amp; TRUE ·
            </textPath>
          </text>
          <path
            class="stamp-mountain"
            d="M43 84 61 58l15 20 13-17 19 24M55 91h41"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

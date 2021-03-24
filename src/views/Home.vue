<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>咕噜UI</h1>
      <h2>一个学习的UI框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-Vue" />
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts" />
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-lightning" />
    </svg>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav }
};
</script>
<style lang="scss" scoped>
$grey: #485145;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(193, 222, 186, 1) 0%,
    rgba(167, 193, 162, 1) 64%,
    rgba(164, 189, 159, 1) 100%
  );
  // 圆弧第一种方案
  // border-bottom-left-radius: 50% 40px;
  // border-bottom-right-radius: 50% 40px;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $grey;
      display: inline-block;
      color: #e5e6e4;
      font-size: 14px;
      border-radius: $border-radius;
      padding: 8px 24px;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
.features {
  > svg {
    width: 32px;
    height: 32px;
  }
}
</style>

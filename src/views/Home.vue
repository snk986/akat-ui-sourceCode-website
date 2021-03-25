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
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue" />
        </svg>
        <h3>基于 Vue 3</h3>
        <p>项目使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts" />
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写（非严格检查）</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-lightning" />
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  >ul {
    display: flex;
    flex-wrap: wrap;
    >li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }
}
</style>

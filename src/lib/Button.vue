<template>
<!-- <div> -->
    <!-- <button class="gulu-button"
      :class="classes"
      :disabled="disabled"
      v-bind="$attrs"
    > -->
    <button class="gulu-button"
      :class="classes"
      :disabled="disabled"
    >
    <span class="gulu-loadingIndicator" v-if="loading"></span>
      <slot />
    </button>
  <!-- </div> -->
</template>
<script lang="ts">
import { computed } from 'vue'
export default {
  // vu3属性绑定：1、默认所有属性都绑定到根元素；2、使用inheritAttrs: false,取消默认绑定；3、使用$attrs或者context.attrs获取所有属性
  // 4、使用v-bind="$attrs"批量绑定属性 5、使用const {size, ...rest} = context.attrs将属性分开

  // inheritAttrs: false, //2、使用inheritAttrs: false,取消默认绑定；

  // props vs attrs 区别
  // 1、props要先声明才能取值，attrs不用先声明。2、props不包含事件，attrs包含。 3、props支持string以外的类型，attrs只有string类型
  // 4、props没有声明的属性，会自动跑到attrs里
  props:{
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
     level: {
      type: String,
      default: "normal",
    },
     disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {theme, size, level} = props
    const classes = computed(() => {
      // 这句话作用：对象里[]是key，:后面是value，如果theme是未定义的，key就失效，那么返回空对象，反之，返回key
      return {
        [`gulu-theme-${theme}`]: theme,
        [`gulu-size-${size}`]: size,
        [`gulu-level-${level}`]: level,
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
// UI库的css注意事项
// 1、不能使用scoped，因为data-v-xxx每次运行可能不同，必须输出稳定不变的class选择器，方便使用者覆盖
// 2、必须加前缀，.button、.theme-link不行，容易被使用者覆盖；.gulu-button、.gulu-theme-link可以，不容易覆盖
$h: 16px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.gulu-button {
  box-sizing: border-box;
  // width: $h*4;
  height: $h*2;
  padding: 0 12px;
  cursor: pointer;
  white-space: nowrap; //	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  // 这句是在firefox里面去按钮的默认外边框
  &::-moz-focus-inner {
    border: 0;
  }
  &.gulu-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
  &.gulu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.gulu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
   &.gulu-theme-button {
    &.gulu-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-link {
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.gulu-theme-text {
    &.gulu-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.gulu-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
   &.gulu-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .gulu-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
  @keyframes gulu-spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
  }
}
</style>
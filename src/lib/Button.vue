<template>
    <button v-bind="rest" class="gulu-button"
      :class="`theme-${theme}`"
    >
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  // vu3属性绑定：1、默认所有属性都绑定到根元素；2、使用inheritAttrs: false,取消默认绑定；3、使用$attrs或者context.attrs获取所有属性
  // 4、使用v-bind="$attrs"批量绑定属性 5、使用const {size, ...rest} = context.attrs将属性分开
  inheritAttrs: false,
  // props vs attrs 区别
  // 1、props要先声明才能取值，attrs不用先声明。2、propss不包含事件，attrs包含。 3、props支持string以外的类型，attrs只有string类型
  // 4、props没有声明的属性，会自动跑到attrs里
  props:{
    theme: {
      type: String,
      default: 'button',
    },
  },
  setup(props,context) {
    const {size, ...rest} = context.attrs
    return {size, rest}
  }
}
</script>
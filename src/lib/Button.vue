<template>
  <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  // vu3属性绑定：1、默认所有属性都绑定到根元素；2、使用inheritAttrs: false,取消默认绑定；3、使用$attrs或者context.attrs获取所有属性
  // 4、使用v-bind="$attrs"批量绑定属性 5、使用const {size, ...rest} = context.attrs将属性分开
  inheritAttrs: false,
  setup(props,context) {
    const {size, ...rest} = context.attrs
    return {size, rest}
  }
}
</script>
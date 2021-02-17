<template>
  <div>
    <button @click="toggle" :class="{checked:value}">
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    console.log(props.value, 111);

    const toggle = () => {
      context.emit("update:value", !props.value);
      // this.$emit()
    };
    return { toggle };
  }
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: #dcdfe6;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 300ms;
  }
  &.checked {
    background: #409eff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
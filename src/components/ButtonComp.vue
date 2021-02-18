<template>
  <div>
    Button 示例
  </div>
  <h1>示例1</h1>
  <div class="button-box">
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(props) {
    const onClick = () => {
    }
    return {onClick}
  }
}
</script>
<style lang="scss" scoped>
.button-box {
  display: inline-flex;  //inline-flex是包裹在一起的元素为一小行(指一行的一小部分)。flex是包裹在一起的元素占一行。inline-block是各个元素占一小行
  justify-content: center;
  align-items: center;
}
</style>
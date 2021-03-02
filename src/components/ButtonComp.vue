<template>
  <div>
    Button 示例
  </div>
  <h1>示例1</h1>
  <div class="button-box">
    <Button>按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
  <h1>示例2</h1>
  <div class="button-box">
    <Button size="big">大按钮</Button>
    <Button>普通按钮</Button>
    <Button size="small">小按钮</Button>
  </div>
  <div class="button-box">
      <Button theme="link" size="big">大按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button size="small" theme="link">小按钮</Button>
    </div>
    <div class="button-box">
      <Button size="big" theme="text">大按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button size="small" theme="text">小按钮</Button>
    </div>
    <h1>示例3</h1>
  <div class="button-box">
     <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="button-box">
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div class="button-box">
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
    <h1>示例4</h1>
  <div class="button-box">
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
  <h1>示例5</h1>
  <div class="button-box">
    <Button loading>加载中</Button>
    <Button >加载完毕</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
export default {
  components: { Button },
  setup(props) {
    const onClick = () => {
    }
    return {onClick}
  }
}
</script>
<style lang="scss" scoped>
.button-box {
  // display: inline-flex;  //inline-flex是包裹在一起的元素为一小行(指一行的一小部分)。flex是包裹在一起的元素占一行。inline-block是各个元素占一小行
  display: flex;
  // justify-content: center;
  align-items: center;
}
</style>
<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay"></div>
    <div class="gulu-dialog-wraper">
      <div class="gulu-dialog" >
        <header>标题</header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main">确定</Button>
          <Button>取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: { Button }
};
</script>
<style lang="scss" scoped>
.gulu-dialog-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 200px;
  background: darkslategray;
}
.gulu-dialog-wraper {
  position: relative;
  width: 100%;
  height: 100%;
  & .gulu-dialog {
    width: 500px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
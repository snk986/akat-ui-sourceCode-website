<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay" @click="clickOnOverlay"></div>
    <div class="gulu-dialog-wraper">
      <div class="gulu-dialog" >
        <header>
          标题
          <span @click="close" class="gulu-dialog-close"> X </span>
        </header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main" @click="confirm">确定</Button>
          <Button @click="cancel">取消</Button>
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
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    confirm: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  components: { Button },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const clickOnOverlay = () => {
      if(props.closeOnClickOverlay) {
        close()
      }
    }
    const confirm = () => {
      // js最新语法：可选链 props.confirm?.() !== false
      if(props.confirm && props.confirm() !== false) {
        close()
      }
    }
    const cancel = () => {
      if(props.cancel && props.cancel() !== false) {
        close()
      }
    }
    return { close, clickOnOverlay, confirm, cancel }
  }
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
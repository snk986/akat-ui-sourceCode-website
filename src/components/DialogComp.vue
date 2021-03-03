<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <!-- 两种写法 -->
  <!-- <Dialog :visible="x" @update:visible="x = $event"></Dialog> -->
  <!-- <Dialog v-model:visible="x"></Dialog> -->
  <!-- 点击遮罩层不能关闭 -->
  <Dialog 
  v-model:visible="x" 
  :closeOnClickOverlay="false" 
  :confirm="fn1"
  :cancel="fn2"
  ></Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue"

export default {
  components: { 
    Dialog, Button 
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    const fn1 = () => {
      console.log("confirm");
      return false
    }
    const fn2 = () => {
      console.log("cancel");
    }
    return { x , toggle, fn1, fn2 }
  }
};
</script>
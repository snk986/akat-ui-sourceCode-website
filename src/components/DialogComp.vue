<template>
  <div>Dialog 示例</div>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <!-- <h1>示例1</h1>
  <div style="position:relative; z-index:1">
    <Button @click="toggle">toggle</Button> -->
    <!-- 两种写法 -->
    <!-- <Dialog :visible="x" @update:visible="x = $event"></Dialog> -->
    <!-- <Dialog v-model:visible="x"></Dialog> -->
    <!-- 点击遮罩层不能关闭 -->
    <!-- <Dialog 
    v-model:visible="x" 
    :closeOnClickOverlay="false" 
    :confirm="fn1"
    :cancel="fn2"
    >
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>
        可以添加标签内容
      </div>
      <div>
        vue3具名插槽写法v-slot:
      </div>
    </template>
    </Dialog>
  </div>
  <h1>示例2：一句话打开Dialog</h1>
    <Button @click="showDialog">show</Button>
   这两个div演示dialog被层级覆盖bug 
  <div style="position:relative; z-index:2; width:80%;height:80%;background:red;"></div> -->
</template>
<script lang="ts">
// import Dialog from "../lib/Dialog.vue";
// import { openDialog } from "../lib/openDialog";
// import Button from "../lib/Button.vue";
// import {ref} from "vue"
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';

export default {
  components: { 
    Demo
  },
  setup() {
    // const x = ref(false)
    // const toggle = () => {
    //   x.value = !x.value
    // }
    // const showDialog = () => {
    //   openDialog({
    //     title:'标题',
    //     content:'你好',
    //     closeOnClickOverlay: true,
    //     // 这里用confirm1与cancel1是为了区分传递函数和confirm与cancel接收参数的区别，正式版最好写confirm与cancel
    //     ok: () => {
    //       console.log('confirm');
    //     },
    //     cancel: () => {
    //       console.log('cancel');
    //     }
    //   })
    // }
    
    // const fn1 = () => {
    //   console.log("confirm");
    //   return false
    // }
    // const fn2 = () => {
    //   console.log("cancel");
    // }
    // return { x , toggle, showDialog, fn1, fn2 }
    return { 
      Dialog1Demo,
      Dialog2Demo 
    }
    
  }
};
</script>
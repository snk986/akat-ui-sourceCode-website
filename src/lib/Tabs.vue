<template>
  <div>
    <!-- {{defaults[0]}} ++++  第二步
    {{defaults[1]}} -->
    <!-- <component :is="defaults[0]" />
    <component :is="defaults[1]" /> -->
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index"/>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue"
export default {
  setup(props, context) {
    // 第一步
    // console.log({...context.slots.default()[0]});
    // console.log({...context.slots.default()[1]});
    // 第二步
    const defaults = context.slots.default()
    // 每一个Tab.vue组件最终会导出为一个对象
    console.log(defaults[0].type === Tab);
    defaults.map((tag) => {
      if(tag.type !== Tab){
        throw new Error('Tabs组件的子标签必须是Tab')
      }
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    console.log(titles); 
    return {
      defaults, titles
    }
  }
}
</script>
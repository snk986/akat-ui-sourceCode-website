<template>
  <!-- <div>Tabs 的文档</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs> -->
  <!-- <p>{{x}}</p> -->
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
</template>
<script lang="ts">
// import Tabs from "../lib/Tabs.vue";
// import Tab from "../lib/Tab.vue";
// import { ref } from 'vue';
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
export default {
  components: {
    Demo
  },
  setup(props) {
    // const x = ref('导航2')
    return {
      Tabs1Demo
    }
  }
};
</script>
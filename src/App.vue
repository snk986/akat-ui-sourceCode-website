<template>
<router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup(props) {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide('aside', asideVisible)  //set
  }
}
</script>

<template>
<router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue'
export default {
  name: 'App',
  setup(props) {
    const asideVisible = ref(false)
    provide('aside', asideVisible)  //set
  }
}
</script>

<template>
<router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup(props) {
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide('aside', asideVisible)  //set
    router.afterEach(() => {
      if(width <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>

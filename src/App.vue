<template>
<img alt="Vue logo" src="./assets/logo.png" />
<div>hi</div>
<Frank msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import Frank from './components/Frank.vue'

export default {
  name: 'App',
  components: {
    Frank
  }
}
</script>

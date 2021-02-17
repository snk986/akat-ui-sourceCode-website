<template>
  <div>
    <SwitchLib v-model:value="checked"/>
  </div>
</template>
<script lang="ts">
  import SwitchLib from '../lib/SwitchLib.vue'
import { ref } from 'vue'
  export default {
    components: {SwitchLib},
    setup() {
      const checked = ref(false)
      return {checked}
    }  
  }
</script> 
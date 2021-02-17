<template>
  <div>
    <SwitchLib :value="checked" @input="checked=$event"/>
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
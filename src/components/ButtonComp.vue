<template>
  <div>
    Button 示例
  </div>
  <h1>示例1</h1>
  <div>
    <Button 
      @click="onClick"
      @focus="onClick"
      @mouseover="onClick"
    >nihao </Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(props) {
    const onClick = () => {
    }
    return {onClick}
  }
}
</script>

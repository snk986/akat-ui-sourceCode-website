<template>
    <div class="gulu-tabs">
      <div class="gulu-tabs-nav" ref="container">
        <div class="gulu-tabs-nav-item"
          :class="{selected: t === selected}"
          v-for="(t,index) in titles"
          :ref="el => { if (t === selected) selectedItem = el}" 
          :key="index"
          @click="select(t)"
        >{{t}}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
      </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title"/>
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue"
import { computed, ref, onMounted, onUpdated, watchEffect } from 'vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default()
    console.log(Tab,'Tab');
    defaults.map((tag) => {
      console.log(tag.type,'tag.type');
      // @ts-ignore
      // if(tag.type.name !== Tab.name){ 如果build报错就用name来判断
      if(tag.type !== Tab){ 
        throw new Error('Tabs组件的子标签必须是Tab')
      }
    })
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    }) 
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const navRender = () => {
      const { width } = selectedItem.value.getBoundingClientRect() 
      indicator.value.style.width = width + 'px'  
      const { left:left1 } = container.value.getBoundingClientRect()
      const { left:left2 } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    // @ts-ignore  如果watchEffect导致组件更新不正确，用上面的API
    // onMounted(navRender) 
    // @ts-ignore
    // onUpdated(navRender)
    onMounted(() => {
      watchEffect(navRender, {flush: 'post'})
    })   
    return {
      defaults, titles, current, select, selectedItem, indicator, container
    }
  }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  // 通过css来改变内容区的内容
  // &-content {
  //   padding: 8px 0;
  //   &-item{
  //     display: none;
  //     &.selected{
  //       display: block;
  //     }
  //   }
  // }
  &-content {
    padding: 8px 0;
  }
}
</style>
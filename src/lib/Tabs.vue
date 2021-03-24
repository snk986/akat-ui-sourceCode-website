<template>
    <!-- {{defaults[0]}} ++++  第二步
    {{defaults[1]}} -->
    <!-- <component :is="defaults[0]" />
    <component :is="defaults[1]" /> -->
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
      <!-- v-for与v-if官方不推荐一起使用 -->
      <!-- <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" v-if="c.props.title === selected" :is="c" :key="index" /> -->

      <!-- 遗留bug解决与简单代码实现导航切换 -->
      <component class="gulu-tabs-content-item" :is="current" :key="current.props.title"/>

      <!-- 通过css来改变内容区的内容 -->
      <!-- <component class="gulu-tabs-content-item"
        :class="{selected: c.props.title === selected}"
        v-for="(c,index) in defaults" :is="c" :key="index" 
      /> -->
      <!-- {{current}} -->
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
    // 第一步
    // console.log({...context.slots.default()[0]});
    // console.log({...context.slots.default()[1]});
    // 第二步
    const defaults = context.slots.default()
    // 每一个Tab.vue组件最终会导出为一个对象
    // console.log(defaults[0].type === Tab);
    defaults.map((tag) => {
      if(tag.type !== Tab){
        throw new Error('Tabs组件的子标签必须是Tab')
      }
    })
    // 当前选中组件：setup只会在页面挂载的时候初始化一遍，意味着所有函数都只执行一遍，所有属性都只计算一遍，
    // 所以要引入计算函数computed，每次点击的时候对current重新计算
    const current = computed(() => {
      // console.log('重新return');
      return defaults.filter((tag) => {
        return tag.props.title === props.selected
      })[0]
    }) 
    // 所有标题
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    // 点击导航切换
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    // const navItems = ref<HTMLDivElement[]>([]) 代码优化1
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    // 导航线的宽度和位置
    const navRender = () => {
      // const divs = navItems.value  代码优化1
      // classList没有代码提示，应为div的类型为any，说明ts并不知道div是一个元素,加了ts泛型写法<HTMLDivElement[]>后，就会有提示
      // const result = divs.filter(div => div.classList.contains('selected'))[0]   代码优化1
      // const result = divs.find(div => div.classList.contains('selected')) find写法低版本，浏览器不支持
      const { width } = selectedItem.value.getBoundingClientRect() 
      indicator.value.style.width = width + 'px'  
      const { left:left1 } = container.value.getBoundingClientRect()
      const { left:left2 } = selectedItem.value.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    // onMounted只在第一次渲染执行,所以代码也要放onUpdated里面，
    // 为何onMounted也要放一次这个逻辑的代码：不放的话第一次加载导航蓝条会直接在第一个导航条，显示不正确，也无法满足导航条放在第二个的需求
    // @ts-ignore
    onMounted(navRender)  //第一次执行
    // @ts-ignore
    onUpdated(navRender)  //后面执行 
    // 下面这种方法只能配合css改变div的left来使用
    // onMounted(() => {
    //   watchEffect(navRender)
    // }) 
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
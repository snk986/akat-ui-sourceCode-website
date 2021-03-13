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
          :ref="el => { if (el) navItems[index] = el}" 
          :key="index"
          @click="select(t)"
        >{{t}}</div>
        <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
      </div>
    <div class="gulu-tabs-content">
      <!-- v-for与v-if官方不推荐一起使用 -->
      <!-- <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" v-if="c.props.title === selected" :is="c" :key="index" /> -->
      <!-- <component class="gulu-tabs-content-item" :is="current" /> -->
      <component class="gulu-tabs-content-item"
        :class="{selected: c.props.title === selected}"
        v-for="(c,index) in defaults" :is="c" :key="index" 
      />
      <!-- {{current}} -->
    </div>
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue"
import { computed, ref, onMounted, onUpdated } from 'vue';
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
      // console.log(title,555);
      context.emit('update:selected', title)
    }
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const navRender = () => {
      // onMounted只在第一次渲染执行,所以代码也要放onUpdated里面，
      // 为何onMounted也要放一次这个逻辑的代码：不放的话第一次加载导航蓝条会直接在第一个导航条，显示不正确，也无法满足导航条放在第二个的需求
      // console.log({...navItems.value});
      const divs = navItems.value
      // classList没有代码提示，应为div的类型为any，说明ts并不知道div是一个元素,加了ts泛型写法<HTMLDivElement[]>后，就会有提示
      const result = divs.filter(div => div.classList.contains('selected'))[0]
      // const result = divs.find(div => div.classList.contains('selected')) find写法低版本，浏览器不支持
      // console.log(result);
      const { width } = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'   
      const { left:left1 } = container.value.getBoundingClientRect()
      const { left:left2 } = result.getBoundingClientRect()
      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    // @ts-ignore
    onMounted(navRender)
    // @ts-ignore
    onUpdated(navRender)
    return {
      defaults, titles, current, select, navItems, indicator, container
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
  &-content {
    padding: 8px 0;
    &-item{
      display: none;
      &.selected{
        display: block;
      }
    }
  }

}
</style>
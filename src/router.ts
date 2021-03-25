import { createWebHashHistory, createRouter } from "vue-router";
import  Home  from './views/Home.vue';
import  Doc  from './views/Doc.vue';
import  DocDemo  from './components/DocDemo.vue';
import  SwitchComp  from './components/SwitchComp.vue';
import  ButtonComp  from './components/ButtonComp.vue';
import  DialogComp  from './components/DialogComp.vue';
import  TabsComp  from './components/TabsComp.vue';
import { h } from "vue";
import Markdown from './components/Markdown.vue'
const md = filename => h(Markdown, {path:`../markdown/${filename}.md`, key: filename})

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: md('intro')},
        {path: 'install', component: md('install')},
        {path: 'get-started', component: md('getStarted')},
        {path: 'switch', component: SwitchComp},
        {path: 'button', component: ButtonComp},
        {path: 'dialog', component: DialogComp},
        {path: 'tabs', component: TabsComp},
      ]
    },
  ]
})

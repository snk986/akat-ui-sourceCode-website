import { createWebHashHistory, createRouter } from "vue-router";
import  Home  from './views/Home.vue';
import  Doc  from './views/Doc.vue';
import  SwitchComp  from './components/SwitchComp.vue';
import  ButtonComp  from './components/ButtonComp.vue';
import  DialogComp  from './components/DialogComp.vue';
import  TabsComp  from './components/TabsComp.vue';
import { h } from "vue";
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/getStarted.md'
const md = (string, key) => h(Markdown, {content: string, key})

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro,'intro')},
        {path: 'install', component: md(install, 'install')},
        {path: 'get-started', component: md(getStarted, 'getStarted')},
        {path: 'switch', component: SwitchComp},
        {path: 'button', component: ButtonComp},
        {path: 'dialog', component: DialogComp},
        {path: 'tabs', component: TabsComp},
      ]
    },
  ]
})

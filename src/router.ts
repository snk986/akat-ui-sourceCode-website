import { createWebHashHistory, createRouter } from "vue-router";
import  Home  from './views/Home.vue';
import  Doc  from './views/Doc.vue';
import  DocDemo  from './components/DocDemo.vue';
import  SwitchComp  from './components/SwitchComp.vue';
import  ButtonComp  from './components/ButtonComp.vue';
import  DialogComp  from './components/DialogComp.vue';
import  TabsComp  from './components/TabsComp.vue';
import  Intro  from './views/Intro.vue';
import  Install  from './views/Install.vue';
import  GetStarted  from './views/GetStarted.vue';

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc,
      children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: Intro},
        {path: 'install', component: Install},
        {path: 'get-started', component: GetStarted},
        {path: 'switch', component: SwitchComp},
        {path: 'button', component: ButtonComp},
        {path: 'dialog', component: DialogComp},
        {path: 'tabs', component: TabsComp},
      ]
    },
  ]
})

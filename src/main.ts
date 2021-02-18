// 要先引入UI库的gulu.scss，否则组件的样式会被总的gulu.scss样式覆盖，因为这个时候DOM已经挂载，组件样式生效
import './lib/gulu.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'


const app = createApp(App)
app.use(router)
app.mount('#app')

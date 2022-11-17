import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index' // 加载 router 底下的 index.js 路由配置文件

const app = createApp(App)
app.use(router)
app.use(ElementPlus) // 没安装 Element UI 可以不用
app.mount('#app')
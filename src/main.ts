import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
// import hyRequest from './service'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from './store'

const app = createApp(App)

// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
// 初始化store中token, 用户数据, 用户菜单...数据
setupStore()

app.mount('#app')

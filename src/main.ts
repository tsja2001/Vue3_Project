import { createApp } from 'vue'
// 引入格式化样式库
import 'normalize.css'
// 引入自定义的格式化样式
import '@/assets/index.css'

import App from './App.vue'

import router from './router'
// import hyRequest from './service'
import store, { setupStore } from './store'

import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/el-loading.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(
  ElementPlusIconsVue
)) {
  app.component(key, component)
}

app.use(store)
// 用于解决刷新后, vuex中缓存token userinfo menulist等数据情况问题
setupStore()
app.use(router)
app.mount('#app')

// hyRequest.request({
//   url: '/wuhu',
//   method: 'GET',
//   showLoading: true
// })

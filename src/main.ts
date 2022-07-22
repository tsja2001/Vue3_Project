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
import { registerProperties } from './global/register-properties'
import { globalRegister } from './global'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store)
setupStore()
app.use(router)
// 注册全局属性
app.use(globalRegister)

// registerProperties(app)

app.mount('#app')

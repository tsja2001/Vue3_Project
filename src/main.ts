import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
import hyRequest from './service'
import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/display.css'
import 'element-plus/theme-chalk/el-loading.css'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
// app.component(ElButton.name, ElButton)
// app.component(ElInput.name, ElInput)

app.mount('#app')

// console.log(11)
// console.log(11)

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// hyRequest
//   .request<DataType>({
//     url: 'home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
// hyRequest
//   .get<DataType>({
//     url: 'home/multidata'
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

import { createApp } from "vue"

import App from "./App.vue"

import router from "./router"
import hyRequest from "./service"
import store from "./store"

import "element-plus/theme-chalk/base.css"
import "element-plus/theme-chalk/display.css"
import "element-plus/theme-chalk/el-loading.css"

const app = createApp(App)

app.use(router)
app.use(store)
app.mount("#app")

hyRequest.request({
  url: "/wuhu",
  method: "GET",
  showLoading: true
})

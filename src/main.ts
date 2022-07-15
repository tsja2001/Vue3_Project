import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './service/axios_demo'
import hyRequest from './service'
// import 'element-plus/theme-chalk/base.css'
// import { ElInput } from 'element-plus'
// import { ElButton } from 'element-plus'

const app = createApp(App)

app.use(router)
app.use(store)
// app.component(ElButton.name, ElButton)
// app.component(ElInput.name, ElInput)

app.mount('#app')

console.log(11)
console.log(11)

hyRequest.request({
  url: 'home/multidata',
  method: 'GET'
})

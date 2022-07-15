import axios, { AxiosResponse } from 'axios'

// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res: AxiosResponse) => {
//     console.log(res.data)
//   })

axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 100

// axios.get('/get').then((res: AxiosResponse) => {
//   // console.log(res.data)
// })

// axios.interceptors.request.use(
//   (config) => {
//     // 请求的配置会被传入, 可以更改请求
//     // 如果改变url,进行转发; 添加token; 设置loading动画......
//     // 最后需要返回config, 使用返回的config进行请求
//     config.url = 'xxxxx'

//     return config
//   },
//   (err) => {
//     return err
//   }
// )
// axios.interceptors.response.use(
//   (res) => {
//     // 拿到返回的结果, 可以处理服务器返回结果,
//     // axios.get('/url').then(res) 拿到的数据, 就是在此返回的数据

//     return res.data
//   },
//   (err) => {
//     return err
//   }
// )

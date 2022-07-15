import axios, { AxiosInstance } from 'axios'
import { HYRequestConfig, HYRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
// import { ILoadingInstance } from 'element-plus/lib'

class HYRequest {
  instance: AxiosInstance
  // 拦截器
  interceptors?: HYRequestInterceptors
  // 是否显示加载
  showLoding: boolean
  loadingInstance?: any

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    // 保存传入的拦截器
    this.interceptors = config.interceptors
    // 设置是否显示加载(不传入时, 默认为true)
    this.showLoding = config.showLoding ?? true
    // 为创建出的实例对象添加拦截器
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    // 添加响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.resopnseInterceptor,
      this.interceptors?.resopnseInterceptorCatch
    )

    // 为所有实例对象都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoding) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: '芜湖请求中',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()

        // 可以在此验证返回结果是否成功
        const data = res.data
        if (data.retuenCode == '-1001') {
          console.log('请求失败')
        } else {
          return data
        }
        return res
      },
      (err) => {
        this.loadingInstance?.close()

        if (err.response.status == 404) {
          console.log('404 Error')
        }
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 执行一遍拦截器
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoding === false) {
        this.showLoding = false
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 执行拦截器
          if (config.interceptors?.resopnseInterceptor) {
            // res = config.interceptors.resopnseInterceptor(res)
          }
          console.log(res)

          this.showLoding = true

          resolve(res)
        })
        .catch((err) => {
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PPOST' })
  }
  delete<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest

import { formatUtcString } from '@/utils/date-format'
import { App } from 'vue'

// 在app上注册全局属性$filters (全局属性一般使用$开头)
export function registerProperties(app: App): void {
  app.config.globalProperties.$filters = {
    foo: () => {
      console.log('11111')
    },
    formatTime(e: string) {
      return formatUtcString(e)
    }
  }
}

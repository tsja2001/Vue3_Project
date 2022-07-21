import {
  createStore,
  Store,
  useStore as useVuexStore
} from '../../node_modules/vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'tsjaaa',
      age: 10,
      height: '123'
    }
  },
  mutations: {
    mutationsFn(state) {
      state.age++
    }
  },
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
})

export default store

/**
 * 初始化加载登录时存储的
 * token, 用户数据, 用户菜单等数据
 */
export function setupStore(): void {
  store.dispatch('login/loadLocalLogin')
}

// 自定义一个useStore功能调用vuex的useStore, 增加了自定义类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

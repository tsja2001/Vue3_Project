import {
  createStore,
  Store,
  useStore as useVuexStore
} from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 10
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store

// 刷新时, 重新读取存储的数据
export function setupStore(): void {
  store.dispatch('login/loadLoaclLogin')
}

// 自定义useStore
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

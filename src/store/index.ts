import { createStore } from '../../node_modules/vuex'
import { IRootState } from './types'
import login from './login/login'

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
  getters: {
    // fn1(state, getters) {
    //   console.log(state.name)
    //   getters.fn2()
    // },
    // fn2(state, getters) {
    //   console.log('fn2被调用')
    // }
  },
  actions: {},
  modules: {
    login
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

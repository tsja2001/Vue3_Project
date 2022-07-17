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

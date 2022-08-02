import { createStore } from 'vuex'
import { IRootStore } from './types'
import login from './login/login'

const store = createStore<IRootStore>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 10
    }
  },
  mutations: {
    // changeName: (state) => {
    // }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store

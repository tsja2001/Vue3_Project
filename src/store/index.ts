import {
  createStore,
  Store,
  useStore as useVuexStore
} from '../../node_modules/vuex'
import { IRootState, IStoreType } from './types'

import login from './login/login'
import system from './main/system/system'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'tsjaaa',
      age: 10,
      height: '123',
      // 保存部门数据
      entrieDepartment: [],
      // 保存角色数据
      entrieRole: [],
      // 保存菜单数据
      entrieMenu: []
    }
  },
  mutations: {
    mutationsFn(state) {
      state.age++
    },
    changeEntireDepartment(state, list) {
      state.entrieDepartment = list
    },
    changeEntireRole(state, list) {
      state.entrieRole = list
    },
    changeEntireMenu(state, list) {
      state.entrieMenu = list
    }
  },
  getters: {},
  actions: {
    // 获取初始数据
    async getInitialDataAction({ commit }) {
      // 1. 请求部门数据
      const departmentRes = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentRes.data
      // 2. 请求角色数据
      const roleRes = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleRes.data
      // 3. 请求菜单数据
      const menuResult = await getPageListData('/menu/list', {})
      const { list: menuList } = menuResult.data
      // 3. 保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
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
  // 获取部门和角色数据(用于用户编辑和新建时的modal可以显示对应数据)
  store.dispatch('getInitialDataAction')
}

// 自定义一个useStore功能调用vuex的useStore, 增加了自定义类型
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

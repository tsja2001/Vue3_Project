import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import { IAccount } from '@/service/login/type'
import localCache from '@/utils/caches'
import router from '@/router'

import { removeStyle } from 'element-plus/es/utils'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    // 被帐号登录组件, 所调用而开始登陆逻辑
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1. 实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // 在state和本地分别存储token
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      // 在state和本地分别存储userInfo
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // 在state和本地分别存储userMenus
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4. 各种数据请求完了, 跳到首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    },
    // 手机号登陆
    phoneLoginAction({ commit }, payload: any) {
      return
    }
  }
}

export default loginModule

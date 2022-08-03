import { Module } from 'vuex'
import { IRootStore } from '../types'
import { ILoginState } from './types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuById
} from '@/service/request/login/login'
import { IAccount } from '@/service/request/login/types'
import localCache from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: '',
      menu: []
    }
  },
  mutations: {
    changToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenu(state, menu) {
      state.menu = menu
    }
  },
  getters: {},
  actions: {
    // 账号密码登陆
    async accountLoginAction(
      { commit },
      payload: IAccount
    ) {
      // 1. 请求登陆
      const loadingRes = await accountLoginRequest(payload)
      const { id, token } = loadingRes.data
      // vuex和local中存储token
      commit('changToken', token)
      localCache.setCache('token', token)

      // 2. 登录成功后, 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      commit('changeUserInfo', userInfoResult.data)
      localCache.setCache('userInfo', userInfoResult.data)

      // 3. 加载菜单页面
      const userMenuList = await requestUserMenuById(id)
      commit('changeUserMenu', userMenuList.data)
      localCache.setCache('userMenu', userMenuList.data)

      // 4. 跳转到首页
      router.push('/main')
    },

    // 手机号登陆
    phonenumLoginAction({ commit }, payload: any): void {
      // commit()
      console.log('手机号登陆', payload)
    },

    // 用于解决刷新后, vuex中缓存token userinfo menulist等数据情况问题
    // 重新读区存储中的token userinfo menulist, 保存到vuex中
    loadLoaclLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        // tokne
        commit('changToken', token)
        // userinfo
        const userInfoResult =
          localCache.getCache('userInfo')
        commit('changeUserInfo', userInfoResult)
        // menulist
        const userMenuList = localCache.getCache('userMenu')
        commit('changeUserMenu', userMenuList)
      }
    }
  }
}

export default loginModule

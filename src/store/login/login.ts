import { Module } from 'vuex'
import { IRootStore } from '../types'
import { ILoginState } from './types'
import { accountLoginRequest } from '@/service/request/login/login'
import { IAccount } from '@/service/request/login/types'

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      userInfo: {},
      token: ''
    }
  },
  mutations: {
    changToken(state, token) {
      state.token = token
    }
  },
  getters: {},
  actions: {
    // 账号密码登陆
    async accountLoginAction(
      { commit },
      payload: IAccount
    ) {
      const loadingRes = await accountLoginRequest(payload)
      const { id, token } = loadingRes.data
      commit('changToken', token)
    },
    // 手机号登陆s
    phonenumLoginAction({ commit }, payload: any): void {
      // commit()
      console.log('手机号登陆', payload)
    }

    // 16: 06
  }
}

export default loginModule

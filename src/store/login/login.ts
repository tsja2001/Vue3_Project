import { Module } from 'vuex'
import { IRootStore } from '../types'
import { ILoginState } from './types'

const loginModule: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      name: 'aaa'
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any): void {
      console.log('账号密码登陆', payload)
      // commit()
    },
    phonenumLoginAction({ commit }, payload: any): void {
      // commit()
      console.log('手机号登陆', payload)
    }
  }
}

export default loginModule

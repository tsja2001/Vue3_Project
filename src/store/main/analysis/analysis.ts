import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard'
import { Module } from 'vuex'
import { IRootState } from '../../types'
import { IDashboardState } from './types'

const dashboardModel: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsFavor: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressGoodsFavor(state, list) {
      state.addressGoodsFavor = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryGoodsCount = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryGoodsCount.data)

      const categoryGoodsSale = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categoryGoodsSale.data)

      const categoryGoodsFavor = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryGoodsFavor.data)

      const addressGoodsSale = await getAddressGoodsSale()
      commit('changeAddressGoodsFavor', addressGoodsSale.data)

      console.log(
        categoryGoodsCount,
        categoryGoodsSale,
        categoryGoodsFavor,
        addressGoodsSale
      )
    }
  }
}

export default dashboardModel

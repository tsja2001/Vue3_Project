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
      const categoryGoodsSale = await getCategoryGoodsSale()
      const categoryGoodsFavor = await getCategoryGoodsFavor()
      const addressGoodsSale = await getAddressGoodsSale()

      commit('changeCategoryGoodsCount', categoryGoodsCount.data)
      commit('changeCategoryGoodsSale', categoryGoodsSale.data)
      commit('changeCategoryGoodsFavor', categoryGoodsFavor.data)
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

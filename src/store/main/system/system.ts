import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'
import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, count: number) {
      state.usersCount = count
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  getters: {
    // 用于pageContent页面获取pagelist
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    // 用于pageContent页面获取lictCount
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 39. 请求数据时, 传入pageName, 在此处匹配到对应url进行请求
      // 如果接口规范, 可以直接使用 pageName + '/list' 进行拼接
      // 如果不规范, 可以对pageName进行switch case或者使用 map匹配
      const pageName = payload.pageName
      // 拼接pageUrl
      const pageUrl = `/${pageName}/list`

      // 进行数据请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      // 提交数据, 将请求下来的数据存在state中
      // 先为了将pageName首字母转为大写, 然后拼接
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    },

    // 删除
    async deletePageData({ dispatch }, payload: any) {
      // 拼接url
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      // 删除数据
      await deletePageData(pageUrl)
      // 重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        // todo 更改: 如果用户不在第0页, 或者改变了分页大小, 重新请求的数据继续使用原来的参数
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 新建
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)
      // 请求最新数据
      dispatch('getPageListAction', {
        pageName,
        // todo 更改: 如果用户不在第0页, 或者改变了分页大小, 重新请求的数据继续使用原来的参数
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    // 编辑
    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)
      // 请求最新数据
      dispatch('getPageListAction', {
        pageName,
        // todo 更改: 如果用户不在第0页, 或者改变了分页大小, 重新请求的数据继续使用原来的参数
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }

  // 编辑
}

export default systemModule

<template>
  <div class="user">
    <!-- 上半部分, 根据id, 用户名...进行检索的组件 -->
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="resetBtnClick"
      @queryBtnClick="queryBtnClick"
    ></page-search>
    <!-- 下半部分, 表格 -->
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { getPageData } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = getPageData()
    // 1. 处理密码逻辑
    // 41. 要实现在显示编辑modal时, 隐藏form中的密码; 显示新建modal时, 显示form中的密码
    // 换言之, 要更改modal.config.js中密码的 isHidden属性 => 对hooks使用会掉函数解决
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field == 'password'
      )

      passwordItem!.isHidden = false
    }

    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field == 'password'
      )
      passwordItem!.isHidden = true
    }

    // 2. 动态添加部门和角色列表
    // 41. 实现在vuex中获取部门和角色列表并存储在state中, 然后在user.vue获取, 打开modal时可以看到
    // 但问题是, 因为setup函数只执行一遍, user.vue已经加载完成, 但vuex数据才刚获取完. 导致modal显示不了部门和角色数据
    // 解决方法: 在setup中将要返回的modalConfig用computed包裹, 返回ref对象
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field == 'departmentId'
      )

      departmentItem!.options = store.state.entrieDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id }
        }
      )

      const roleItem = modalConfig.formItems.find(
        (item) => item.field == 'roleId'
      )
      roleItem!.options = store.state.entrieRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })

      return modalConfig
    })

    // 3. 调用hooc, 获取公共变量和函数
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallBack, editCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick,
      modalConfigRef,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>

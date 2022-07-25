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
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'
import { getPageData } from '@/hooks/usePageSearch'
import { modalConfig } from './config/modal.config'
import PageModal from '@/components/page-modal'
import { usePageModal } from '@/hooks/usePageModal'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = getPageData()

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

    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallBack, editCallBack)

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick,
      modalConfig,
      handleNewData,
      handleEditData,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>

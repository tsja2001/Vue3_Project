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

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, resetBtnClick, queryBtnClick] = getPageData()

    // 拿到modal组件, 用来控制其是否显示
    const pageModalRef = ref<InstanceType<typeof PageModal>>()

    // 用于保存表格数据, 用于在点开编辑时, 显示对应表格的数据
    const defaultInfo = ref({})

    // 监听pagecontent组件点击编辑
    const handleEditData = (item: any) => {
      // 保存点击的那一行表格的数据
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

    // 监听pagecontent组件点击新建
    const handleNewData = () => {
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

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

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
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import PageContent from '@/components/page-content'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // 获取pageContent组件, 以调用其中的查询方法
    const pageContentRef = ref<InstanceType<typeof PageContent>>()

    // 搜素组件点击重置搜索
    const resetBtnClick = () => {
      pageContentRef.value?.getPageData()
    }
    // 搜素组件点击搜索
    const queryBtnClick = (queryInfo: any) => {
      pageContentRef.value?.getPageData(queryInfo)
    }

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      resetBtnClick,
      queryBtnClick
    }
  }
})
</script>

<style scoped></style>

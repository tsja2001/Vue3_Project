import PageContent from '@/components/page-content'
import { ref } from 'vue'

export function getPageData(queryInfo: any = {}) {
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

  return [pageContentRef, resetBtnClick, queryBtnClick]
}

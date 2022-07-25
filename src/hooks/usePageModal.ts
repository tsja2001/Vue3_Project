import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type callBackFn = () => void

export function usePageModal(newCb?: callBackFn, editCb?: callBackFn): any {
  // 拿到modal组件, 用来控制其是否显示
  const pageModalRef = ref<InstanceType<typeof PageModal>>()

  // 用于保存表格数据, 用于在点开编辑时, 显示对应表格的数据
  const defaultInfo = ref({})

  // 监听pagecontent组件点击新建
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }

    newCb && newCb()
  }

  // 监听pagecontent组件点击编辑
  const handleEditData = (item: any) => {
    // 保存点击的那一行表格的数据
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }

    editCb && editCb()
  }

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}

<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
      pageName="role"
    ></page-content>
    <page-modal
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      pageName="role"
      :otherInfo="otherInfo"
    >
      <el-tree
        class="el-tree"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { modalConfig } from './config/modal.config'
import { getPageData } from '@/hooks/usePageSearch'
import { usePageModal } from '@/hooks/usePageModal'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'role',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal()

    const defaultProps = {
      children: 'children',
      label: 'name'
    }

    // 获取menu, 用计算属性包裹, 防止还没请求下来就拿到
    const store = useStore()
    const menus = computed(() => store.state.entrieMenu)

    // 用来存储el-tree组件选择到的菜单列表,
    // 之后再传递给modal组件进行统一上传
    const otherInfo = ref({})

    // 选择菜单tree事件
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]

      otherInfo.value = { menuList }
    }

    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      defaultProps,
      menus,
      otherInfo,
      handleCheckChange
    }
  }
})
</script>

<style scoped>
.el-tree {
  margin-left: 20px;
}
</style>

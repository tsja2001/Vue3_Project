<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <hy-table
      :data="userList"
      :propList="propList"
      :showSelectColumn="showSelectColumn"
      :showIndexColumn="showIndexColumn"
      @selectionChange="selectionChange"
    >
      <template #status="scope">
        <el-button
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable == 1 ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle>
        <div class="handle-btns">
          <el-button size="small" type="text" plain>
            <el-icon>
              <delete></delete>
            </el-icon>
            删除
          </el-button>
          <el-button size="small" type="text" plain>
            <el-icon>
              <edit></edit>
            </el-icon>
            编辑
          </el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/search.config'
import PageSearch from '@/components/page-search'
import { useStore } from '@/store'
import HyTable from '@/base-ui/table'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    HyTable
  },
  setup() {
    const store = useStore()

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '80' },
      { prop: 'realname', label: '真实姓名', minWidth: '80' },
      { prop: 'cellphone', label: '手机号码', minWidth: '80' },
      {
        prop: 'enable',
        label: '状态',
        minWidth: '40',
        slotName: 'status'
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '90',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '90',
        slotName: 'updateAt'
      },
      {
        // prop: 'updateAt',
        label: '操作',
        minWidth: '90',
        slotName: 'handle'
      }
    ]

    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    // 配置表格是否显示select可选框
    const showSelectColumn = true

    // 配置表格是否显示序号
    const showIndexColumn = true

    // 获table组件中传来的择行行的事件
    const selectionChange = (e: any) => {
      console.log(e)
    }

    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      showIndexColumn,
      showSelectColumn,
      selectionChange
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
}
</style>

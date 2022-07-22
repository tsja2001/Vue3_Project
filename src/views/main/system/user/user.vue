<template>
  <div class="user">
    <!-- 上半部分, 根据id, 用户名...进行检索的组件 -->
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <!-- 下半部分, 表格 -->
    <hy-table
      :data="userList"
      :propList="propList"
      :title="title"
      :showSelectColumn="showSelectColumn"
      :showIndexColumn="showIndexColumn"
      @selectionChange="selectionChange"
    >
      <!-- 自定义顶部的显示 -->
      <template #headerHandler>
        <el-button type="primary">
          <el-icon>
            <plus></plus>
          </el-icon>
          新建用户
        </el-button>
        <el-button>
          <el-icon>
            <refresh></refresh>
          </el-icon>
          刷新
        </el-button>
      </template>
      <!-- 根据传入配置文件list的slotName字段, 匹配到对应的具名插槽, 传入自定义表格内显示的内容 -->
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
      <!-- 自定义表格上面footer显示的内容 -->
      <template #footer> 芜湖 </template>
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

    const title = '用户列表'

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
      title,
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

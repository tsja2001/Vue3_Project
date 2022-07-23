<template>
  <div class="page-content">
    <hy-table
      :data="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      class="hy-table"
      v-model:page="pageInfo"
    >
      <!-- 自定义顶部的显示 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate">
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
          <el-button v-if="isDelete" size="small" type="text" plain>
            <el-icon>
              <delete></delete>
            </el-icon>
            删除
          </el-button>
          <el-button v-if="isUpdate" size="small" type="text" plain>
            <el-icon>
              <edit></edit>
            </el-icon>
            编辑
          </el-button>
        </div>
      </template>

      <!-- 配置动态插槽, 动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"> </slot>
        </template>
      </template>

      <!-- 自定义表格上面footer显示的内容 -->
      <template #footer> 芜湖 </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent, ref, watch } from 'vue'
import HyTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermissions'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    HyTable
  },
  setup(props: any) {
    const store = useStore()

    // 40 获取操作的权限
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')

    // 40 双向绑定pageInfo分页信息, 用于底部跳转导航栏定位
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })

    // 40 监听传入table组件中的pageInfo数据, 发生改变时重新请求数据
    watch(pageInfo, () => getPageData())

    // 请求对应数据
    const getPageData = (queryInfo: any = {}) => {
      // 若无权限, 则不发请求
      if (!isQuery) return
      store.dispatch('system/getPageListAction', {
        pageName: props.pageName,
        queryInfo: {
          // 动态处理分页信息
          offset: pageInfo.value.pageSize * pageInfo.value.currentPage,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    // 拿到对应数据
    const dataList = computed(() =>
      store.getters['system/pageListData'](props.pageName)
    )

    const dataCount = computed(() =>
      store.getters['system/pageListCount'](props.pageName)
    )

    // 获取其他动态插槽, 实现插槽跨组件传递. 父组件 -> pageContent -> hy-table
    // 过滤掉公共插槽, 拿到特有插槽
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName == 'status') return false
        if (item.slotName == 'createAt') return false
        if (item.slotName == 'upDateAt') return false
        if (item.slotName == 'handle') return false
        return true
      }
    )

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
}
.hy-table {
  margin-top: 20px;
}
</style>

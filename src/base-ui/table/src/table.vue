<template>
  <div class="hy-table">
    <!--
      表格顶部显示的内容,
      可以通过插槽自定义复杂内容的显示,
      也可以直接传参显示简单文字
    -->
    <div class="header">
      <h3 class="title">{{ title }}</h3>
      <div class="handler">
        <slot name="headerHandler"> </slot>
      </div>
    </div>
    <!-- 表格主体 -->
    <el-table
      :data="data"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      >
      </el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="60"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column v-bind="item" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 表格最下面显示的内容 -->
    <div class="footer" v-if="showFooter">
      <el-pagination
        :currentPage="page.currentPage + 1"
        :page-size="page.pageSize"
        :page-sizes="[3, 20, 30]"
        layout="total, sizes, prev, pager, next"
        :total="listCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    data: {
      type: Array,
      required: false
    },
    propList: {
      type: Array,
      required: false
    },
    // 数据个数, 底部跳转导航的显示
    listCount: {
      type: Number,
      default: 0
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    // 双向绑定的分页信息
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    // 可以展开的子元素
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    // 是否展示底部分页器
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    // 选中list的行事件, 通过事件总线向父组件传递事件
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    // 底部分页器选择事件
    // 底部分页器分页大小选择事件
    const handleSizeChange = (pageSize: number) => {
      // 因为使用了v-model双向绑定绑定了分页数据, 并起别名page
      // 所以传入变量为page, 传出事件为update:page
      // (默认为 modelValue和update:modelValue)
      emit('update:page', { ...props.page, pageSize })
    }
    // 底部分页器页码选择事件
    const handleCurrentChange = (currentPage: number) => {
      currentPage = currentPage - 1
      emit('update:page', { ...props.page, currentPage })
    }

    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.hy-table {
  padding: 20px;
}
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>

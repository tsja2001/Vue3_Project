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
        <el-table-column v-bind="item">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 表格最下面显示的内容 -->
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
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
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    // 选中事件, 通过事件总线向父组件传递事件
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }

    const currentPage4 = ref(4)
    const pageSize4 = ref(100)
    const small = ref(false)
    const background = ref(false)
    const disabled = ref(false)

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }

    return {
      handleSelectionChange,
      currentPage4,
      pageSize4,
      small,
      background,
      disabled,
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

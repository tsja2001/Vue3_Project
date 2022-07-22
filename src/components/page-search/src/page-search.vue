<template>
  <div class="page-search">
    <!-- 以v-model方式传入数据 -->
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button @click="handleResetClick" :icon="RefreshRight">
            重置
          </el-button>
          <el-button type="primary" :icon="Search" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyForm from '@/base-ui/form/src/form.vue'
import { Search } from '@element-plus/icons-vue'
import { RefreshRight } from '@element-plus/icons-vue'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  /**
   * 用于发请求向user组件传入数据, user组件再将事件传给conten组件.
   * 其中两个事件: 清空查询条件 / 改动查询条件 ⬇️
   */
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 优化1 formDate中的属性动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginalData: any = {}
    for (const item of formItems) {
      formOriginalData[item.field] = ''
    }
    const formData = ref(formOriginalData)

    // ⬆️动态获取formData,用于双向绑定表单, 代替原来写死的方式⬇️

    /**
     * (38)设置要双向绑定的数据, 用ref包裹
     const formData = ref({
       id: '',
       name: '',
       password: '',
       sport: '',
       createTime: ''
     })
     */

    // 40. 点击重置, 清空对象
    const handleResetClick = () => {
      /**
       * 重制的实现方法1 ⬇️
       * 因为在form.vue为了实现双向绑定, 其内部使用了
       * const formData = ref({ ...props.modelValue }) 解构浅拷贝
       * 如果重制时直接写 formData = formOriginalData, 内部对象没有变动, 重制不生效
       * for (const key in formData.value) {
       *   formData.value[`${key}`] = formOriginalData[key]
       * }
       */

      // 重制的实现方法2 ⬇️
      // 不是用双向绑定
      formData.value = formOriginalData
      // 传递查询事件 - 清空查询条件
      emit('resetBtnClick')
    }

    // 40 用户点击搜索, 传递查询事件
    const handleQueryClick = (e: any) => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      Search,
      RefreshRight,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.footer {
  padding: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>

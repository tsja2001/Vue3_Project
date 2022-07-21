<template>
  <div class="page-search">
    <!-- 以v-model方式传入数据 -->
    <hy-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" :icon="RefreshRight">重置</el-button>
          <el-button type="primary" :icon="Search">搜索</el-button>
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
  setup() {
    // (38)设置要双向绑定的数据, 用ref包裹
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return { formData, Search, RefreshRight }
  }
})
</script>

<style scoped>
.footer {
  padding: 20px;
}
</style>

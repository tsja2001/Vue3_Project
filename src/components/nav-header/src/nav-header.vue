<template>
  <div class="nav-header">
    <!-- 展开/折叠 icon -->
    <el-icon class="fold-class" @click="handleFoldClick">
      <!-- 根据isFold, 判断展开折叠 -->
      <component :is="isFold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 面包屑🍞和用户信息 -->
    <div class="content">
      <div class="router">面包屑</div>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  emits: ['flodChange'],
  components: {
    UserInfo
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    // 点击 折叠/展开 icon
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      // 通过事件总线, 向父组件传递折叠/展开的事件
      emit('foldChange' as any, isFold.value as any)
    }
    return { handleFoldClick, isFold }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 100%;
  .fold-class {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

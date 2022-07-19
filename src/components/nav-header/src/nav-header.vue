<template>
  <div class="nav-header">
    <!-- 展开/折叠 icon -->
    <el-icon class="fold-class" @click="handleFoldClick">
      <!-- 根据isFold, 判断展开折叠 -->
      <component :is="isFold ? 'Fold' : 'Expand'"></component>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['flodChange'],

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
  .fold-class {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
